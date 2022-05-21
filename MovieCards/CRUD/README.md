# Boas vindas ao repositório do projeto de Movie Cards CRUD!

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Lista de requisitos](#lista-de-requisitos)

    `Requisitos Obrigatórios:`

    - [1 - Renderize BrowserRouter no componente App usando rotas](#1---renderize-browserrouter-no-componente-app-usando-rotas)
    - [2 - Faça uma requisição para buscar e mostrar a lista de filmes quando MovieList for montado](#2---faça-uma-requisição-para-buscar-e-mostrar-a-lista-de-filmes-quando-movielist-for-montado)
    - [3 - Insira um link para a página de detalhes de um filme dentro de MovieCard](#3---insira-um-link-para-a-página-de-detalhes-de-um-filme-dentro-de-moviecard)
    - [4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de Movie Details](#4---faça-uma-requisição-para-buscar-o-filme-que-deverá-ser-renderizado-dentro-de-movie-details)
    - [5 - Realize uma requisição para buscar o filme que será editado em EditMovie](#5---realize-uma-requisição-para-buscar-o-filme-que-será-editado-em-editmovie)
    - [6 - Insira um link na página inicial para NewMovie para criar novos cartões](#6---insira-um-link-na-página-inicial-para-newmovie-para-criar-novos-cartões)

    `Requisitos Bônus:`

    - [7 - Adicione um link para deletar um cartão em MovieDetails](#7---adicione-um-link-para-deletar-um-cartão-em-moviedetails)

# Habilidades

Nesse projeto, você será capaz de:

- Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;
- Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
- Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;
- Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado;
- Utilizar o props.children para acessar os filhos de um componente React e interagir com eles;
- Utilizar o componente BrowserRouter corretamente;
- Criar links de navegação na aplicação com o componente Link ;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route ;
- Estruturar e organizar as rotas da sua aplicação com o componente Switch ;
- Usar o componente Redirect pra alternar entre rotas.

## O que deverá ser desenvolvido

Dando continuidade aos últimos projetos, você criará um **CRUD** de cartões de filmes em React.
A sigla **CRUD** significa, _Create, Read, Update and Delete_, então deve ser possível realizar as seguintes operações nesse projeto:

- Adicionar um novo filme à lista - **CREATE**;
- Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - **READ**;
- Editar um filme da lista - **UPDATE**;
- E apagar um filme da lista - **DELETE**;

# Requisitos do projeto

**ATENÇÃO!** Muito cuidado com os nomes especificados nos requisitos! O conteúdo deve ser **exatamente igual** ao texto descrito no requisito. Em alguns componentes foram colocadas propriedades chamadas _data-testid_ que, sob qualquer hipótese não devem ser alteradas. Os detalhes acima tem implicação direta no funcionamento do avaliador.

Os testes foram desenvolvidos dessa forma para permitir uma maior liberdade para estruturar e estilizar a página, portanto, abusem da criatividade! 😉

**⚠️ Adicione proptypes a todos os componentes ⚠️**

Todos os componentes que recebem _props_ devem ter suas _proptypes_ corretamente declaradas. O _eslint_ checa automaticamente declaração de _proptypes_, portanto seu _Pull Request_ deverá estar com os _proptypes_ bem configurados para satisfazer os requisitos.

## Lista de requisitos

### 1 - Renderize `BrowserRouter` no componente `App` usando rotas

Você deve utilizar um `BrowserRouter` pra criar as rotas da sua aplicação. As urls de cada página devem ser desenvolvidas conforme especificado na seção _O que será desenvolvido_.

#### O que será verificado:

```
- a rota `/` deve renderizar MovieList
- a rota `/movies/:id` deve renderizar MovieDetails
- a rota `/movies/new` deve renderizar NewMovie
- a rota `/movies/:id/edit` deve renderizar EditMovie
- qualquer rota não declarada deve renderizar NotFound
```

### 2 - Faça uma requisição para buscar e mostrar a lista de filmes quando `MovieList` for montado

Para buscar a lista, você deve utilizar a função `getMovies` importada do módulo `movieAPI` em `MovieList`. Essa função retorna uma _promise_. A requisição deve ser feita no momento em que o `MovieList` for montado no DOM. Enquanto a requisição estiver em curso, `MovieList` deve renderizar o componente `Loading`, como ilustrado na imagem a seguir.

![image](loading.png)

Obs: O componente `Loading` deve conter o texto `Carregando...`

Uma vez que a requisição retornar, o resultado deve ser renderizado. Para cada filme, renderize um componente `MovieCard`, como ilustrado abaixo.

![image](index.png)

Você precisará adicionar um estado em `MovieList` para controlar o que será exibido.

#### O que será verificado:

```
- `MovieList` deverá exibir o texto `Carregando...` enquanto estiver fazendo a requisição
- `MovieList` deverá exibir um `MovieCard` para cada filme retornado pela API
```

### 3 - Insira um link para a página de detalhes de um filme dentro de `MovieCard`

Todos os `MovieCard`s devem possuir em seu conteúdo, pelo menos, o título, a sinopse e um link com o texto "VER DETALHES" que aponta para a rota `movies/:id`, onde `:id` é o id do filme. Esta rota exibirá informações detalhadas de um filme.

#### O que será verificado:

```
- cada `MovieCard` deve exibir pelo menos o título e a sinopse de seu respectivo filme
- cada `MovieCard` deve conter um link com o texto `VER DETALHES` que redireciona para a página de detalhes do filme
```

### 4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de `Movie Details`

`MovieDetails` se comporta de forma muito semelhante ao `MovieList`. Ao ser montado, deve fazer uma requisição utilizando a função `getMovie`, se atente para o nome da função que é muito semelhante ao de outra função que já utilizamos, a `getMovies`, do módulo `movieAPI`, passando o id do filme. O componente `Loading` deve ser renderizado enquanto a requisição estiver em curso. Após terminar, deve-se renderizar um card com mais detalhes sobre o filme, contendo:

- Uma `<img>` com a imagem do filme e `alt='Movie Cover'`;
- Título;
- Subtítulo;
- Sinopse;
- Gênero;
- Avaliação;
- um link com o texto "EDITAR" apontando para a rota `/movies/:id/edit` e um link apontando para a rota raiz (`/`) com o texto "VOLTAR".

Os campos devem existir no cartão conforme ilustrado na imagem abaixo.

#### O que será verificado:

```
- `MovieDetails` deverá exibir o texto "Carregando..." enquanto estiver fazendo a requisição
- `MovieDetails` deverá exibir o título, o subtítulo, a sinopse, a imagem e o gênero do filme
- `MovieDetails` deverá conter um botão com o texto "VOLTAR" que redireciona para a página inicial
- `MovieDetails` deverá conter um botão com o texto "EDITAR" que redireciona para a página de edição de filme
```

![image](card-details.png)

### Para os requisitos 5 e 6:

Para correta avaliação, os campos do formulário devem possuir as seguintes tags `<label>` e tipos de entrada:

- label: 'Título', entrada: tag `<input>` de tipo 'text'
- label: 'Subtítulo', entrada: tag `<input>` de tipo 'text'
- label: 'Imagem', entrada: tag `<input>` de tipo 'text'
- label: 'Sinopse', entrada: tag `<textarea>`
- label: 'Gênero', entrada: tag `<select>`, com as seguintes opções:
  - `<option value="action">Ação</option>`
  - `<option value="comedy">Comédia</option>`
  - `<option value="thriller">Suspense</option>`
  - `<option value="fantasy">Fantasia</option>`
- label: 'Avaliação', entrada: tag `<input>`, de tipo 'number' com valores que vão de 0 (mínimo) a 5 (máximo), com um step de 0.1.

Obs: O conteúdo das tags `<label>` devem estar idênticos ao específicado acima. Importante associar corretamente todas as suas entradas e labels!

### 5 - Realize uma requisição para buscar o filme que será editado em `EditMovie`

Ao ser montada, a página de edição do filme deve fazer uma requisição pra buscar o filme que será editado e deve, ao ter seu formulário submetido, atualizar o filme e redirecionar a página pra rota raíz.

#### O que será verificado:

```
- `EditMovie` deverá exibir o texto "Carregando..." enquanto estiver fazendo a requisição
- `EditMovie` deverá conter um formulário preenchido com o título, subtítulo, sinopse, caminho da imagem e gênero do filme selecionado
- Quando clicar no botão de submit, deverá fazer uma requisição para API para atualizar o filme selecionado. Após a conclusão da atualização a pessoa usuária deverá ser redirecionada para a página inicial
```

### 6 - Insira um link na página inicial para `NewMovie` para criar novos cartões

O link deve conter o texto "ADICIONAR CARTÃO" e apontar para a rota `/movies/new`, contendo um formulário para criar novos cartões.

Na rota `/movies/new`, utilizando a callback passada para `MovieForm`, `NewMovie` deve criar um novo cartão utilizando a função `createMovie` do módulo `movieAPI`. Após o fim da requisição, `NewMovie` deve redirecionar o app para a página inicial, contento o novo cartão.

#### O que será verificado:

```
- a página inicial deverá conter um link "ADICIONAR CARTÃO". Esse link deve redirecionar para a página de criação de filmes
- `NewMovie` deverá conter um formulário que faz uma requisição para API para criar um novo filme. Após a criação, a pessoa usuária deverá ser redirecionada para a página inicial
```

#### Requisitos bônus:

### 7 - Adicione um link para deletar um cartão em `MovieDetails`

Ao clicar neste link, faça uma requisição utilizando a função `deleteMovie` do módulo `movieAPI`. Após finalizar a requisição, redirecione o app para a página inicial. O cartão apagado não deverá mais se encontrar na lista.

#### O que será verificado:

```
- `MovieDetails` deverá conter um link com o texto "DELETAR"
- o link "DELETAR" deverá fazer uma requisição para a API para excluir o filme em questão
```

---
