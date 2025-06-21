#!/usr/bin/env node

import inquirer from "inquirer";
import { runTask } from "../src/runner/taskRunner.js";

const args = process.argv.slice(2);

const availableTasks = [
  { name: "📦 Instalar dependências", value: "install" },
  { name: "📝 Abrir no VSCode", value: "open" },
  { name: "⚙️ Setup (git, .env, dependências)", value: "setup" },
  { name: "🔨 Build do projeto", value: "build" },
  { name: "🧼 Lint no código", value: "lint" },
  { name: "🧪 Rodar testes", value: "test" },
  { name: "🚀 Iniciar dev server", value: "start" },
  { name: "🎨 Formatador Prettier", value: "format" },
  { name: "🩺 Verificação do ambiente", value: "doctor" },
  new inquirer.Separator(),
  { name: "❌ Sair", value: null },
];

async function showMenu() {
  const { task } = await inquirer.prompt([
    {
      type: "rawlist",
      name: "task",
      loop: false,
      message: "🔧 Rodin - Selecione uma tarefa para executar:",
      choices: availableTasks,
    },
  ]);

  if (task) {
    await runTask(task);
  } else {
    console.log("\n👋 Encerrando Rodin.\n");
    process.exit(0);
  }
}

if (args.length === 0) {
  await showMenu();
} else {
  const task = args[0];
  await runTask(task);
}
