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
