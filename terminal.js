/* ============================================================
   terminal.js — Motor de terminal CRT/DOS
   Efeito typewriter, pausas, e captura de escolhas por
   botões ou pelo teclado (teclas numéricas / Enter / Espaço).
   ============================================================ */

const Term = (function () {
  const screenEl = document.getElementById('screen');
  const outputEl = document.getElementById('output');
  const choicesEl = document.getElementById('choices');
  const promptEl = document.getElementById('promptText');

  const NORMAL_SPEED = 17; // ms por caractere (velocidade normal)
  const FAST_SPEED = 2;    // ms por caractere (acelerado)
  const PAUSE_NORMAL = 850;  // pausa após uma narração (ms)
  const PAUSE_FAST = 120;    // pausa após narração quando acelerado

  let fastMode = false; // liga quando o jogador acelera o texto

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function scrollDown() {
    screenEl.scrollTop = screenEl.scrollHeight;
  }

  function clearScreen() {
    outputEl.innerHTML = '';
    choicesEl.innerHTML = '';
    fastMode = false;
  }

  // Espera um "avançar": clique na tela, Enter, Espaço ou Numpad Enter.
  function waitForAdvance() {
    return new Promise((resolve) => {
      function cleanup() {
        document.removeEventListener('keydown', onKey);
        screenEl.removeEventListener('click', onClick);
      }
      function onKey(e) {
        if (e.code === 'Enter' || e.code === 'Space' || e.code === 'NumpadEnter') {
          e.preventDefault();
          cleanup();
          resolve();
        }
      }
      function onClick() {
        cleanup();
        resolve();
      }
      document.addEventListener('keydown', onKey);
      screenEl.addEventListener('click', onClick);
    });
  }

  // Digita uma mensagem (pode conter \n) numa nova linha do output.
  // Clique ou Espaço durante a digitação completa a linha instantaneamente
  // e ativa o modo acelerado para as próximas linhas da mesma cena.
  async function typeMessage(text, cssClass) {
    const lineWrap = document.createElement('div');
    lineWrap.className = 'line' + (cssClass ? ' ' + cssClass : '');
    outputEl.appendChild(lineWrap);
    scrollDown();

    let skip = false;

    function onSkipKey(e) {
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'NumpadEnter') {
        skip = true;
      }
    }
    function onSkipClick() {
      skip = true;
    }

    document.addEventListener('keydown', onSkipKey);
    screenEl.addEventListener('click', onSkipClick);

    const chars = Array.from(text);
    let buffer = '';

    for (let i = 0; i < chars.length; i++) {
      if (skip) {
        buffer = text;
        lineWrap.innerHTML = escapeHtml(buffer).replace(/\n/g, '<br>');
        break;
      }
      buffer += chars[i];
      lineWrap.innerHTML = escapeHtml(buffer).replace(/\n/g, '<br>');
      scrollDown();
      await sleep(fastMode ? FAST_SPEED : NORMAL_SPEED);
    }

    document.removeEventListener('keydown', onSkipKey);
    screenEl.removeEventListener('click', onSkipClick);

    if (skip) fastMode = true;
    scrollDown();
    return skip;
  }

  // narrar(): equivalente à função narrar() do C — imprime e pausa.
  async function narrar(text, cssClass) {
    await typeMessage(text, cssClass);
    await sleep(fastMode ? PAUSE_FAST : PAUSE_NORMAL);
  }

  // print(): imprime texto sem pausa extra depois (equivalente a um printf simples).
  async function print(text, cssClass) {
    await typeMessage(text, cssClass);
  }

  // pausa(): equivalente à pausa() do C — pede Enter e limpa a tela.
  async function pausa() {
    promptEl.textContent = 'Pressione Enter (ou toque a tela) para continuar...';
    await waitForAdvance();
    promptEl.textContent = '';
    await sleep(250);
    clearScreen();
  }

  // enter(): equivalente ao flush de buffer do C — imperceptível ao jogador.
  async function enter() {
    await sleep(30);
  }

  // choice(): mostra opções como botões e aceita clique OU tecla numérica.
  // options: [{ n: 1, label: '...' }, ...]
  function choice(options) {
    return new Promise((resolve) => {
      choicesEl.innerHTML = '';

      function cleanup() {
        document.removeEventListener('keydown', onKey);
        choicesEl.innerHTML = '';
      }
      function pick(n) {
        cleanup();
        resolve(n);
      }

      options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML =
          '<span class="key">' + opt.n + '</span>' + escapeHtml(opt.label);
        btn.addEventListener('click', () => pick(opt.n));
        choicesEl.appendChild(btn);
      });

      function onKey(e) {
        const num = parseInt(e.key, 10);
        if (!isNaN(num)) {
          const found = options.find((o) => o.n === num);
          if (found) pick(found.n);
        }
      }
      document.addEventListener('keydown', onKey);
      scrollDown();
    });
  }

  function clear() {
    clearScreen();
  }

  // Tela de "boot" — aguarda primeira interação para permitir áudio/animações
  // e então dispara o callback de início do jogo.
  function onBoot(startCallback) {
    const boot = document.getElementById('boot');
    function begin() {
      boot.classList.add('hidden');
      document.removeEventListener('keydown', begin);
      boot.removeEventListener('click', begin);
      startCallback();
    }
    document.addEventListener('keydown', begin);
    boot.addEventListener('click', begin);
  }

  return {
    narrar,
    print,
    pausa,
    enter,
    choice,
    clear,
    onBoot,
  };
})();
