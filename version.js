/* =====================================================================
   FloreSer · Corpo e Alma — fonte única de versão e changelog
   ---------------------------------------------------------------------
   Para lançar uma versão nova, acrescente UM registro no TOPO da lista
   CHANGELOG. A versão e o codinome mostrados no site saem sempre do
   primeiro registro daqui, então a tela e o histórico não têm como
   discordar.

   Formato: vX.Y.Z — CODINOME
     PATCH   X.Y.Z → X.Y.(Z+1)    correções, ajustes visuais, refinos
     MINOR   X.Y.Z → X.(Y+1).0    funcionalidades e telas novas
     MAJOR   X.Y.Z → (X+1).0.0    reformulações estruturais

   Ao subir MINOR, Z volta a 0. Ao subir MAJOR, Y e Z voltam a 0.
   O codinome tem uma palavra só, em maiúsculas, sem números, e não se
   repete. Data no formato DD/MM/AAAA, sempre a data real do lançamento.
   ===================================================================== */

(function (global) {
  "use strict";

  /* Mais recente primeiro. Use apenas categorias com conteúdo real. */
  var CHANGELOG = [
    {
      versao: "1.2.0",
      codinome: "POUSIO",
      data: "20/08/2026",
      mudancas: {
        "Adicionado": [
          "Arquivar paciente: quando o plano acaba, ela sai do Dashboard, do quadro semanal e das listas de máquina, mas ciclos, condições, observações e histórico ficam guardados.",
          "Sub-aba Arquivadas na tela de Pacientes, com botão de restaurar que devolve tudo de uma vez."
        ],
        "Alterado": [
          "Marcar Facial, Corporal e Capilar deixou de ser obrigatório: quem só faz máquina é cadastrada sem nenhum ciclo e aparece na lista com o selo “Só máquinas”.",
          "Ao arquivar, os follow-ups pendentes daquela paciente são removidos, para não voltarem atrasados meses depois — o aviso de confirmação diz quantos são.",
          "O rodapé da agenda passou a contar pacientes ativas e arquivadas separadamente."
        ],
        "Técnico": [
          "A aba Pacientes ganhou as colunas de arquivamento, acrescentadas à planilha que já existe sem mexer nas linhas nem renomear abas."
        ]
      }
    },
    {
      versao: "1.1.0",
      codinome: "SEIVA",
      data: "18/08/2026",
      mudancas: {
        "Adicionado": [
          "Máquinas temporárias na agenda: você cadastra as datas em que o Soprano e o Harmony vêm, e a lista das pacientes daquela máquina abre sozinha 14 dias antes.",
          "Opção “próxima vinda” para a paciente que não consegue vir no dia da máquina — ela volta automaticamente na data seguinte que você cadastrar.",
          "Ciclos separados por área na agenda: Facial, Corporal e Capilar, cada um com o seu prazo e o seu agendamento.",
          "Três etapas novas no funil do CRM: Nurturing, Recusado e Venda reprovada."
        ],
        "Alterado": [
          "Quem estiver em condição no dia da vinda da máquina sai da lista e entra na fila da próxima, com um aviso dizendo o motivo.",
          "A etapa “Reprovado” virou “Recusado”; os leads que já estavam marcados assim são convertidos sozinhos."
        ],
        "Técnico": [
          "A planilha ganhou abas para ciclos, máquinas, vindas e respostas. Os dados no formato anterior são convertidos na primeira abertura e as abas antigas ficam guardadas."
        ]
      }
    },
    {
      versao: "1.0.0",
      codinome: "RAIZ",
      data: "14/08/2026",
      mudancas: {
        "Adicionado": [
          "Indicador de versão permanente na tela inicial e histórico de versões acessível por ela.",
          "Página inicial reunindo o CRM e os agendamentos em um só endereço.",
          "CRM com funil comercial: etapas, cadência por etapa, marcação de ex-cliente e arquivo de vendas e reprovados.",
          "Agenda das pacientes sincronizada com a planilha do Google, com senha própria."
        ],
        "Técnico": [
          "Versão, codinome e histórico passam a viver em um arquivo único (version.js), consumido pela tela inicial."
        ]
      }
    }
  ];

  /* Ordem em que as categorias aparecem no histórico. */
  var CATEGORIAS = ["Adicionado", "Alterado", "Melhorado", "Corrigido",
    "Removido", "Visual", "Conteúdo", "Performance", "Técnico"];

  var atual = CHANGELOG[0];

  global.FLORESER = {
    changelog: CHANGELOG,
    categorias: CATEGORIAS,
    atual: atual,
    rotulo: "v" + atual.versao + " — " + atual.codinome
  };
})(window);
