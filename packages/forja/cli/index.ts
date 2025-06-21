import inquirer from 'inquirer'
import chalk from 'chalk'
import { executarCLI } from '../src/execCli.js'

async function main() {
  console.clear()
  console.log(chalk.cyan.bold('🛠️  FORJA - Plataforma de Automação\n'))

  const { escolha } = await inquirer.prompt([
    {
      type: 'rawlist',
      name: 'escolha',
      loop: false,
      message: 'Selecione uma ação:',
      choices: [
        '🚀 Criar projeto (Ayven)',
        '🔧 Reestruturar projeto (Roqe)',
        '📂 Organizar arquivos (Voyn)',
        '🌐 Fazer deploy (Lanso)',
        '⚙️ Executar tarefas técnicas (Rodim)',
        new inquirer.Separator(),
        '🔁 Rodar fluxo completo (Ayven → Roqe → Voyn → Lanso)',
        '❌ Sair'
      ]
    }
  ])

  switch (escolha) {
    case '🚀 Criar projeto (Ayven)':
      executarCLI('ayven')
      break
    case '🔧 Reestruturar projeto (Roqe)':
      executarCLI('roqe')
      break
    case '📂 Organizar arquivos (Voyn)':
      executarCLI('voyn')
      break
    case '🌐 Fazer deploy (Lanso)':
      executarCLI('lanso')
      break
    case '⚙️ Executar tarefas técnicas (Rodim)':
      executarCLI('rodim')
      break
    case '🔁 Rodar fluxo completo (Ayven → Roqe → Voyn → Lanso)':
      await executarCLI('ayven', true)
      await executarCLI('roqe', true)
      await executarCLI('voyn', true)
      await executarCLI('lanso', true)
      break
    case '❌ Sair':
      console.log(chalk.gray('\nEncerrando Forja...'))
      process.exit(0)
  }
}

main()
