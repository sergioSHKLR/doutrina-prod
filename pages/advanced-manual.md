---
title: Manual Avançado
layout: 0-default
---

# 📖 Manual Avançado

Este manual descreve a hierarquia, diagramação, formatação e recursos implementados no projeto.

## Visibilidade de Colunas

A plataforma utiliza um layout em colunas responsivo:

- **Coluna 1 (Menu)**: Navegação hierárquica
- **Coluna 2 (Principal)**: Texto principal com links
- **Coluna 3 (Complementar)**: Conteúdo externo via iframe
- **Coluna 4 (Anotações)**: Hypothes.is

![](../assets/images/doutrina-demo.gif)

## Identificação dos Livros

Utilizamos emojis e abreviações da seguinte forma:

- **👻 LDE** — O Livro dos Espíritos
- **✒️ LDM** — O Livro dos Médiuns
- **🕊️ ESE** — O Evangelho segundo o Espiritismo
- **🔥 CEU** — O Céu e o Inferno
- **🌱 GEN** — A Gênese

### Hierarquia Interna de Capítulos

- **Pré-textual** (numeral 0) - Prefácios, introduções, etc.
- **Partes** - Divisões principais do livro
- **Capítulos** - Subdivisões
- **Seções / Questões** - Unidades menores

## Recursos Avançados

Adicionamos recursos de dispositos eReaders e outros numa plataforma única e de maneira integrada.

### 1. Links Externos
- Os links foram adicionados com critério para auxiliar o estudo sem sobrecarregar o texto.
- Diversidade: Luz Espírita - fontes doutrinárias - Wikipedia (para visão cosmopolita e saudável ceticismo).

### 2. Ajustes Tipográficos
O botão `Aa` permite:
- Alterar tipo de fonte (serif, sans-serif, mono)
- Aumentar/diminuir tamanho da letra
- Mudar espaçamento entre linhas
- Alterar cor de fundo (amarelo, verde, rosa, etc.)

Ademais, o modo escuro (botão separado) respeita preferência automaticamente ou pode ser acionado manualmente.

Todas as preferências ficam salvas para sessões futuras.

### 3. Ferramenta de Anotações (Hypothes.is)
- Permite grifar, comentar e compartilhar anotações.
- É possível criar **grupos privados** para estudo em turma ou centro espírita.
- As anotações ficam vinculadas ao texto mesmo se você mudar de dispositivo.

### 4. Modo de Estudo Avançado
- Use a coluna Complementar aberta enquanto lê para consulta imediata.
- Combine leitura + anotações + links para um estudo ativo profundo.
- Em telas grandes, mantenha as 4 colunas visíveis.

### Detalhes Programáticos

- **Links**: Implementados com sintaxe customizada `[termo](slug){:.x}`, aonde x é o código de fonte.
- **iframe**: Carregamento preguiçoso (`loading="lazy"`) na coluna 3
- **Anotações**: Integração completa com Hypothes.is
- **Tipografia**: Ajustes salvos via `localStorage`
- **Dark Mode**: Toggle manual + `prefers-color-scheme`

## Sobre o Projeto

Esta é uma **adaptação digital livre**, sem fins lucrativos, feita com respeito e dedicação às obras originais.  
Nosso objetivo é facilitar o acesso e o estudo sério, sem simplificar o conteúdo.

---

**[Voltar](/profile)**

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<script type="application/json" class="js-hypothesis-config">
{
"openSidebar": false
}
</script>

