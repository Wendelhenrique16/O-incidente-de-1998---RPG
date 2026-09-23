/* ============================================================
   story.js — "O Incidente de 1998"
   Conversão fiel do jogo em C para uma máquina de estados em
   JavaScript. Todas as falas de narrar() e printf() do código
   original foram preservadas integralmente.
   ============================================================ */

(function () {
  const N = (t) => Term.narrar(t);
  const P = (t) => Term.print(t);
  const PA = () => Term.pausa();
  const EN = () => Term.enter();
  const CH = (opts) => Term.choice(opts);
  const CL = () => Term.clear();

  // -------- variáveis de estado (equivalentes às globais do C) --------
  const st = {
    balao: 0,
    medo: 0,
    vida: 1,
    menina: 0,
    lobo: 0,
    fugirVoador: 1,
    voador: 0,
    semRosto: 0,
    caracol: 0,
    sorriso: 0,
    casa: 0,
  };

  async function fimDeJogo() {
    Term.print("\n[ FIM DE JOGO ]", "system");
  }

  // ================= FUNÇÕES AUXILIARES (equivalentes ao C) =================

  async function iniciarJogo() {
    await N("26 de fevereiro de 1998\n");
    await N("quinta feira, 6h14 da manhã\n");
    await N(
      "Os primeiros raios de sol tímidos começam a iluminar as ruas do bairro da Terra Firme."
    );
  }

  async function fugirSemrosto() {
    await N("Continuando correndo, Você se pergunta o que era aquilo... ");
    await PA();
    await N("Isso não é natural...");
    await N("Mas é dificil pensar com toda essa adrenalina.");
    await N("Você já deve ter se afastado o suficiente.");
    await N("Parando de correr mas continuando andando");
    await N(
      "Você vira a esquina com a intenção de descansar em um local seguro do homem sem rosto..."
    );
    st.balao = 1;
  }

  async function sairSemrosto() {
    await EN();
    await PA();
    await N(
      "Você resolve ir embora, mesmo sendo a única pessoa que você encontrou por aqui, mas algo nessa pessoa não parece certo..."
    );
    await N("Deve ser mais seguro ir embora...");
    await N(
      "Pelo menos agora, você não está completamente sozinho, e talvez possa encontrar alguém para pedir orientação. "
    );
    await N(
      "O ambiente estava ficando cada vez mais sinistro, mas você estava ansioso por um encontro amigável."
    );
    await N(
      "O que você estava pensando né? é claro que ta tudo bem... só precisa encontrar alguem que seja menos ameaçador..."
    );
    await N(
      "E então, como se em resposta às suas preces, você vê alguém virando a esquina à frente. "
    );
    await N(
      " Era um alívio ver outra pessoa ali; afinal, estava ficando muito sinistro naquele lugar. "
    );
    await N(
      " Você caminha na direção da figura que se aproxima, esperando obter alguma ajuda ou informações."
    );
    st.balao = 1;
  }

  async function encostarSemRosto() {
    await N("Você se aproxima mais desse homem estranho");
    await N("Ele parece ja ter uma idade avançada...");
    await N("Ele está de costas para você, usando roupas de escritório.");
    await N(
      "Mesmo se aproximando, o homem não parece ter notado sua presença"
    );
    await N(
      "Você sente um arrepio percorrer sua espinha, algo não parece certo..."
    );
    await EN();
    await PA();
    await N(
      "Você se aproxima o suficiente dele, e põe sua mão em seu ombro"
    );
    await N("Com a esperança que ele apenas não te ouviu, você diz:");
    await N("- Senhor? pode me ajudar?");
    await N(
      "Você sente uma frieza ao encostar nele, para você, é como se estivesse tocando algo inanimado"
    );
    await PA();
    await N("Ele se vira lentamente a você...");
    await N("Quando ele vira o suficiente a ponto de você enxergar seu rosto...");
    await N("Uma sensação de pavor toma conta de você.");
    await N("Você nunca imaginaria ver isso, esse homem...");
    await N("Não tem rosto.");
    await PA();
    await N("Ao invés das feições humanas normais,");
    await N("Você vê apenas uma superfície lisa aonde deveria ser seu rosto");
    await N(
      "Como se alguém tivesse pegado uma borracha e apagado qualquer resquício de identidade desse homem."
    );
    await N("Ele vira seu 'rosto' em sua direção e...");
    await N("Agarra sua mão.");
    await N("Ele te segura com muita força.");
    await N(
      "E para você, sem entender que criatura é essa, luta contra o medo para agir."
    );
    await PA();
    st.medo = 1;
    await N("O que fará diante dessa situação?");
    const escolha = await CH([
      { n: 1, label: "Se debater e sair correndo." },
      { n: 2, label: "Tentar o derrubar e sair correndo" },
      { n: 3, label: "Gritar para que ele te solte" },
    ]);

    if (escolha === 3) {
      await N(
        "Você está um desespero crescente enquanto o homem sem rosto aperta sua mão com força absurda."
      );
      await EN();
      await PA();
      await N("Você grita o mais alto que pode, ecoando seu terror pela manhã tranquila.");
      await N("Seu grito corta o silêncio da manhã e ressoa como um lamento desesperado.");
      await N("Mas o homem sem rosto não se move, e sua aderência não afrouxa.");
      await N(
        "Você começa a perder a sensação em sua mão, e a dor intensa se espalha por seu corpo."
      );
      await PA();
      await N("Não há mais chances para você, e você percebe isso...");
      await N(
        "À medida que a escuridão envolve seus sentidos e sua visão se torna turva, ele se pergunta se há alguma esperança."
      );
      await N("Seu destino permanece incerto...");
      await N("o que acontecerá agora?");
      st.semRosto = 1;
      st.vida = 0;
    } else if (escolha === 1) {
      await N(
        "Você se debate com todas as suas forças, conseguindo se soltar do aperto gélido do homem sem rosto."
      );
      await EN();
      await PA();
      await N(
        "Recuando rapidamente, respirando pesadamente e com os olhos ainda cheios de terror."
      );
      await N(
        "O homem sem rosto não faz nenhum movimento para persegui-lo quando Afonso se afasta."
      );
      await N(
        "Ele permanece de pé no mesmo lugar, sua figura sinistra iluminada pela luz fraca que penetra no beco."
      );
      await N("Você percebe que o estranho não tentou impedi-lo de fugir.");
      await PA();
      await fugirSemrosto();
    } else {
      await N(
        "Você decide lutar contra o homem sem rosto, seus músculos tensos e o coração batendo descontroladamente."
      );
      await N(
        "Você o empurra com tudo que tem, tentando derrubar a criatura sinistra utilizando todo o seu conhecimento de judô que treinou quando era mais novo."
      );
      await EN();
      await PA();
      await N(
        "Há um breve momento de luta feroz, e finalmente, você consegue empurrar o homem sem rosto ao chão."
      );
      await N(
        "O impacto faz com que a criatura solte sua mão, permitindo que se afaste rapidamente."
      );
      await N(
        "A sua respiração está ofegante, você olha para trás para ter certeza de que o estranho não o está perseguindo."
      );
      await N(
        "O homem sem rosto permanece no chão, imóvel, sua figura estranha se destacando na luz fraca da rua."
      );
      await N(
        "Você sente um misto de alívio e terror, tentando entender o que acabou de acontecer."
      );
      await N(
        "Decidindo não perder mais tempo ali, você começa a correr, afastando-se da cena macabra."
      );
      await N(
        "A cada passo que dá, sua mente se enche de perguntas e medos, sem respostas claras à vista."
      );
      await PA();
      await fugirSemrosto();
    }
  }

  async function encontroBalao() {
    await N(
      "Quando vira a esquina escura e estreita, seu coração afundou ainda mais. Lá, à sua frente, estava uma figura grotesca."
    );
    await N(
      "Era uma criatura humanoide, mas sua cabeça, inflada como um balão gigante, era a característica mais perturbadora."
    );
    await N("Afonso podia sentir a presença maligna pairando sobre ele. ");
    await N(
      "A criatura se movia de forma desengonçada, como se estivesse amarrada a essa cabeça inchada e desproporcional, balançando para a frente e para trás, quase flutuando no ar."
    );
    await N(
      "Os olhos da criatura, pequenos e opacos, fixaram-se em Afonso com uma expressão vazia e ameaçadora."
    );
    await N(
      "Afonso sentiu um arrepio percorrer sua espinha e um calafrio de horror profundo correr por suas veias."
    );
  }

  async function perderCarro() {
    await N("Você decide voltar ao local onde estava estacionado seu carro...");
    await EN();
    await PA();
    await N(
      "procurando alguma segurança ou familiaridade em meio a essa situação bizarra."
    );
    await N(
      "No entanto, sua confusão e desespero aumentam quando ele percebe que o carro desapareceu."
    );
    await N("Ele olha ao redor em busca de pistas, mas não encontra nenhum sinal do veículo.");
    await N(
      "A sensação de desamparo cresce à medida que ele se vê em um local vazio e desconhecido, sem entender como seu carro desapareceu sem que ele percebesse."
    );
    await N(
      "Perguntas inundam sua mente, mas as respostas parecem distantes, e ele se sente perdido e desorientado."
    );
  }

  async function semCarro() {
    const escolha = await CH([
      { n: 1, label: "Sair andando a procura de alguém." },
      { n: 2, label: "Gritar por ajuda aleatoriamente." },
      { n: 3, label: "Voltar por onde veio." },
    ]);

    if (escolha === 1) {
      await N(
        "Você decide que a melhor opção é sair a pé em busca de alguma pista ou, pelo menos, da companhia de outra pessoa."
      );
      await N(
        "Enquanto caminha pelas ruas vazias, uma sensação de solidão e desamparo toma conta de você."
      );
      await N(
        ". Você tenta manter o ânimo, forçando um sorriso enquanto racionaliza que talvez todos os habitantes deste bairro tenham decidido viajar ao mesmo tempo."
      );
      await N("É uma coincidência estranha, mas não há motivo para entrar em pânico, certo?");
      await EN();
      await PA();
      await N("A cada passo que dá, a cidade se revela cada vez mais estranha. ");
      await N(
        "Você não encontra nenhuma alma viva nas ruas e nenhum sinal de movimento nos prédios à sua volta."
      );
      await N(
        " A sensação de que algo está muito errado só aumenta, mas você se recusa a admitir o medo."
      );
      await N(
        "Enquanto continua sua caminhada solitária, tentando manter-se são, você se pergunta o que pode estar acontecendo nesta cidade."
      );
      await N("As dúvidas crescem, mas as explicações continuam a fugir.");
      await N(
        "Você sabe que precisa encontrar alguém, qualquer pessoa, para obter informações ou pelo menos alguma companhia para enfrentar essa estranha situação."
      );
      await PA();
      await N("Mas...");
      await N(
        "Seu desamparo se transforma em um alívio instantâneamente ao avistar uma silhueta que parece ser de um homem adulto no meio da névoa andando."
      );
      await N(" - EI!, Você pode me ajudar? - você diz");
      await N("Mas a figura estranha não reage ao seu chamado");
      await N("O homem apenas continua se afastando andando lentamente.");
      const e2 = await CH([
        { n: 1, label: "Tentar o chamar novamente." },
        { n: 2, label: "Se aproximar e encostar em seu ombro" },
        { n: 3, label: "Ir embora" },
      ]);
      if (e2 === 1) {
        await EN();
        await N("Você o chama novamente.");
        await N("Mas não há resposta alguma.");
        const e3 = await CH([
          { n: 1, label: "Se aproximar e encostar em seu ombro" },
          { n: 2, label: "Ir embora" },
        ]);
        if (e3 === 1) {
          await encostarSemRosto();
          st.balao = 1;
          st.medo = 1;
          await EN();
          await PA();
        } else {
          await sairSemrosto();
          st.balao = 1;
        }
      } else if (e2 === 2) {
        await encostarSemRosto();
        st.medo = 1;
      } else {
        await sairSemrosto();
      }
    } else if (escolha === 2) {
      await N("Você sai pelas ruas gritando, o pânico toma conta de você");
      await N("Alguém pode ter roubado seu carro? Você não sabe responder se isso seria possível...");
      await N("A estranheza de não ver ninguém nas rua começa a dominar seus pensamentos.");
      await N(
        "Você grita por ajuda, sua voz ecoa pelas ruas vazias, mas não há resposta, apenas o eco distante de suas próprias palavras."
      );
      await N("O que está acontecendo? Por que a cidade está tão deserta?");
      await N(
        "As perguntas sem resposta continuam a martelar sua mente enquanto você continua sua busca desesperada por alguma presença, por alguma pista que possa explicar essa situação estranha."
      );
      await PA();
      await N("Desamparado e com o coração pesado, você tenta se convencer de que não há nada demais nisso.");
      await N(
        "Afinal, deve ter sido apenas um erro ter entrado em uma rua desconhecida por acaso, certo? "
      );
      await PA();
      await N(
        "À medida que continua a caminhar, seus olhos captam uma silhueta na névoa, virando a esquina à sua frente. "
      );
      await N("Um alívio quase palpável toma conta de você.");
      await N("Finalmente, outra pessoa!");
      await N(
        "Você decide segui-la, esperando encontrar alguém que possa explicar o que está acontecendo ou dar alguma orientação."
      );
      await PA();
      await N("Seu passo apressado o leva na direção da figura misteriosa.");
      await N(
        "Você chama por ela, tentando alcançá-la, mas a pessoa parece não ouvir ou ignorá-lo deliberadamente."
      );
      await N("Ao virar a esquina...");
      st.balao = 1;
    } else {
      await N("Você decide voltar por onde veio.");
      await N("A pé, você continua a retornar o caminho.");
      await N(
        "E continua não reconhecendo esse local, você está diante de prédios enorme e peculiares, você deveria se lembrar de ver isso, afinal, Você acabou de passar por aqui não foi?"
      );
      await N("Mas você só deve estar paranóico");
      await N("É normal, você acabou de ter o carro assaltado e nem viu...");
      await EN();
      await PA();
      await N("O ambiente é solitário e silencioso");
      await N("Os únicos barulhos do ambiente são os sons dos seus passos.");
      await N("Você segue andando por longos minutos...");
      await N("E nada parece mudar.");
      await PA();
      await N("Você continua andando, cada passo pesando cada vez mais em seus ombros.");
      await N("A sensação de estranheza é contínua, e você se sente cada vez mais desamparado.");
      await N("É isso? Você vai continuar perdido nesse local maldito?");
      await N(
        "Sua esperança começa a desaparecer, você não sabe aonde está nem por qual motivo isso está acontecendo com você."
      );
      await N("...");
      await PA();
      await N("Você se cansa de tanto andar, quanto tempo se passou?");
      await N("Minutos?");
      await N("Horas?");
      await N("Dias??");
      await N("Você não sabe mais...");
      await N("É como se você não saísse do lugar...");
      await N("e agora?");
      await N("Hm? o que é isso? é estranho...");
      await PA();
      await N("Um arrepio percorre sua espinha e você sente a necessidade de olhar para o céu.");
      await N("Ao erguer os olhos, sua respiração fica presa em sua garganta.");
      await N(
        "Lá, flutuando no céu acima de você, uma massa amorfa e grotesca de carne e tentáculos se contorce e se move sem asas."
      );
      await N("Seus muitos olhos encaram você, e um arrepio de terror absoluto corre por sua espinha.");
      await N("Você nunca viu algo assim antes, algo que desafia toda a lógica e compreensão.");
      await N(
        "A criatura voadora continua a flutuar no ar, pairando sobre você como uma presença sinistra e indescritível."
      );
      await N("O que é isso???");
      await N("Que lugar é esse???");
      await N("POR QUE ISSO ESTÁ ACONTECENDO COMIGO???");
      await N("Muitos pensamentos inundam sua mente.");
      await PA();
      await N("Você se sente totalmente impotente diante dessa abominação inominável.");
      await N("O que você fará diante dessa visão aterradora?");
      const e4 = await CH([
        { n: 1, label: "Ficar parado e observar a criatura." },
        { n: 2, label: "Correr em pânico." },
      ]);
      if (e4 === 1) {
        st.fugirVoador = 0;
        await N("Você decide ficar parado, hipnotizado pelo horror da criatura voadora.");
        await EN();
        await PA();
        await N(
          "Cada movimento da criatura parece não seguir nenhuma lei natural, e seu medo é avassalador."
        );
        await N(
          "Enquanto você observa, a criatura começa a emitir um som estridente e inumano, como uma cacofonia de gritos distorcidos."
        );
        await N(
          "A pressão em sua mente parece insuportável, e você sente que sua sanidade está pendurada por um fio."
        );
        await PA();
        await N("O que acontecerá agora?");
        st.vida = 0;
      } else {
        await N(
          "O pânico toma conta de você e você começa a correr desesperadamente em direção oposta à criatura voadora."
        );
        await EN();
        await PA();
        await N("Seus pés batem no asfalto enquanto você se afasta da terrível visão no céu.");
        await N("A criatura emite um som ensurdecedor atrás de você, e você sente sua presença malévola perseguindo-o.");
        await N("Você corre como nunca correu antes, com o medo impulsionando cada passo.");
        await PA();
        st.balao = 0;
      }
    }
  }

  async function caracolMorte() {
    await N(
      "Marlene adentra silenciosamente a casa, sua Desert Eagle especial pronta para qualquer ameaça que possa surgir. "
    );
    await N(
      "Enquanto investiga os cômodos escuros e empoeirados, ela nota um rastro de gosma incomum no chão. Sem hesitar, ela decide seguir esse rastro viscoso e perturbador pelas escadas."
    );
    await N("Ao chegar ao andar de cima, ela é confrontada com uma visão grotesca. ");
    await PA();
    await N("Uma criatura de aparência asquerosa se estende diante dela. ");
    await N(
      "Parece ser um amálgama de vários corpos que se combinaram para criar algo que se assemelha a um caracol gosmento. "
    );
    await N(
      "A criatura emite um som perturbador e parece tentar convencê-la a se juntar a eles, emitindo uma atração perturbadora.Marlene sente um estranho desejo de ceder à tentação, como se algo na criatura estivesse mexendo com sua mente. "
    );
    await N(
      "No entanto, sua experiência como agente da ACE a alerta de que isso é apenas um truque da entidade, uma armadilha perigosa. "
    );
    await N(
      "Ela puxa sua arma e começa a disparar, repetidamente, com uma determinação inabalável.A criatura é enorme e se contorce em desespero, tentando escapar dos tiros. "
    );
    await N("Mas Marlene é mais rápida, e seus tiros precisos atingem a criatura repetidamente. ");
    await N("Com um último estrondo, a criatura se desfaz em uma névoa escura, dissipando-se no ar.");
    await N("Marlene observa atentamente o quarto, mas quem quer que estivesse ali, já partiu há muito tempo. ");
    await N(
      "Ela sabe que seu dever é proteger o mundo dos horrores sobrenaturais, e, com sua mente e corpo ainda intactos, continua sua busca por respostas e ameaças que possam surgir em seu caminho."
    );
  }

  async function ACE() {
    await N("...");
    await PA();
    await N("03 de março de 1998\n");
    await N("4h29\n");
    await N(
      "A ACE, ou Agência de Contenção de Entidades, é uma organização especializada em proteger a população contra ameaças incomuns. "
    );
    await N(
      "Muitas vezes, essas ameaças são o que as pessoas considerariam mitos ou histórias inventadas. No entanto, dentro da ACE, temos plena consciência de que essas criaturas e fenômenos são reais."
    );
    await N(
      "Nosso principal objetivo é manter a ilusão de que essas ameaças são apenas lendas, para que o público em geral não entre em pânico."
    );
    await N(
      "Para atingir esse objetivo, agimos de maneira eficaz e discreta. Investigamos casos envolvendo o sobrenatural e tomamos medidas para contê-los o mais rapidamente possível."
    );
    await N(
      "Isso não apenas protege as pessoas de possíveis danos, mas também evita que o conhecimento sobre o mundo paranormal se espalhe. Acreditamos que é crucial manter um equilíbrio entre o mundo normal e o sobrenatural, para o bem de todos."
    );
    await PA();
    await N(
      "O local em que Afonso se perdeu é um lugar assombrado, uma região que se tornou infestada por atividades paranormais devido à presença de uma criatura paranormal incrivelmente poderosa. "
    );
    await N(
      "Essas áreas assombradas tendem a atrair outras criaturas e enfraquecem a barreira que separa o mundo normal do mundo espiritual."
    );
    await N(
      "A ACE tem estado monitorando essa situação de perto e investigando o caso. Vários relatos de pessoas desaparecidas na área aumentaram a preocupação, e Afonso é uma das vítimas desse desaparecimento."
    );
    await N(
      "Hoje, a equipe da ACE entrou em uma missão de resgate, determinada a encontrar Afonso e qualquer outra pessoa que possa estar presa nessa região assombrada. Agora, eles estão prestes a enfrentar os desafios dessa missão perigosa."
    );
    await N("Seu nome é Marlene, uma agente da ace, e está no meio de uma missão de resgate.");
    await N(
      "A investigação da agência indica que diversas pessoas desapareceram em circunstâncias misteriosas nesse local assombrado. Agora, sua equipe adentra nesse local amaldiçoado, determinada a trazer de volta os desaparecidos. "
    );
    await PA();
    await N(" Ao entrar nesse local desconhecido, você nota logo de cara a neblina densa que paira sobre a área. ");
    await N(
      "Ela envolve as ruas estreitas, obscurecendo sua visão e criando uma atmosfera enigmática. Cada passo que você dá parece ecoar, abafado pelo manto branco que envolve tudo."
    );
    await N("Você continua a adentrar as ruas, guiado apenas pelo fraco brilho dos postes de luz.");
    await N(
      "O ambiente ao seu redor parece deserto, com silhuetas de edifícios antigos que se erguem nas sombras. Não há sinal de vida ou movimento, exceto por sua própria presença solitária"
    );
    await N(
      "Mas você sabe que aqui não é seguro. Você não é uma simples civil; está fortemente armada e treinada para lidar com situações perigosas."
    );
    await N(
      "Com determinação, você decide procurar em cada canto dessa cidade, na esperança de encontrar qualquer vítima viva que possa estar escondida nas sombras."
    );
    await N(
      "Com a sua lanterna tática em mãos e a arma pronta, você começa a explorar becos estreitos, praças silenciosas e ruas desertas."
    );
    await N(
      "A névoa densa não desanima você; na verdade, ela aumenta ainda mais a sensação de que algo terrível aconteceu aqui. Cada sombra parece esconder um segredo, e você está determinado a desvendá-los."
    );
    await PA();
    await N("À medida que avança pela cidade, seus sentidos aguçados permanecem alertas. ");
    await N(
      "Cada barulho, cada movimento no canto do olho, tudo atrai sua atenção. Você está disposta a enfrentar o desconhecido e proteger os inocentes, mesmo que isso signifique confrontar as ameaças paranormais que rondam essas ruas."
    );
    await N(
      "Aqui é absurdamente gigante e solitário, como se fosse um bairro sinistro, mas logo essa solidão desaparece com os primeiros indícios de criaturas sobrenaturais a surgir"
    );
    await PA();
    await N("Enquanto Marlene vasculhava o ambiente sombrio e misterioso, deparou-se com várias entidades ameaçadoras. ");
    await N(
      "Ela empunhava uma arma confiável e não hesitou em atirar, cada tiro ecoando como um aviso sinistro para essas criaturas paranormais. "
    );
    await N(
      "Seu treinamento e coragem eram suas melhores aliadas nesse território hostil, e ela estava determinada a manter qualquer ameaça sob controle."
    );
    await N(
      "À medida que Marlene disparava contra as entidades, elas se desfaziam em névoa negra, evaporando no ar com um som sibilante. "
    );
    await N(
      "Cada tiro parecia enfraquecer essas criaturas sobrenaturais, dissipando sua presença sinistra e restaurando um pouco da paz naquele local assombrado. "
    );
    await N(
      "A confiança de Marlene crescia a cada disparo, pois suas habilidades e sua arma se provavam eficazes contra as ameaças paranormais que ousavam cruzar seu caminho."
    );
    await N(
      "Marlene continuou avançando com cautela, mantendo sua arma pronta, atenta a qualquer sinal de perigo. Enquanto explorava o ambiente desolado, algo chamou sua atenção."
    );
    await PA();
  }

  // ================= HISTÓRIA COM O CIVIL (menina) — bloco reutilizado =================
  async function encontroComACrianca() {
    await N("Uma voz infantil ecoa pelos seus ouvidos");
    await N("Interrompendo seu momento de desespero");
    await N("Você se vira para a rua e nota uma criança com um semblante desesperado");
    await N("Uma pequena garotinha, de não mais que 10 anos");
    await N("Mal da pra ver ela, a neblina está forte aqui....");
    await N("Mas ela ta andando apressadamente, Clamando por seus pais com uma voz trêmula");
    await N("Será mais uma vítima desse local maldito?");
    await PA();

    if (st.medo === 1) {
      await N("Não...");
      await N("Será que ela é uma das criaturas?");
      await N("Aquele homem também parecia normal...");
      await N("Mas ela com certeza tem um rosto.");
      await N("E parece tão assustada");
      await N("É só uma criança...");
      await N("Seria certo abandonar ela assim?");
      await N("Você se sente hesitante");
      await N("Mas, dividido sobre ajudar ou não.");
      await N("De alguma forma essa criança lembra a sua filha");
      await N("Ela deve estar na escola agora...");
      await N("Será???");
      await N("O que aconteceu aqui? Toda belém ta coberta por essas criaturas??");
      await N("Você tem que focar em sobreviver aqui... pedir ajuda as autoridades...");
      await N("mas antes disso, essa criança pode ser a resposta.");
      await PA();
      const escolha = await CH([
        { n: 1, label: "Ajudar a criança." },
        { n: 2, label: "Manter distância." },
      ]);
      if (escolha === 1) {
        await acolherCrianca();
      } else {
        await N("Você resolve...");
        await N("a ignorar.");
        await N("É mais seguro para você... deve ser a melhor escolha...");
        await N("É...");
        await EN();
        await PA();
        await N("Você permanece escondido");
        await N("Planejando seus próximos passos.");
        await N("Enquanto a criança se afasta chorando...");
        await N("O que irá acontecer agora?");
      }
    } else {
      await N("A criança está chamando por seus pais, parecendo assustada e solitária.");
      await N("Coitada... deve ter passado por tanta coisa.");
      await N("É tão pequena, não deveria estar nesse local");
      await N("Se ela continuar andando chamando atenção assim aquela entidade grotesca pode encontrar ela...");
      await N("Você não pode deixar ela morrer assim né?");
      await N("Ela lembra a sua filha");
      await N("Elas devem ter a mesma idade...");
      await N("Mas ela ta chamando muita atenção chorando tão alto assim");
      await PA();
      await N("Você tem que agir.");
      await N("E rapido...");
      await PA();
      const escolha = await CH([
        { n: 1, label: "Se aproximar da criança." },
        { n: 2, label: "Continuar escondido." },
      ]);
      if (escolha === 1) {
        await N("Você hesita por um momento, mas sua compaixão fala mais alto.");
        await N("Você se aproxima da criança, preocupado com a situação dela.");
        await acolherCrianca();
      } else {
        await N("Você decide continuar escondido, priorizando sua própria segurança.");
      }
    }
  }

  async function acolherCrianca() {
    await N("Você se aproxima da criança lentamente");
    await EN();
    await PA();
    await N("Ajoelhando-se ao seu lado você tenta acalmá-la");
    await N("Falando baixo e tentando fazer com que ela se sinta segura.");
    await N(
      "A criança, que continua chorando, esconde o rosto entre as mãos. O coração de Afonso se aperta de compaixão, imaginando o sofrimento pelo qual essa pequena deve ter passado."
    );
    await N("Você sussurra:");
    await N(" - Está tudo bem, Você está a salvo agora.");
    await N("A criança parece reagir ao som de sua voz e gradualmente deixa de chorar. ");
    await N("Afonso sente que está conseguindo acalmá-la e respira aliviado.");
    await N(
      "Você acha que, mesmo em meio ao terror, encontrou uma maneira de fazer a diferença na vida daquela criança."
    );
    await PA();
    await N("No entanto");
    await N("no momento em que ele menos espera");
    await N("A criança solta uma risadinha aguda");
    await N("que faz um calafrio percorrer a sua espinha.");
    await N("Ele olha para a criança e nota que algo está errado.");
    await N(
      "Seus olhos continuam vazios de emoção, e a expressão no rosto da criança não mudou desde que ele a encontrou, Como se fosse uma imagem estatica."
    );
    await PA();
    await N("Seu pesadelo não termina.");
    await N("O que irá acontecer com você agora?");
    st.menina = 1;
    st.vida = 0;
  }

  // ================= BLOCO DA CASA / ENTIDADE CARACOL =================
  async function entidadeDaCasa() {
    await N("Mas a resposta para as suas preces parece estar a frente...");
    await N("Correndo desesperadamente, você acaba encontrando uma casa com a porta aberta...");
    await N("Você sabe que a criatura atrás de você parece muito grande pra passar por essa porta");
    await N("Talvez seja uma boa opção se esconder nessa casa para não ser pego pela criatura.");
    await PA();
    const escolha = await CH([
      { n: 1, label: "Entrar na casa." },
      { n: 2, label: "Continuar correndo na rua" },
    ]);

    if (escolha === 1) {
      await N("Você entra");
      await EN();
      await PA();
      await N("Você entra na casa, buscando desesperadamente um local para se esconder.");
      await N("Você fecha a porta atrás de você com cuidado");
      await N("E olhando para frente...");
      await N("Você vê como o interior da casa é escuro e sombrio, mas bem espaçoso");
      await N("Há uma porta que leva a escada, e um corredor estreito que leva a outros quartos");
      await N("Parece ser uma especie de hotel...");
      await PA();
      await N("Enquanto você analisa o ambiente.");
      await N("Você escuta os sons grotescos da entidade do lado de fora da casa.");
      await N("Ela parece incapaz de entrar na casa, o que te proporciona um breve alívio.");
      await N(
        "No entanto, a sensação de segurança dura pouco. Quando você olha para a frente, vê uma visão horripilante."
      );
      await N("Vindo do corredor de quartos.");
      await N("Um som agoniante exala da escuridão.");
      await N("Quando seus olhos conseguiram se adaptar a escuridão e conseguir enxergar no que nela se esconde");
      await PA();
      await N("Você vê...");
      await N("Uma criatura horrenda.");
      await N("Um ser amalgamado de vários corpos humanoides, está se contorcendo diante de você.");
      await N("Sua forma se assemelha a um caracol gigante e distorcido, com muitos corpos entrelaçados em uma massa disforme.");
      await N("A criatura emite murmúrios e sussurros grotescos...");
      await N("como se estivesse te chamando...");
      await N("Tentando te persuadir a se juntar a ela...");
      await N("a se tornar parte daquela abominação.");
      await PA();
      await N("A entidade atrás de você ainda está la fora");
      await N("Talvez esperando que você saia novamente");
      await N("E a criatura caracol está vindo pelo corredor");
      await N("Será que da tempo de correr e subir as escadas?..");
      await N("Sei lá quem sabe o que essa entidade vai fazer com você caso te pegue...");
      await PA();
      await P("Você irá tentar sair da casa? ou irá tentar fugir do caracol subindo as escadas?");
      const e2 = await CH([
        { n: 1, label: "Sair." },
        { n: 2, label: "Subir as escadas." },
      ]);

      if (e2 === 1) {
        await N("Você resolve sair da casa.");
        await EN();
        await PA();
        await N("E la fora, Você vê a criatura te esperando");
        await N("Não há o que fazer");
        await N("Você por instinto volta para a casa fugindo dessa criatura que quase te alcança");
        if (st.lobo === 1) st.casa = 1;
        if (st.fugirVoador === 0) st.voador = 1;
        await PA();
        await N("Mas a entidade que se assemelha a um caracol esta muito perto.");
        await N("Você tenta correr até as escadas");
        await N("Mas a criatura ja está muito perto");
        await N("Ela segura sua perna com uma de suas várias mãos...");
        await N("E é absurdamente forte, você não sente que consegue se soltar... ");
        await N(
          "Não há o que fazer, ela te puxa lentamente até mais perto dela, a ponto de você conseguir sentir o calor repulsivo de seu corpo"
        );
        await PA();
        await N("O que acontecerá agora?");
        st.caracol = 1;
        st.vida = 0;
      } else {
        await N("Você decide que é melhor subir as escadas do que sair do prédio.");
        await EN();
        await PA();
        await N(
          "Você Corre em direção à porta que leva às escadas, e enquanto passa por ela, sente que uma das mãos da criatura caracol quase te alcança."
        );
        await N(
          "Você sobe as escadas rapidamente, e percebe que a criatura não é tão rápida quanto você. Há uma oportunidade de se esconder no andar superior."
        );
        const e3 = await CH([
          { n: 1, label: "Subir para o andar superior." },
          { n: 2, label: "Se esconder em um dos quartos do andar atual." },
        ]);

        if (e3 === 1) {
          await N(
            "Você, em um ato desesperado, corre escada acima, fugindo da criatura caracol que se move de maneira monstruosa e aterrorizante."
          );
          await EN();
          await PA();
          await N("Cada degrau parece uma eternidade, enquanto os rosnados da fera ecoam atrás de você.");
          await N(
            "No último andar, com as pernas tremendo, você abre a porta de um dos quartos e se esconde lá."
          );
          await N("Seu coração bate tão alto que teme que a criatura possa ouvi-lo.");
          await N("O quarto parece abandonado, com poeira e teias de aranha por todos os lados.");
          await N(
            "Você se encolhe em um canto, tentando controlar sua respiração e abafar qualquer som que possa entregá-lo à monstruosidade lá fora."
          );
          await N(
            "A sensação de perigo iminente está presente, mas a esperança de escapar da criatura ainda brilha em seu coração. "
          );
          await PA();
          await N("Você se encolhe no canto escuro do quarto...");
          await N(
            "segurando a respiração enquanto escuta o som repugnante da criatura gosmenta se movendo."
          );
          await N("O som é um pesadelo auditivo, uma combinação dissonante de arrastar, esguichar e gotejar...");
          await N(
            "Como se vários corpos humanoides tivessem sido fundidos em uma única massa gosmenta que se assemelha a um caracol grotesco."
          );
          await PA();
          await N("A criatura se aproxima da porta do quarto, fazendo você segurar a respiração com ainda mais força.");
          await N("Cada segundo parece uma eternidade, e sua mente está repleta de pensamentos aterrorizantes.");
          await N(
            "Mas, para seu alívio, o som gosmento gradualmente se afasta, indicando que a criatura seguiu seu caminho para outro lugar."
          );
          await N(
            "Você solta o ar que estava prendendo e tenta recuperar a calma. No entanto, a tensão ainda está no ar, e a incerteza paira sobre o que fazer em seguida. O quarto em que se encontra parece oferecer alguma proteção, mas a ameaça está longe de desaparecer completamente. "
          );
          await N("O que acontecerá agora?");
          st.casa = 1;
        } else {
          await N("Você toma uma decisão instintiva e se esconde em um dos quartos deste andar.");
          await EN();
          await PA();
          await N(
            "Com mãos trêmulas, você fecha e tranca a porta, dando passos silenciosos para trás enquanto mantém os olhos fixos na porta."
          );
          await N(
            "O medo faz seu coração acelerar, e você teme que até o mais leve som revele sua localização para a criatura."
          );
          await N(
            "No entanto, à medida que os segundos passam, você não consegue mais ouvir o som característico da criatura caracol..."
          );
          await N(
            " aquele ruído grotesco de um amálgama de corpos humanos presos em uma massa gosmenta, como se estivessem se movendo com dificuldade."
          );
          await PA();
          await N("Em vez disso, você sente algo diferente, algo que faz seu corpo inteiro gelar.");
          await N("Uma respiração quente e irregular toca a nuca, e você sabe que não está sozinho.");
          await N("Você cria coragem para se virar e tentar ver o que é...");
          await PA();
          await N(
            "Lenta e sinistramente, dois olhos aparecem na escuridão do quarto, brilhando como duas esferas de escuridão absoluta."
          );
          await N("Não há corpo visível, apenas esses olhos que observam você. E, eventualmente, um sorriso macabro se forma, revelando dentes afiados.");
          await N("O que acontecerá agora?");
          st.vida = 0;
          st.sorriso = 1;
        }
      }
    } else {
      if (st.lobo === 1) {
        await N("Você, tomando uma decisão rápida");
        await N("opta por não entrar na casa e, em vez disso, confiar em suas próprias pernas para continuar correndo.");
        await EN();
        await PA();
        await N("A criatura está cada vez mais próxima...");
        await N("seus passos pesados ecoando como um eco sinistro em sua mente.");
        await N("Os rosnados são agora quase ensurdecedores, e a atmosfera se torna cada vez mais sombria.");
        await N("Você tenta gritar e agitar os braços na esperança de afastar a fera, mas é em vão.");
        await N(
          "Ela avança inexoravelmente em sua direção, e você se vê diante de uma ameaça aterradora, incapaz de evitar o confronto iminente."
        );
        await N("O que acontecerá agora?");
        st.lobo = 1;
        st.vida = 0;
      } else {
        await N("Você resolve não entrar.");
        await EN();
        await PA();
        await N("Confiando nas suas próprias pernas, você segue correndo.");
        await N("Com o coração a martelar em seu peito,");
        await N("Você escolhe correr sem olhar para trás.");
        await N("Apesar de aterrorizante");
        await N("A criatura grotesca é surpreendentemente lerda em perseguição");
        await N("Após um tempo correndo, Você consegue criar uma distância segura");
        await N("e percebe que a entidade ja o perdeu de vista nessas ruas solitárias");
        await PA();
        await N("Ofegante e com as pernas tremendos");
        await N("Você não vê escolha alem de descansar e recuperar o folêgo");
        await N("Se esgueirando silenciosamente em um beco escuro e com um forte odor de lixo");
        await N("Você senta no canto, e se permite descansar");
        await PA();
        await N("Nesse momento de descanso, um turbilhão de pensamentos passam pela sua mente");
        await N("Onde estou?");
        await N("Por que comigo?");
        await N("Isso é um pesadelo?");
        await N("Por que não acaba??");
        await N("Só quero acordar...");
        await PA();
        await N("Um sentimento de desespero toma conta de você.");
        await N("Um nó em sua garganta que ameaça fazer lágrimas brotarem em seus olhos");
        await N("mas...");
        await PA();
        await encontroComACrianca();
      }
    }
  }

  // ================= ENCONTRO COM O BALÃO (após correr pela cidade) =================
  async function cenaBalao() {
    await N("Ao virar a esquina, Você se arrepende instantaneamente de ter se aproximado...");
    await PA();
    if (st.medo === 1) {
      await N("Parece que esse pesadelo só piora...");
      await encontroBalao();
      await N("O que ta acontecendo???");
      await N("O que é isso??");
      await N("Muitas perguntas, mas pouco tempo para respondê-las");
      await P("O que fazer agora?");
      const escolha = await CH([
        { n: 1, label: "Continuar correndo" },
        { n: 2, label: "Parar e a enfrentar." },
        { n: 3, label: "Desistir." },
      ]);
      if (escolha === 1) {
        await N("Você não sabe aonde está ou o que são essas coisas.");
        await N("Mas parado você não vai ficar.");
        await N("Você corre em desespero fugindo da criatura horrenda, nem mesmo olha para trás.");
        await EN();
        await PA();
        await N("Entrando numa rua, você uma possível saída...");
        await PA();
      } else if (escolha === 2) {
        await N(
          "Sob a luz pálida da manhã, o grito desesperado de Afonso ecoa pelas ruas. A entidade grotesca, com sua cabeça inflada, se aproxima com movimentos desengonçados."
        );
        await N("Os pequenos olhos opacos da criatura permanecem fixos em Afonso, emanando uma ameaça silenciosa.");
        await N(
          "Afonso, tomado pelo pânico, não vê alternativa senão gritar por socorro. Seu grito ecoa alto e assustador, preenchendo o ambiente com agonia e terror."
        );
        await N("A entidade, com dificuldade de locomoção devido à cabeça desproporcional, se aproxima rapidamente mas com calma.");
        await N(
          "Com um movimento rápido, quase doloroso, a criatura finalmente alcança Afonso. Neste ponto, o destino de Afonso permanece incerto"
        );
        await N("O que acontecerá agora?");
        st.vida = 0;
      } else {
        await N(
          "Afonso, confrontado com a insondável escuridão dos acontecimentos e as aterradoras entidades que parecem surgir dos recantos mais obscuros de sua mente, decide desistir."
        );
        await N("A sensação de desespero e confusão é avassaladora, e ele não consegue entender o que está acontecendo.");
        await N("Sem nenhuma esperança de compreender ou enfrentar essas criaturas horripilantes. ");
        await N("Afonso simplesmente...");
        await N("Fica paralisado.");
        await EN();
        await PA();
        await N("O que acontecerá agora?");
        st.vida = 0;
      }
    } else {
      await encontroBalao();
      await N("");
      await N("O que fazer agora?");
      const escolha = await CH([
        { n: 1, label: "Gritar por socorro" },
        { n: 2, label: "Correr desesperadamente." },
        { n: 3, label: "Ficar paralisado de medo" },
        { n: 4, label: "Tentar uma abordagem pacífica" },
      ]);
      if (escolha === 1) {
        await N("Você, tomado pelo pânico e controlado pelo medo,");
        await N(
          "Em um último ato de desespero, Afonso deixa escapar um grito estridente, uma combinação de pedido de socorro e o puro terror da morte iminente. O grito ecoa pelas ruas, preenchendo o ambiente com agonia e pavor. Ele toma um passo desajeitado para trás, tentando se afastar da entidade inchada que se aproxima com sua bizarra e desengonçada movimentação."
        );
        await N(
          "Mas o destino pareceu conspirar contra Afonso. Enquanto tentava recuar, seus pés enroscaram-se um no outro, e ele caiu de bruços no chão, impotente e à mercê das forças sobrenaturais que o cercavam."
        );
        await N(
          "O grito de Afonso, ao invés de atrair ajuda, parece ter alertado outras criaturas inumanas que se escondiam nos becos escuros. Elas emergem lentamente, cada uma com uma aparência que lembra a de pessoas, mas com um toque perturbador de falsidade. Seus olhos vazios brilham com malevolência, e a intenção de fazer mal a Afonso é evidente."
        );
        await N(
          "Enquanto Afonso tenta se levantar, a entidade balão se aproxima com um movimento rápido, mas desengonçado. A cabeça inflada da criatura se inclina na direção dele, como se estivesse prestes a realizar alguma ação terrível."
        );
        await N("O que acontecerá agora?");
        st.vida = 0;
      } else if (escolha === 2) {
        await N("O medo toma conta de Afonso, e ele decide que a única maneira de sobreviver é fugir o mais rápido possível.");
        await N("Ele corre pelas ruas escuras enquanto a criatura inchada tenta segui-lo, mas é notavelmente lenta.");
        await EN();
        await PA();
      } else if (escolha === 3) {
        await N(
          "O silêncio naquela rua sinistra era quebrado apenas pelo coração acelerado de Afonso, que parecia ecoar alto demais em seus ouvidos. O terror era tão avassalador que suas pernas se recusavam a obedecer. Ele estava paralisado, uma vítima indefesa diante da entidade inchada que se aproximava lentamente."
        );
        await N(
          "A criatura grotesca, com sua cabeça inflada e olhos vazios, parecia se mover com uma determinação sinistra. Seu braço distorcido se estendia em direção a Afonso, como se estivesse prestes a agarrá-lo. O ar estava impregnado de uma atmosfera de pesadelo, e o tempo parecia se arrastar dolorosamente enquanto o abismo se fechava entre eles."
        );
        await N(
          "O coração de Afonso martelava em seu peito, e seu corpo tremia incontrolavelmente. Ele sentiu o toque gelado do braço da entidade, como se a morte tivesse estendido suas garras para reivindicá-lo. O medo era esmagador, e a sensação de impotência o dominava."
        );
        await N(
          "Nesse momento de desespero, Afonso percebeu que suas opções eram limitadas. A entidade estava muito perto, e não havia escapatória óbvia. A criatura parecia impiedosa e determinada a alcançá-lo. Suas últimas esperanças pareciam desaparecer, e ele estava à mercê do desconhecido."
        );
        await N("O que acontecerá agora?");
        st.vida = 0;
      } else {
        await N("Em um ato de desespero, Afonso decide tentar uma abordagem mais pacífica.");
        await N(
          "Afonso, apesar do terror que sente diante daquela entidade grotesca, decide adotar uma abordagem pacífica. Com o coração batendo forte no peito, ele tenta manter a calma, levanta as mãos em um gesto de rendição e fala em um tom tranquilizador:"
        );
        await N("Por favor, acalme-se. Eu não quero nenhum problema. Estou apenas tentando entender o que está acontecendo aqui.");
        await N(
          "No entanto, a criatura não parece compreender suas palavras. Seus olhos pequenos e opacos permanecem fixos em Afonso, emitindo uma ameaça silenciosa. Ela se aproxima rapidamente, com movimentos desengonçados e tortos, como se seu corpo não estivesse sincronizado."
        );
        await N(
          "Afonso recua lentamente, mantendo os olhos na entidade enquanto dá passos para trás. Ele percebe que a criatura está quase a alcançando, e a sensação de desespero começa a se intensificar."
        );
        await N("O que acontecerá agora?");
        await PA();
        st.vida = 0;
      }
    }
  }

  // ================= FUGIR DO ENCONTRO NO BECO ("gritar por ajuda") =================
  async function encontroBeco() {
    await N("O que deseja fazer?");
    const escolha = await CH([
      { n: 1, label: "Continuar a andar gritando." },
      { n: 2, label: "Ver de onde vem o barulho." },
      { n: 3, label: "Voltar por onde veio." },
    ]);

    if (escolha === 1) {
      await N("Ignorando o barulho que pensa ser apenas um cachorro...");
      await N("você continua a andar gritando.");
      await N("Seu chamado ecoa pelas ruas vazias, mas a falta de resposta o deixa ainda mais angustiado.");
      await N(
        "Você mantém a esperança de encontrar alguma resposta ou ajuda, enquanto a cidade, banhada pela luz do dia, permanece enigmática e deserta."
      );
      await N("No entanto, o barulho misterioso continua a ecoar atrás de Afonso.");
      await N(
        "Você decide se afastar, acreditando que talvez tenha sido um equívoco. Mas, de repente, algo se move com brusquidão e faz barulho, agora mais próximo."
      );
      await EN();
      await PA();
      await N("O QUE É ISSO???");
      await N("Completamente aterrorizado");
      await N("Você se vira e se depara com uma criatura que, à primeira vista, parece uma aberração híbrida.");
      await N("Ela se assemelha a um ser humano alto e torto, mas seu aspecto é inegavelmente bestial.");
      await N(
        "Seu corpo está coberto de pelos, e sua pele é pálida e irregular, como se estivesse em constante transformação."
      );
      await N("Os olhos da criatura brilham com uma hostilidade ameaçadora, e suas garras afiadas se projetam das mãos.");
      await N("Você nunca viu algo parecido em sua vida nem mesmo em sonhos...");
      await PA();
      await N("Essa figura sinistra e distorcida avança em sua direção..");
      await N("emitindo grunhidos guturais.");
      await N("Sua presença é aterradora");
      await N("se encontra em uma situação desesperadora.");
      await N("O que Afonso fará diante dessa ameaça iminente? Fugir para tentar escapar da criatura ou lutar por sua vida?");
      const e2 = await CH([
        { n: 1, label: "Sair correndo" },
        { n: 2, label: "Tentar brigar" },
      ]);
      if (e2 === 1) {
        await N("Com um coração acelerado e sem hesitar,");
        await N("Você decide que a melhor opção é fugir.");
        await EN();
        await PA();
        await N("Você dispara em uma corrida desesperada pelas ruas vazias da cidade, sem olhar para trás.");
        await N(
          "Atrás de você, os passos pesados da criatura e seus rosnados guturais ecoam como um sinistro lembrete de que a ameaça está próxima."
        );
        await N("Correndo como nunca antes, sua respiração ofegante e a adrenalina pulsando em suas veias.");
        await PA();
        await N("Você lança pelas ruas sinuosas,");
        await N("Dobrando esquinas e saltando obstáculos enquanto a criatura o persegue implacavelmente.");
        await N("A cidade misteriosa parece esticar-se infinitamente");
        await N("Tornando a fuga uma verdadeira provação.");
        await N("Mas você não quer morrer. você mantém o foco, ignorando a fadiga e a incerteza que o cercam.");
        await N("Sua vida está em jogo");
        await N("então continue correndo como se não houvesse amanhã.");
        await PA();
      } else {
        await EN();
        await PA();
        await N("Você, sem enxergar alternativa alguma além de lutar pela sua vida");
        await N("reúne todas as forças que tem.");
        await N("O medo que o envolve não o paralisa");
        await N("mas sim o impulsiona a tentar de todas as maneiras possíveis se defender daquela ameaça desconhecida.");
        await N("Gritando em desespero, você balança os braços, tentando afastar a criatura.");
        await N("Seu coração martela em seu peito, e sua mente se torna uma névoa de puro instinto de sobrevivência.");
        await N("Mas, infelizmente, seus esforços são em vão.");
        await N("A criatura, inabalável em sua determinação");
        await N("continua a se aproximar...");
        await N("ignorando os gritos e os seus gestos.");
        await N("Seus olhos brilham com hostilidade, e as garras afiadas permanecem prontas para o ataque.");
        await N("...");
        await PA();
        await N("O que acontecerá a seguir?");
        st.lobo = 1;
        st.vida = 0;
      }
      st.lobo = 1;
    } else if (escolha === 2) {
      await N("Você decide verificar de onde vinha o barulho,");
      await EN();
      await PA();
      await N("Aproximando-se cautelosamente do beco.");
      await N("Ao se aproximar");
      await N("O barulho para");
      await N("E você chama em busca de qualquer presença");
      await N("O beco está repleto do forte odor de lixo");
      await N("mas, estranhamente, parece estar vazio.");
      await N("Entretanto, quando você se vira para sair do beco,");
      await N("E você mal teve a chance de perceber o que estava acontecendo.");
      await N("Um movimento brusco ocorre atrás dele,");
      await N("e por instinto");
      await N("Você se vira na direção do barulho.");
      await N("Mas infelizmente, era tarde demais para reagir...");
      await N("O que irá acontecer agora?");
      st.lobo = 1;
      st.vida = 0;
    } else {
      await N("Você volta ate onde estava...");
      await perderCarro();
      await semCarro();
    }
  }

  // ================= "EXPLORAR A CIDADE SOLITÁRIA" =================
  async function explorarCidade() {
    await N(
      "As ruas parecem desertas, você sai do carro e não vê nada além do asfalto, casas e uma leve neblina matinal que dar um ar um pouco mais sombrio ao ambiente solitário."
    );
    await N("Tudo parece tão estranho, tão sozinho, tão silencioso, um silêncio opressor...");
    await N("Como se a cidade toda estivesse dormindo, e você sendo o unico acordado.");
    await N(
      "Olhando em volta, você percebe como não faz ideia de onde está, a propria arquitetura das casas parece ser um pouco antiga, nada tão fora do comum, mas é estranho você não saber da existência de uma rua tão peculiar."
    );
    await N("Mas a vida não para com você parado, você decide agir");
    await PA();
    await N("O que decide fazer neste ambiente desolado e estranho?");
    const escolha = await CH([
      { n: 1, label: "Bater na porta de alguem" },
      { n: 2, label: "Sair andando a procura de alguém." },
      { n: 3, label: "Gritar por ajuda aleatoriamente." },
      { n: 4, label: "Voltar para o carro." },
    ]);

    switch (escolha) {
      case 1:
        await N("Você caminha até uma das casas, com a esperança de ver um rosto qualquer por aqui, e... ");
        await N("toc toc toc...");
        await N("toc... toc...");
        await N("toc");
        await EN();
        await PA();
        await N("Não há respostas.");
        {
          const e2 = await CH([
            { n: 1, label: "Tentar em outra casa" },
            { n: 2, label: "Voltar" },
          ]);
          if (e2 === 1) {
            await N("Há outras casas por aqui, você decide bater em outras portas");
            await N("mas ninguem atende nenhuma.");
          } else {
            await N("Você decide voltar, sem muitas esperanças...");
          }
        }
        await N("você retorna ate aonde estava...");
        await N(
          "Mas você não sabe mais aonde está, você se afastou por no maximo alguns metros, e ao retornar não reconhece o local"
        );
        await N("seu carro deveria estar ali nao deveria?? aonde ele está?");
        await N("perguntas começam a transbordar em sua mente");
        await N("algo estranho está acontecendo mas você não tem certeza do quê exatamente...");
        await EN();
        await PA();
        await semCarro();
        break;

      case 2:
        await N(
          "Afonso continua sua busca solitária por alguém nas ruas desertas da cidade. O vazio e o silêncio que o cercam são inquietantes, e ele se pergunta por que tudo está tão deserto."
        );
        await N("No entanto, sua preocupação logo encontra alívio quando ele avista uma figura virando a esquina à sua frente.");
        await N("Afonso sente um misto de esperança e alívio ao ver outra pessoa naquela cidade estranhamente vazia. ");
        await N(
          "Decidido a se conectar com essa pessoa, ele acelera o passo e segue na direção da esquina, ansioso para encontrá-la e obter algumas respostas sobre a situação incomum em que se encontra."
        );
        await EN();
        await PA();
        st.balao = 1;
        break;

      case 3:
        await N("Você, embora preocupado com a situação estranha...");
        await N("tenta manter a calma enquanto sai andando e gritando...");
        await N("determinado a descobrir o que está acontecendo.");
        await N("Seus passos são firmes, e você vocaliza seu chamado de uma maneira menos aterrorizada");
        await N("Mantém a esperança de encontrar alguma resposta ou ajuda");
        await N("Mas a ausência de resposta continua a ser desconcertante.");
        await N("As ruas, banhadas pela luz do dia, permanecem vazias e silenciosas, e a cidade parece estar envolta em um enigma.");
        await EN();
        await PA();
        await N("Você continua gritando...");
        await N(
          "Elevando a voz enquanto busca desesperadamente por uma resposta ou uma presença humana naquela cidade estranhamente deserta."
        );
        await N("Seu apelo ecoa pelas ruas, preenchendo o ar com a agonia de sua situação.");
        await N("No entanto, sua busca é interrompida por um som vindo de um beco mal iluminado pelas manhãs.");
        await PA();
        await N("Deve ser só um cachorro...");
        await N("Você considera que podia ser um cachorro,");
        await N(
          "Mas a curiosidade e a necessidade de encontrar algum tipo de contato o instigam a conferir o que está acontecendo naquele beco"
        );
        await encontroBeco();
        break;

      case 4:
        await N("Você decide voltar ao seu carro... mas que estranho, você não tinha deixado ele estacionado bem aqui?");
        await N("Você olha em volta e não vê seu carro");
        await semCarro();
        break;
    }
  }

  // ================= FUNÇÃO PRINCIPAL =================
  async function mainStory() {
    await N(
      "**Disclaimer**\nEste jogo é uma obra de ficção e todas as situações, personagens e eventos apresentados são fictícios."
    );
    await N("Qualquer semelhança com pessoas reais, vivas ou falecidas, é puramente coincidência.");
    await N(
      "Aventura-se neste mundo sombrio por sua conta e risco. Os desafios que encontrará são parte da narrativa e não devem ser interpretados como representações da realidade."
    );
    await N(
      "Aproveite a experiência e lembre-se de que você está embarcando em uma jornada fictícia, criada para seu entretenimento e imaginação. Boa sorte!"
    );
    await PA();

    CL();
    await N("Bem vindo ao incidente de 1998");
    const escolhaInicial = await CH([
      { n: 1, label: "Iniciar jogo." },
      { n: 2, label: "Sair" },
    ]);
    await EN();
    CL();

    if (escolhaInicial !== 1) {
      await fimDeJogo();
      return;
    }

    await iniciarJogo();

    // Introdução '1'
    await N(
      "Neste dia, você, Afonso Vieira da Alcantara, um respeitado professor de literatura com 48 anos, "
    );
    await N("segue a rotina de sempre, dirigindo seu Fiat Uno em direção à escola onde ensina.\n");
    await N("O som do motor confiável e o cheiro suave do carro familiar lhe trazem uma sensação de conforto, ");
    await N("mas também revelam vestígios de cansaço acumulado ao longo dos anos.\n");
    await N("Enquanto observa as ruas familiares, você se prepara para mais um dia de ensinamentos ");
    await N("encarando a exaustão que faz parte da sua jornada cotidiana.");
    await PA();

    await N("\nVocê segue o mesmo caminho de sempre como todos os dias. ");
    await N("Conhece cada rua e beco desta cidade como a palma de sua mão.");
    await N("No entanto, algo inesperado acontece hoje. ");
    await N(
      "Ao virar a esquina, depara-se com uma construção em andamento, bloqueando completamente o caminho que costuma seguir. "
    );
    await N(
      "Não há escolha a fazer a não ser pegar um desvio. Mas tudo bem, você vive nesta cidade desde que nasceu, e cada rua, cada beco, cada desvio é familiar para você."
    );
    await N("Você pega o desvio sem se preocupar, confiante de que logo estará de volta ao caminho usual.");
    await PA();

    // Se perder no ambiente desconhecido '2'
    await N(
      "Assim, você seguiu a rua, sem dar muita importância, concentrando-se nos pensamentos sobre o assunto que iria ensinar hoje."
    );
    await N(
      "Depois de alguns minutos dirigindo, você percebe que já deveria ter passado pelo supermercado que costuma usar como referência. "
    );
    await N(
      " Você se questiona se talvez tenha passado sem perceber, você decide continuar indo em frente? afinal, o caminho reto o levaria de volta à rua principal, embora fosse um caminho um pouco mais longo até a escola, ou decide voltar a procura do supermercado?"
    );
    const escSuper = await CH([
      { n: 1, label: "Continuar a seguir." },
      { n: 2, label: "Dar meia volta" },
    ]);
    if (escSuper === 2) {
      await N("você decide dar meia volta...");
    } else {
      await N("você continua reto...");
    }
    await EN();
    await PA();
    await N(
      "Você continua dirigindo, tentando achar seu caminho, minutos se transformando em muitos minutos, e logo você percebe algo estranho: não há sinal de vida nas ruas."
    );
    await N(" Não há pedestres, nenhum animal de rua, e você não vê nenhum outro carro à vista.");
    await N(
      "isso é incomum, especialmente para esta hora do dia. O silêncio e a solidão das ruas começam a causar um certo desconforto."
    );
    await PA();
    await N(
      "Você continua seguindo adiante, mas a sensação de que algo está errado se intensifica. "
    );
    await N(
      "Você não reconhece nenhum dos edifícios ao seu redor, e a cidade parece ter se transformado em um lugar completamente diferente."
    );
    await N("Agora, a pergunta se torna ainda mais urgente: Onde estou?...");
    await N("Perceber que não há ninguém nas ruas é perturbador.");
    await PA();

    // Desamparado no local desconhecido '3'
    await N("Dirigindo por mais alguns minutos, seu carro simplesmente para");
    await N("Deixando-o perplexo no meio daquela rua desconhecida. O que você decide fazer?\n");

    let loop = true;
    while (loop) {
      const escolhaCarro = await CH([
        { n: 1, label: "Checar Gasolina" },
        { n: 2, label: "Verificar o Motor" },
        { n: 3, label: "Tentar Ligar o Carro Novamente" },
        { n: 4, label: "Sair do Carro e Procurar Ajuda." },
      ]);
      switch (escolhaCarro) {
        case 1:
          await N("Você verifica o indicador de combustível para se certificar de que não está sem gasolina.");
          await N("Para a sua surpresa, parece ter gasolina o suficiente, não deve ser por isso...");
          await EN();
          await PA();
          await P("O que tentar agora?");
          break;
        case 2:
          await N("Você decide verificar o motor do carro para ver se algo está visivelmente errado.");
          await N("Mas para a sua infelicidade, não parece haver nada de errado no motor");
          await EN();
          await PA();
          await P("O que tentar agora?");
          break;
        case 3:
          await N("Você desliga a chave e tenta ligar o carro novamente, esperando que seja apenas um problema temporário.");
          await N("Mas o carro não da nem sinal de ligar, e agora?");
          await EN();
          await PA();
          await P("O que tentar agora?");
          break;
        case 4:
          await N("Com o carro parado e as ruas desertas, Afonso decide sair e explorar a área a pé,");
          await N("na esperança de encontrar alguém que possa ajudá-lo.");
          await EN();
          await PA();
          loop = false;
          break;
      }
    }

    await explorarCidade();

    if (st.vida === 1) {
      if (st.balao === 1) {
        await cenaBalao();
      }
    }

    if (st.vida === 1) {
      await entidadeDaCasa();
    }

    await ACE();

    if (st.vida === 0) {
      if (st.balao === 1 && st.menina === 0 && st.sorriso === 0) {
        await N(
          "Uma cena aterradora se desenrola diante de seus olhos. "
        );
        await N(
          "Uma criatura grotesca, com uma cabeça absurdamente inchada, que se assemelha a um balão preso a um corpo fraco e frágil, lidera um bando de outras entidades igualmente horrendas. "
        );
        await N(
          "Assim que percebem sua presença, as criaturas se lançam em sua direção, movendo-se de maneira desajeitada e ameaçadora. O ar fica pesado de tensão enquanto essas abominações se aproximam, prontas para o ataque. "
        );
        await N("Você mal tem tempo para pensar, pois está prestes a enfrentar um confronto desesperado contra essas entidades.");
        await PA();
        const escolha = await CH([
          { n: 1, label: "Ficar parada e atirar." },
          { n: 2, label: "Pegar distancia." },
        ]);
        if (escolha === 1) {
          await N("Você enfrenta as entidades sem mostrar medo. ");
          await N(
            "Firme e confiante, você mantém sua Desert Eagle especial mirada nelas e atira sem hesitação. "
          );
          await N(
            "Os tiros ecoam nas ruas desertas enquanto as criaturas se aproximam, uma a uma caindo sob a chuva de balas. Seu treinamento e sua arma confiável provam ser sua maior vantagem, e as entidades não têm chance contra sua determinação."
          );
        } else {
          await N("Mantendo uma distância segura, você começa a atirar nas entidades que se aproximam. ");
          await N("Uma a uma, elas caem diante de sua arma confiável. ");
          await N(
            "Seus tiros são precisos e letais, fazendo com que as entidades desapareçam e se desfaçam em névoa negra. Você mostra coragem e habilidade enquanto mantém o controle da situação, eliminando as ameaças sobrenaturais que tentam se aproximar. "
          );
          await N("Seu objetivo é claro: proteger-se e garantir sua sobrevivência a todo custo.");
        }
        await EN();
        await PA();
        await N(
          "À medida que o confronto se desenrola, as criaturas vão perecendo uma após a outra. Até que, finalmente, resta apenas a entidade balão, a mais grotesca de todas. "
        );
        await N(
          "Você aponta sua arma e dispara, atingindo a cabeça inchada da criatura. A cabeça parece começar a esvaziar, fazendo com que o balão murche gradualmente. Você não hesita e dispara mais uma vez, finalizando o serviço."
        );
        await N(
          "Com a última criatura derrotada, você se aproxima do corpo inerte do civil, que infelizmente não sobreviveu ao encontro com as entidades. Você olha para a cena com pesar, reconhecendo a tragédia que ocorreu aqui"
        );
        await PA();
      }

      if ((st.menina === 1 && st.balao === 1) || (st.menina === 1 && st.semRosto === 1)) {
        await N("Ela avista a pequena criança segurando a mão do que parece ser um homem adulto. ");
        await N("A princípio, poderia parecer um encontro improvável em uma cidade tão vazia. ");
        await N(
          "Com passos silenciosos, Marlene se aproxima, sua arma pronta, mas não apontada. Ela pergunta com suavidade, Estão bem? Precisam de ajuda?"
        );
        await N(
          "A criança se vira lentamente, revelando um rosto imóvel permanentemente preso em uma expressão de tristeza profunda. Seus olhos vazios não contêm qualquer traço de humanidade. "
        );
        await N(
          "Então, a verdade se torna clara. A criança é, na verdade, uma entidade sobrenatural. O homem adulto a seu lado é sua vítima, morto, mas ainda sob seu controle"
        );
        await N(
          "Sem piedade, Marlene toma uma decisão. Com destreza e determinação, ela aponta sua arma e atira diretamente na entidade. Um som estrondoso de sua arma ecoa pelas ruas desertas, e a entidade se desmancha em uma névoa escura, dissipando-se no ar. Tudo o que resta é o corpo sem vida do homem, finalmente liberto do domínio maligno."
        );
        await EN();
        await PA();
      }

      if (st.lobo === 1) {
        if (st.casa === 1) {
          await caracolMorte();
        } else {
          await N(
            " De repente, seus olhos se fixam em uma figura que se assemelha a um homem, mas é extremamente animalesca. Garras afiadas como lâminas e dentes pontiagudos como um lobisomem indicam que essa criatura não é de origem humana."
          );
          await N("Sem hesitar, Marlene levanta sua Desert Eagle especial e dispara uma, duas, três vezes em rápida sucessão. ");
          await N(
            "O som dos tiros ecoa pela cidade vazia enquanto os projéteis atingem o ser animalesco. Em resposta, a criatura começa a se desfazer em uma névoa escura, dissipando-se no ar."
          );
          await N(
            "Marlene se aproxima do local onde a criatura estava, e é então que percebe o que realmente aconteceu. Ali havia um corpo de um civil, já sem vida, provavelmente sendo devorado pela criatura antes de sua intervenção. "
          );
          await N(
            "O corpo está imóvel, coberto por arranhões profundos e mordidas letais, deixando claro a brutalidade que a criatura era capaz de infligir."
          );
          await N(
            "Marlene sente um pesar momentâneo por não ter chegado a tempo de salvar a vítima, mas ela sabe que, nesse mundo sobrenatural e perigoso, é necessário fazer escolhas difíceis para proteger a humanidade. Ela continua sua missão, determinada a garantir a segurança daqueles que ainda podem ser salvos."
          );
          await PA();
        }
      }

      if (st.fugirVoador === 0 || st.voador === 1 || st.semRosto === 1) {
        await N("Marlene avança com cautela pelas ruas desoladas da cidade, ciente de que criaturas sinistras podem surgir a qualquer momento. ");
        await N("Avistando um homem andando sem rosto andando pelas ruas, Marlene decide atacar, mas...");
        await N(
          " De repente, seu olhar se ergue para o céu, onde uma massa gigante de carne flutua de forma grotesca e perturbadora. "
        );
        await N(
          "A monstruosidade é avassaladora, e Marlene sabe que não há como enfrentá-la diretamente. Sua única opção é esperar que a coisa passe."
        );
        await N(
          "Enquanto aguarda, Marlene nota algo mais próximo do chão. Um corpo imóvel de um possível civil, deitado no chão. "
        );
        await N(
          "Ela espera pacientemente que a massa de carne flutuante se afaste o suficiente antes de se aproximar do corpo.Ao se aproximar, Marlene vê um civil já sem vida a vários dias."
        );
        await N(
          "Não há feridas visíveis em seu corpo, mas o que chama a atenção é a expressão de terror congelada no rosto da vítima. "
        );
        await N(
          "É como se a pessoa tivesse testemunhado algo inimaginável que a deixou aterrorizada até o momento de sua morte. "
        );
        await N("Marlene compreende que esse mundo sobrenatural está repleto de horrores insondáveis, e cada descoberta só aumenta a complexidade de sua missão. ");
        await N("Com respeito pela vida perdida, ela continua sua jornada, determinada a enfrentar qualquer desafio para proteger o que resta da humanidade.");
        await PA();
      }

      if (st.caracol === 1 && st.menina === 0) {
        await caracolMorte();
      }

      if (st.sorriso === 1) {
        await N("Marlene adentra silenciosamente a casa deserta, sua Desert Eagle especial pronta para qualquer ameaça. ");
        await N(
          "À medida que explora os cômodos escuros e empoeirados, ela se depara com uma cena horrível em um dos quartos. "
        );
        await N("O corpo parcialmente devorado de um civil está deitado no chão, e o que aconteceu ali é uma incógnita.");
        await N("Enquanto Marlene observa o cenário perturbador, algo a encara do escuro profundo do quarto. ");
        await PA();
        await N(
          "Dois olhos brilhantes a fixam, imersos nas sombras a ponto de não ser possível ver o corpo da criatura. Antes que Marlene possa reagir, a criatura salta em sua direção, surpreendendo-a."
        );
        await N(
          "No chão, elas lutam freneticamente, e Marlene, usando sua destreza e treinamento, consegue alcançar sua arma. "
        );
        await N(
          "Com rapidez, ela aponta sua Desert Eagle e um estampido ecoa pelo quarto enquanto ela atira diretamente na criatura, encerrando sua ameaça."
        );
        await N(
          "A criatura cai no chão, imóvel e sem vida. Marlene se levanta, respirando pesadamente, enquanto lamenta o destino do civil que teve o azar de encontrar uma criatura tão terrível. "
        );
        await N(
          "Esse mundo sobrenatural está cheio de horrores, e ela sabe que sua missão é impedir que esses horrores se espalhem para além do que já ocorreu. Com a determinação firme, ela continua sua busca, ciente de que desafios ainda maiores podem surgir a qualquer momento."
        );
        await PA();
      }

      await N("Afonso");
      await N("Está morto...");
      await N("Obrigado por jogar.");
    } else {
      if (st.casa === 1 && st.lobo === 0) {
        await caracolMorte();
        await N(
          "Marlene continua sua investigação na casa desolada, abrindo a porta de um quarto com cuidado, sem saber o que encontrará. "
        );
        await N(
          "Seus olhos se fixam em um civil, ainda vivo, mas visivelmente fraco e desidratado, deitado no chão. Ela se aproxima silenciosamente e gentilmente o acorda."
        );
        await PA();
        await N(
          "O civil, ao abrir os olhos, fica assustado e confuso com a presença de Marlene. Seus olhos demonstram o terror que ele deve ter enfrentado nesse mundo sombrio. "
        );
        await N("Marlene, com voz suave, o acalma e diz que ele está seguro agora, que a sua equipe o ajudará.");
        await N("Ela ajuda o civil a se levantar e o conduz para fora do quarto, onde a sua equipe da ACE está esperando. ");
        await PA();
        await N(
          "Eles prontamente prestam assistência médica ao homem, fornecendo-lhe água, alimentos e cuidados necessários para restaurar sua saúde."
        );
        await N(
          "Enquanto a equipe cuida do civil, Marlene fica ao lado, garantindo que ele se sinta protegido e confortado. "
        );
        await N(
          "Ela sabe que seu trabalho é enfrentar os horrores sobrenaturais e, sempre que possível, resgatar aqueles que foram afetados por essas ameaças. "
        );
        await N(
          "Com a segurança do civil agora garantida, ela retoma sua missão, determinada a continuar a busca por respostas e ameaças que possam surgir em seu caminho."
        );
        await PA();
      } else {
        await N("Marlene continua sua busca por civis na cidade deserta, adentrando um beco escuro e apertado. ");
        await N("De repente, sem aviso prévio, algo a ataca. ");
        await N("Seu treinamento a leva a agir rapidamente, e ela desvia do ataque, imobilizando o agressor em um movimento ágil.");
        await N(
          "Quando a poeira baixa, ela percebe que, na verdade, é um civil sobrevivente que a atacou por puro desespero e medo. "
        );
        await N(
          "O homem está tremendo, claramente traumatizado pelas circunstâncias, e olha para Marlene com olhos cheios de desconfiança."
        );
        await N(
          "Com voz calma, Marlene tenta tranquilizá-lo, dizendo que ele está seguro agora, que sua equipe o ajudará, e que em breve ele poderá voltar para casa, em segurança."
        );
        await N("O civil continua a expressar desconfiança, mas diante da falta de alternativas, ele decide seguir Marlene.");
        await N(
          "Ela o conduz até a sua equipe da ACE, onde ele é recebido calorosamente e recebe cuidados médicos e apoio emocional."
        );
        await N(
          "Com o civil agora sob os cuidados da equipe, Marlene agradece a todos e continua sua busca, determinada a encontrar e proteger mais sobreviventes, não importa o quão desconfiados possam estar em um mundo cheio de horrores sobrenaturais."
        );
        await PA();
      }
      await N("Afonso está vivo.");
      await N("Obrigado por jogar.");
    }

    await fimDeJogo();
  }

  // -------- disparo do jogo após a tela de boot --------
  Term.onBoot(() => {
    mainStory().catch((err) => {
      console.error(err);
      Term.print("\n[ Erro inesperado — recarregue a página para reiniciar ]", "system");
    });
  });
})();
