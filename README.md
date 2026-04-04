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

- [ ] Iniciar um novo projeto Expo;
- [ ] Criar as telas “Home”, “Expense - create (category)” e “Expense - create (details);
- [ ] Configurar o(s) layout(s);
- [ ] Configurar o roteamento entre telas;

*PR: Estrutura inicial e roteamento*

___

**SPRINT 3 - Implementação das três telas (3 semanas) 02/mai**

- [ ] Definir quais componentes da Biblioteca de Componentes React Native serão utilizadas nas telas;
- [ ] Criar componentes personalizados para a implementação das três telas (ex.: lista de gastos, formulário de novo gasto, etc);
- [ ] Implementar tela “Expense - create (category)”;
- [ ] Implementar tela “Expense - create (details)”;
- [ ] Implementar tela “Home”;
- [ ] Mock de dados;

*PR: Implementação das telas “home”, “novo gasto (categoria)” e “novo gasto (detalhes)”*

___

**CHECKPOINT 2 (10/mai)**

 - [ ] Checkpoint 2: Entrega parcial

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
| Sprint 2 | 1 semana | Estrutura inicial e Expo Router      | [ ]     |
| Sprint 3 | 3 semanas| Implementação das três telas         | [ ]     |
| Sprint 4 | 2 semanas| Persistência local dos dados         | [ ]     |
| Sprint 5 | 2 semanas| Validação de dados                   | [ ]     |
| Sprint 6 | 2 semanas| Empacotamento da aplicação           | [ ]     |
| Sprint 7 | 1 semana | Entrega da versão final do app       | [ ]     |
