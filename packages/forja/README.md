# 🧱 CLI Forja

> Orquestrador principal da plataforma Forja

O pacote `forja` é a **porta de entrada da plataforma**. Ele oferece uma **interface unificada no terminal** que permite acessar e utilizar todos os módulos da Forja de forma simples, modular e interativa.

Ao rodar `npx forja`, você acessa um menu com ações que disparam os CLIs dos pacotes como **Ayven**, **Roqe**, **Lanso**, **Voyn**, **Rodim** e **Nemue**.

---

## ⚙️ Funcionalidades

* Menu principal com navegação interativa
* Execução dos módulos internos via `npx`
* Carregamento dinâmico dos pacotes presentes no monorepo
* Integração com a IA do Nemue para sugestões e melhorias contextuais (futuro)

---

## ▶️ Como usar

```bash
# Rodar via monorepo
npm run start --workspace=forja

# Ou executar diretamente via npx (quando publicado)
npx forja
```

---

## 📁 Estrutura básica

```
forja/
├── cli/                  # Interface do terminal
│   └── index.ts          # Ponto de entrada do CLI principal
├── helpers/              # Utilitários de execução e roteamento
├── workflows/            # Ações mapeadas para cada módulo
├── config/               # Configurações internas da CLI principal
├── README.md             # Documentação do pacote
└── package.json
```

---

## 🔗 Módulos Integrados

| Comando no menu | Módulo chamado                       |
| --------------- | ------------------------------------ |
| Ayven           | [`@forja/ayven`](../ayven/README.md) |
| Roqe            | [`@forja/roqe`](../roqe/README.md)   |
| Lanso           | [`@forja/lanso`](../lanso/README.md) |
| Voyn            | [`@forja/voyn`](../voyn/README.md)   |
| Rodim           | [`@forja/rodim`](../rodim/README.md) |
| Nemue           | [`@forja/nemue`](../nemue/README.md) |

---

## 📌 Requisitos

* Node.js 18+
* Terminal com suporte a Unicode/Emoji (para melhor visualização)

---

## 🧠 Futuro

* Execução paralela entre módulos (ex: Ayven → Roqe → Lanso)
* Histórico de comandos recentes e favoritos
* Sugestões da IA baseadas no contexto do projeto
* Customização visual do menu

---

## 🔁 Navegação

* ⬅️ Voltar para o [README principal do monorepo](../../README.md)
* ➡️ Acesse também: [Ayven](../ayven/README.md) • [Roqe](../roqe/README.md) • [Lanso](../lanso/README.md) • [Voyn](../voyn/README.md) • [Rodim](../rodim/README.md) • [Nemue](../nemue/README.md)

---

Feito com 💛 por Forja.
