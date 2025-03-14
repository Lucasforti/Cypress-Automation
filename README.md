# 🚀 Passo a Passo para Clonar o Repositório e Rodar a Automação com Cypress

🎉 Bem-vindo ao repositório de **Cypress Automation**! Este repositório contém testes automatizados escritos com Cypress para validar funcionalidades da aplicação.

Aqui está o **passo a passo** para clonar o repositório e rodar os testes de automação na sua máquina local. Vamos lá! 👇


Pré-Requisitos:

---

1. Clone o Repositório 🛠️

Abra o **Git Bash** e siga as instruções abaixo:

### 1.1 Navegue até o diretório onde você deseja clonar o repositório:
Por exemplo, se você deseja clonar na pasta `C:\projetos`, execute o seguinte comando:
```bash
cd /c/projetos
```

1.2 Clone o repositório do GitHub usando o comando abaixo:
```bash
git clone https://github.com/Lucasforti/Cypress-Automation.git
```

2. Instale as Dependências 📦
2.1 Acesse o diretório do projeto clonado:
```bash
cd Cypress-Automation
```
2.2 Instale as dependências através do comando:
```bash
npm install
```
💡 Esse comando vai ler o arquivo package.json e instalar todas as dependências do projeto.

3. Rodar os Testes de Automação 🎯

3.1 Caso queira rodar os testes em modo interativo 🖥️ (com interface gráfica)
```bash
npx cypress open
```
🌟 Isso abrirá a interface gráfica do Cypress, onde você poderá escolher (E2E) manualmente e executar os testes.

3.2 Caso queira rodar os testes em modo headless, ideal para CI/CD ou execução rápida 🏃‍♂️ (sem interface gráfica)

```bash
npx cypress run
```
🔍 Isso executará os testes no modo headless, sem mostrar a interface gráfica.
