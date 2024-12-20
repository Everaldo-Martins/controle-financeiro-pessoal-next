# CFP - Controle Financeiro Pessoal

## Descrição do Projeto

O **CFP (Controle Financeiro Pessoal)** é um projeto pessoal desenvolvido para aprender e praticar Next.js e TailwindCSS. Trata-se de uma aplicação simples que permite ao usuário gerenciar suas transações financeiras. Os dados são armazenados no **LocalStorage**, garantindo persistência mesmo após o fechamento do navegador.

O projeto foi inspirado em [Sistema de Controle Financeiro React.js](https://github.com/WilliamDosSantos/Sistema-de-controle-financeiro-REACT.JS/tree/main), adaptado e expandido para o ambiente de Next.js.

---

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
controle-financeiro-pessoal-next
|— public/               # Arquivos públicos (favicon, imagens, etc.)
|— src/
   |— app/
      |— assets/          # Recursos como ícones ou imagens
      |— components/      # Componentes reutilizáveis
         |— Footer/       # Componente de rodapé
         |— Form/         # Formulário para entrada de dados
         |— Grid/         # Tabela para exibição de transações
         |— Header/       # Cabeçalho da aplicação
         |— Resume/       # Resumo das transações financeiras
      |— globals.css      # Estilos globais
      |— layout.tsx       # Layout padrão da aplicação
      |— page.tsx         # Página principal
   |— style/              # Arquivos adicionais de estilo
|— .eslint.rc.json        # Configuração do ESLint
|— tailwind.config.ts     # Configuração do TailwindCSS
|— tsconfig.json          # Configuração do TypeScript
```

---

## Tecnologias Utilizadas

- **Next.js:** Framework para renderização do lado do servidor e criação de aplicações web modernas.
- **TailwindCSS:** Framework de estilização utilitária para criar interfaces responsivas e customizadas.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código.
- **LocalStorage:** Para armazenamento local das transações financeiras.

---

## Funcionalidades

- **Cadastro de Transações:** Entrada de dados financeiros como descrição, valor, tipo (entrada ou saída).
- **Edição de Transações:** Possibilidade de editar transações existentes.
- **Exclusão de Transações:** Opção para deletar transações com confirmação via modal.
- **Resumo Financeiro:** Visualização do saldo total, entradas e saídas.
- **Persistência de Dados:** Dados armazenados no LocalStorage.

---

## Componentes Principais

### Footer

Exibe informações de rodapé da aplicação.

### Form

Componente responsável pelo formulário de cadastro de transações.

### Grid

Tabela que lista todas as transações financeiras com opções para editar ou excluir cada item.

### Header

Cabeçalho da aplicação com o nome do projeto.

### Resume

Exibe um resumo financeiro com o saldo total, total de entradas e saídas.

---

## Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/CFP.git
```

2. Acesse o diretório do projeto:

```bash
cd CFP
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador e acesse:

```
http://localhost:3000
```

---

## Referência

Projeto base em React, do William Lucas: [Sistema de Controle Financeiro](https://github.com/WilliamDosSantos/Sistema-de-controle-financeiro-REACT.JS/tree/main)

---

## Licença

Este é um projeto pessoal e não possui licença oficial.