
# Country Explorer

Este é um projeto de **Country Explorer** que permite visualizar detalhes sobre diferentes países e suas fronteiras. A aplicação é construída com **Next.js** e **React**, utilizando uma API externa para buscar informações sobre os países. O projeto possui uma interface interativa que permite ao usuário pesquisar países, visualizar gráficos de população e explorar as fronteiras dos países clicando em links.

## Estrutura do Projeto

A estrutura de diretórios e arquivos é organizada da seguinte forma:

```
/app
  /country
    /[code]
      page.js
  /page.js
/globals.css
```

### Como Funciona:

1. **Página Inicial (`/page.js`)**: Exibe uma lista de países com links para suas páginas de detalhes. Você pode buscar países por nome e filtrar os resultados.
   
2. **Página de Detalhes de País (`/country/[code]/page.js`)**: Cada país tem uma página dinâmica, acessível via código do país. Ela exibe o nome, bandeira, gráfico de população e uma lista de países fronteiriços clicáveis.

3. **Busca de Países**: A lista de países é buscada de uma API externa usando a URL configurada em `NEXT_PUBLIC_BACKEND_BASE_URL`. A busca é feita com base no nome do país.

4. **Gráfico de População**: Um gráfico de linha é exibido com a população histórica do país.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de sites e APIs.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Chart.js**: Biblioteca para exibir gráficos interativos.
- **React Table**: Biblioteca para exibição de dados tabulares interativos.
- **React Icons**: Para ícones usados na interface.

## Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/country-explorer.git
```

### 2. Instalar as Dependências

Navegue até a pasta do projeto e instale as dependências:

```bash
cd country-explorer
npm install
```

### 3. Configurar a URL da API

Crie um arquivo `.env.local` na raiz do projeto e configure a URL da API externa. Exemplo:

```
NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:8080/api
```

### 4. Rodar o Projeto

Após configurar o arquivo `.env.local`, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o projeto no seu navegador em `http://localhost:3000`.

## Estrutura de Rotas

- **Página inicial**: `http://localhost:3000/`
- **Página de detalhes do país**: `http://localhost:3000/country/[code]`
  - Exemplo: `http://localhost:3000/country/US`

## Como Funciona a Navegação

- **Página Inicial**: Exibe uma lista de países com a possibilidade de filtrá-los pela barra de busca.
- **Página de Detalhes do País**: Mostra o nome do país, sua bandeira, o gráfico de população e uma tabela com as fronteiras do país. As fronteiras são links clicáveis que redirecionam para as páginas dos países vizinhos.

## Contribuindo

Se você deseja contribuir com o projeto, faça um fork deste repositório e envie um pull request.

1. Faça um fork deste repositório.
2. Crie uma branch (`git checkout -b feature/novidade`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para a branch (`git push origin feature/novidade`).
5. Envie um pull request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

---

**Country Explorer** - 2024
