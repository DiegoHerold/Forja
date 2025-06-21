import { execSync } from "child_process";

export function execCommand(command: string, options = {}) {
  try {
    console.log(`\n🔧 Executando: ${command}\n`);
    execSync(command, {
      stdio: "inherit", // mostra a saída do comando diretamente no terminal
      ...options,
    });
  } catch (error: any) {
    console.error(`\n❌ Erro ao executar comando: ${command}`);
    if (error.message) {
      console.error(error.message);
    }
    process.exit(1);
  }
}
