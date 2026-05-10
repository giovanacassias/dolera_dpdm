# Dolera

## Sobre o app

Dolera é um sistema que se propõe a oferecer uma solução na organização financeira durante viagens. Mais do que apenas registrar despesas, o Dolera foi pensado para trazer clareza, controle e tranquilidade ao processo de acompanhamento dos gastos durante toda a jornada.

É comum que os gastos associados a uma viagem se iniciem muito antes do embarque, com parcelamentos de passagens, reservas e outros compromissos financeiros prévios. Além disso, os pagamentos costumam ser realizados por diversos meios — dinheiro em espécie, débito, crédito, transferências — o que torna difícil visualizar o custo real da viagem. Com os dados dispersos entre extratos bancários, faturas de cartão e anotações informais, o controle financeiro se torna fragmentado e pouco confiável.

Com o Dolera, o viajante pode cadastrar os gastos por categoria, acompanhar como está utilizando seu orçamento e manter um histórico completo e unificado das viagens realizadas. Isso permite não só tomar decisões mais conscientes durante a viagem, mas também evitar surpresas e fortalecer a saúde financeira ao saber exatamente o quê, quando e quanto foi gasto.

### Funcionalidades

O escopo completo do projeto inclui realizar o log in ou sign in, o CRUD de uma viagem e o CRUD dos gastos referentes à essa viagem. Visando o contexto da disciplina “Desenvolvimento de Projetos para Dispositivos Móveis”, o escopo foi delimitado a fim de ser viável ao tempo disponível no semestre. As funcionalidades foram priorizadas da seguinte forma:

**MUST (funcionalidades básicas que serão implementadas para o cumprimento dos requisitos das avaliações)**

- [ ] Criar um novo gasto atrelado à uma viagem;
- [ ] Visualizar, na Home, os gastos cadastrados;

**SHOULD (funcionalidades que serão implementadas caso os requisitos obrigatórios já estejam concluídos)**

- [ ] Atualizar um gasto;
- [ ] Deletar um gasto;

**COULD (funcionalidades que provavelmente não serão implementadas devido ao tempo)**

- [ ] Criar uma nova viagem;
- [ ] Visualizar viagem;
- [ ] Atualizar viagem;
- [ ] Excluir viagem;

**WON’T (possíveis funcionalidades futuras)**

- Definir visibilidade da viagem (privada ou pública);
- Buscar viagens públicas através de filtros (ex.: buscar todas as viagens para a França com duração de dez dias);
- Gráfico com todos os gastos de uma viagem por categoria;
- Sessão de “passaporte” com histórico de todas as viagens;
- Login social;

## Protótipos de telas

