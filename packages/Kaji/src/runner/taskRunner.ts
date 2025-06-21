// === src/runner/taskRunner.ts ===
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";
import fs from "fs";

const aliases: Record<string, string> = {
  run: "start",
  dev: "start",
  init: "setup",
  i: "install",
  s: "start",
  b: "build",
  t: "test",
};

const validTasks = [
  "install",
  "open",
  "setup",
  "build",
  "lint",
  "test",
  "start",
  "format",
  "doctor",
];

export async function runTask(inputTask: string) {
  const taskName = aliases[inputTask] || inputTask;

  if (!validTasks.includes(taskName)) {
    console.error(`\n❌ Tarefa desconhecida: "${inputTask}"`);
    console.log(`\n📋 Tarefas disponíveis: ${validTasks.join(", ")}`);
    console.log(
      `\nℹ️  Dica: talvez você quis dizer "${suggestClosestTask(inputTask)}"?`,
    );
    return;
  }

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const configPath = path.join(__dirname, "..", "config", "rodin.config.ts");

  let customConfig: Record<string, string> = {};

  if (fs.existsSync(configPath)) {
    try {
      const configModule = await import(pathToFileURL(configPath).href);
      customConfig = configModule.default || {};
    } catch (e) {
      console.warn(
        `\n⚠️  Erro ao carregar rodin.config.ts, ignorando configuração personalizada.`,
      );
    }
  }

  const customCommand = customConfig[taskName];

  if (customCommand) {
    const { execCommand } = await import("../utils/exec.js");
    execCommand(customCommand);
    return;
  }

  const extension = path.extname(import.meta.url) === ".ts" ? "ts" : "js";

  const baseTasksPath = path.join(
    __dirname,
    extension === "ts" ? ".." : "..",
    extension === "ts" ? "tasks" : "src/tasks",
  );

  const taskPath = pathToFileURL(
    path.join(baseTasksPath, `${taskName}.${extension}`),
  ).href;

  try {
    const taskModule = await import(taskPath);
    const task = taskModule.default;

    if (typeof task === "function") {
      await task();
    } else {
      console.error(
        `\n⚠️  A tarefa "${taskName}" não exporta uma função padrão.`,
      );
    }
  } catch (error) {
    console.error(`\n❌ Erro ao carregar tarefa "${taskName}".`);
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
}

function suggestClosestTask(input: string): string {
  const distances = validTasks.map((task) => ({
    task,
    dist: levenshteinDistance(input, task),
  }));
  distances.sort((a, b) => a.dist - b.dist);
  return distances[0].task;
}

function levenshteinDistance(a: string, b: string): number {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) =>
    Array.from({ length: a.length + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0,
    ),
  );

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
