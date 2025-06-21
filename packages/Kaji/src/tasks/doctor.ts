import { execCommand } from "../utils/exec.js";
import { execSync } from "child_process";

export default function doctor() {
  console.log("\n🩺 Rodin Doctor – Verificando ambiente\n");

  const checks = [
    { name: "Node.js", command: "node -v" },
    { name: "NPM", command: "npm -v" },
    { name: "Git", command: "git --version" },
    { name: "VSCode CLI (code)", command: "code --version" },
    { name: "Prettier", command: "npx prettier -v" },
  ];

  checks.forEach(({ name, command }) => {
    try {
      const output = execSync(command).toString().trim();
      console.log(`✅ ${name}: ${output}`);
    } catch {
      console.warn(`⚠️  ${name} não encontrado.`);
    }
  });

  console.log("\n🔍 Verificação concluída.\n");
}
