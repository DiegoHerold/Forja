import { exec } from 'child_process'
import chalk from 'chalk'
import path from 'path'
import { fileURLToPath } from 'url'

// Garantir __dirname em ESModules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function executarCLI(cli: string, silencioso = false) {
  // Volta 3 níveis até a raiz: forja/src → forja → packages → Forja/
  const absolutePath = path.resolve(__dirname, '../../../packages', cli, 'cli/index.ts')

  if (!silencioso) {
    console.log(chalk.yellow(`\n👉 Executando: ${cli}...\n`))
  }

  const processo = exec(`npx tsx "${absolutePath}"`, (err) => {
  if (err) {
    console.error(chalk.red(`Erro ao executar ${cli}: ${err.message}`))
  }
})

  processo.stdout?.pipe(process.stdout)
  processo.stderr?.pipe(process.stderr)
}





// import { exec } from 'child_process'
// import chalk from 'chalk'

// export function executarCLI(comando: string, silencioso = false) {
//   if (!silencioso) {
//     console.log(chalk.yellow(`\n👉 Executando: ${comando}...\n`))
//   }

//   const processo = exec(`npx ${comando}`, (err, stdout, stderr) => {
//     if (err) {
//       console.error(chalk.red(`Erro ao executar ${comando}: ${err.message}`))
//     }
//     if (stderr) {
//       console.error(chalk.gray(stderr))
//     }
//     if (stdout) {
//       console.log(chalk.white(stdout))
//     }
//   })

//   processo.stdout?.pipe(process.stdout)
//   processo.stderr?.pipe(process.stderr)
// }
