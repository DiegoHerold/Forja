# 🧱 Plataforma Forja

> Criação, automação e reestruturação de projetos reais com inteligência e velocidade.

A **Forja** é uma **plataforma modular e extensível**, focada em desenvolvedores e equipes que desejam acelerar o desenvolvimento de software com **boas práticas, arquitetura sólida e integração com IA**.

Construída sobre um ecossistema **CLI-first**, cada ferramenta da Forja possui um propósito claro — da geração de projetos ao deploy, passando por reestruturações e organização de arquivos — todas interligadas, mas independentes.

---

## 📦 Estrutura dos Pacotes

| Pacote                                    | Descrição                                                          |
| ----------------------------------------- | ------------------------------------------------------------------ |
| [`forja`](./packages/forja/README.md)     | CLI principal da plataforma: orquestra os outros módulos           |
| [`ayven`](./packages/ayven/README.md)     | Geração de projetos com templates reais e arquitetura configurável |
| [`roqe`](./packages/roqe/README.md)       | Reestruturação e migração de código com base em templates e IA     |
| [`lanso`](./packages/lanso/README.md)     | Deploy automatizado para Vercel, Render, GitHub Pages e SFTP       |
| [`voyn`](./packages/voyn/README.md)       | Organização inteligente de arquivos, limpeza e relatórios          |
| [`rodim`](./packages/rodim/README.md)     | Executor técnico de tarefas como build, lint e CI local            |
| [`nemue`](./packages/nemue/README.md)     | Núcleo de IA para análise, geração de conteúdo e explicações       |
| [`commons`](./packages/commons/README.md) | Tipagens, utilitários e abstrações compartilhadas                  |

---

## 🚀 Tecnologias Utilizadas

* Node.js + TypeScript
* NPM Workspaces (monorepo)
* Inquirer.js para CLIs interativos
* Execução modular por `npx`
* Integrações com IA (OpenAI, LocalAI etc.)

---

## 🧪 Como Usar

```bash
# Instale as dependências do monorepo
npm install

# Rode o CLI principal
npm run start --workspace=forja

# Rode um CLI específico
npm run start --workspace=ayven
```

---

## 🔍 Visão Geral dos Módulos

### 🧠 **Nemue**

> A mente da Forja.

Inteligência artificial sob comando, integrada ao seu terminal.

**Nemue** é o núcleo inteligente da Forja. Ele conecta seus projetos a modelos de IA como **OpenAI, LocalAI e HuggingFace**, oferecendo geração de código, explicações, sugestões técnicas, documentação e muito mais.

Funciona como um **copiloto técnico** e **central de IA compartilhada**, integrando-se com módulos como **Ayven**, **Voyn**, **Roqe** e **Rodin**, fornecendo inteligência sob demanda para qualquer etapa do ciclo de vida do projeto.

---

### 🛠️ **Ayven**

> O arquiteto digital da sua produtividade.

**Ayven** é o gerador de projetos da Forja. Ele transforma suas escolhas em estruturas reais de frontend, backend ou fullstack — com tecnologias modernas como **React, Node.js, Laravel, Django** — e arquiteturas como **SPA, MVC, REST, Microservices**.

Com apenas alguns cliques no terminal, o Ayven entrega um projeto pronto para codar, com README, dependências instaladas e estrutura profissional.

---

### 🧭 **Voyn**

> O explorador e organizador definitivo de arquivos no terminal.

**Voyn** é o módulo de gerenciamento de arquivos da Forja. Ele permite **buscar, mover, limpar, reorganizar e analisar pastas** com inteligência — ideal para quem lida com grandes volumes de arquivos desorganizados.

De um simples `.pdf` perdido a centenas de arquivos esquecidos, o Voyn resolve com comandos claros, navegação interativa e organização automatizada.

---

### 🧬 **Roqe**

> O reestruturador da Forja.

Migrar, refatorar e transformar projetos inteiros com IA.

**Roqe** é responsável por **migrar tecnologias, refatorar estruturas e adaptar projetos** com base em templates reais ou em análises feitas pelo Nemue. Ele atua como um "cirurgião de projetos", capaz de converter um sistema legado em uma estrutura moderna em poucos passos.

Ideal para quem quer mudar de linguagem, arquitetura ou simplesmente modernizar o projeto.

---

### 🚀 **Lanso**

> Do seu terminal para o mundo.

Deploy inteligente, automatizado e sem complicações.

**Lanso** é o módulo de deploy da Forja. Ele automatiza todo o processo de publicação, com suporte a **Vercel, Render, Netlify, GitHub Pages, SFTP/SSH** e outros.

Você configura, executa e monitora deploys diretamente pelo terminal — com segurança, controle e agilidade.

---

### 🧹 **Rodim**

> O executor técnico da Forja.

Automatize comandos locais com eficiência, padronização e confiabilidade.

**Rodim** é o **módulo responsável por executar tarefas técnicas dentro dos projetos criados com a Forja**. Ele roda comandos como `build`, `start`, `test`, `lint` e outros scripts personalizados, garantindo que tudo funcione de forma padronizada e automatizada — independente da linguagem, framework ou tecnologia usada.

Com ele, você evita erros manuais, reduz o tempo de configuração e garante que cada projeto siga as práticas esperadas para execução local.