Navege pelos protótipos das telas desenvolvidas no [Figma](https://www.figma.com/proto/wXwAO6j901eWyslSCtqJnz/dolera-mobile?node-id=30-2197&p=f&t=zgIKvWKgsAVZRdHG-1&scaling=scale-down&content-scaling=fixed&page-id=30%3A2042)

Ao todo, foram prototipadas dezessete telas, que demonstram o fluxo completo do sistema. Entretanto, as telas a serem aqui utilizadas - que contemplam o escopo das priorizações, são:

**MUST**
- Home - com viagem e gastos (frame 8)
- Formulário de criação de gasto - categoria (frame 6)
- Formulário de criação de gasto - detalhes (frame 7)

**SHOULD**
- Modal com opção de atualizar ou excluir gasto (frame 9)
- Formulário de atualização de gasto (frame 10)
- Modal para excluir um gasto (frame 11)

## Modelagem do banco de dados

Será utilizado o modelo relacional devido a relação entre as três entidades do sistema (*User, Trip, Expense*) e a implementação será local via SQLite. A seguir temos o diagrama da modelagem:

<img src="https://res.cloudinary.com/ddb437lsi/image/upload/q_auto/f_auto/v1775328430/Captura_de_tela_2026-04-04_151550_dwpast.png" width="500">

## Planejamento de sprints

**SPRINT 1 - Planejamento (1 semana) 05/abr**

- [x] Criar repositório do projeto;
- [x] Definir e estruturar app;
- [x] Modelar do banco de dados;
- [x] Prototipar as telas (fluxo completo);
- [x] Delimitar o escopo de acordo com a disciplina;
- [x] Criar o Read.me;

___

**CHECKPOINT 1 (05/abr)**
- [x] Checkpoint 1

___

**SPRINT 2 - Estrutura inicial e Expo Router (1 semana) 11/abr**

- [x] Iniciar um novo projeto Expo;
- [x] Criar as telas “Home”, “Expense - create (category)” e “Expense - create (details);
- [x] Configurar o(s) layout(s);
- [x] Configurar o roteamento entre telas;

*PR: Estrutura inicial e roteamento*

___

**SPRINT 3 - Implementação das três telas (3 semanas) 02/mai**

- [x] Definir quais componentes da Biblioteca de Componentes React Native serão utilizadas nas telas;
- [x] Criar componentes personalizados para a implementação das três telas (ex.: lista de gastos, formulário de novo gasto, etc);
- [x] Implementar tela “Expense - create (category)”;
- [x] Implementar tela “Expense - create (details)”;
- [x] Implementar tela “Home”;
- [x] Mock de dados;

*PR: Implementação das telas “home”, “novo gasto (categoria)” e “novo gasto (detalhes)”*

**Tarefas não previstas**

- [x] Implementar tela "Login"
- [x] Aprimorar User Experience (*KeyboardAvoidingView* nos formulários, ícones do *MaterialIcons*, fonte e cores do *Design System* planejado)

___

**CHECKPOINT 2 (10/mai)**

 - [x] Checkpoint 2: Entrega parcial

___

**SPRINT 4 - Persistência local dos dados (2 semanas) 16/mai**

- [ ] Persistir os dados localmente via SQLite;

*PR: Persistência dos dados ao cadastrar um novo gasto*

___

**SPRINT 5 - Validação de dados (2 semanas) 30/mai**

- [ ] Implementar validações no formulário de um novo gasto;
- [ ] Testar com entradas corretas e incorretas;

*PR: Validação dos dados do formulário de um novo gasto*

___

**SPRINT 6 - Empacotamento da aplicação (2 semanas) 13/jun**

- [ ] Configurações necessárias;
- [ ] Geração de build local;

*PR: Empacotamento da aplicação (build)*

___

**SPRINT 7 - Entrega da versão final do app (1 semana) 20/jun**

- [ ] Revisar o cumprimento de todos os requisitos;
- [ ] Corrigir possíveis erros;
- [ ] Gravar vídeo de defesa;
- [ ] Realizar a entrega final;

___

**CHECKPOINT FINAL (21/jun)**

 - [ ] Checkpoint 3: Entrega final

___

## Cronograma

| Sprint   | Duração  | Entrega                              | Feito   |
|----------|----------|--------------------------------------|---------|
| Sprint 1 | 1 semana | Planejamento                         | [x]     |
| Sprint 2 | 1 semana | Estrutura inicial e Expo Router      | [x]     |
| Sprint 3 | 3 semanas| Implementação das três telas         | [x]     |
| Sprint 4 | 2 semanas| Persistência local dos dados         | [ ]     |
| Sprint 5 | 2 semanas| Validação de dados                   | [ ]     |
| Sprint 6 | 2 semanas| Empacotamento da aplicação           | [ ]     |
| Sprint 7 | 1 semana | Entrega da versão final do app       | [ ]     |

___

## Atualizações desde o último checkpoint

### Conceitos aplicados da aula "Boas práticas para a criação de componentes reutilizáveis"

**Compound componente**
- Utilizei o conceito de componente composto nos botões do sistema que compartilham o mesmo contexto, sendo *buttonCoral*, *buttonDarkCoral* e *buttonWhite* (dolera-expo\components\customButton\index.tsx);
  
**Componentes que disparam eventos para o componente pai** 
- Na tela de selecionar a(s) categoria(s) no checkbox daquele novo gasto, temos a tela *create-category.tsx* que funciona como um wrapper. Dentro dela temos *expenseCategory.tsx* que é o componente que renderiza todas as categorias em um único "checkbox" customizado e que implementa a função *toggleCategory*, responsável por incluir e excluir o número correspondente da categoria selecionada ao array *selected<number>*. Dentro desse componente é renderizado o componente *CategoryCheckBox* que representa uma das categorias, e nele é passado como props a função *toggleCategory*. Ao ser clicado, essa callback é chamada, disparando o evento ao elemento pai, que é quem de fato irá executá-la. Temos então **CategoryCheckBox** que dispara o evento **toggleCategory** para o componente pai **ExpenseCategory**.

**Componentes dentro de outros componentes**
- A construção do projeto tem em vista o conceito de *Atomic Design*, logo esse conceito é encontrado em várias partes do sistema. Um dos exemplos é o componente *CustomInput*, que representa cada input do formulário de cadastro de novo gasto e que está dentro de *AddDetails*, que de fato se torna o formulário, sendo a renderização de todos os inputs necessários.
  
**Componentes reutilizáveis**
- O componente *CrudTitle* é reutilizado de acordo com a tela CRUD que ele representa - 'Choose a category' e 'Add the details';
- Outros exemplos são o customInput e screenTitle;

**Uso de mocks para popular componentes**
- Os métodos *.filter* e *.map* são utilizados para renderizar os diferentes *CustomInput* e mockar os dados de cada input. Já no formulário de login os dados são mockados através de *placeholders*.


### Recursos dos módulos 7 "Estilização de componentes com NativeWind" e módulo 8 "Biblioteca de Componentes React Native Elements"

- Icons do MaterialIcons;
- NativeWind (Input, Image, Button, CheckBox, Text);
- Estilização tanto com *TailwindCSS* quanto com *style* nos componentes *NativeWind*;


### Componentes personalizados e UX

- Fonte 'Outfit' do GoogleFonts;
- KeyboardAvoidingView nos forms para melhorar a UX;
- Componentes personalizados:
  - customButton (buttonCoral, buttonDarkCoral, buttonWhite);
  - expenses (categoryCheckBox, expenseCategory, expenseItem, expensesFlatList);
  - forms/inputs (customInput, addDetails);
  - forms/header (budget, mainHeader);
  - forms/titles (crudTitle, screenTitle);

___

## Comandos para rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/giovanacassias/dolera_dpdm.git
```

### 2. Entre na pasta do projeto

```bash
cd .\dolera-expo\
```

### 3. Dentro da raíz, instale as dependências

```bash
yarn install
```
ou

```bash
npm install
```

### 4. Inicie o Expo

```bash
yarn start
```
ou

```bash
npx expo start
```

