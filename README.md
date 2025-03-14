# 🚀 Passo a Passo para Clonar o Repositório e Rodar a Automação com Cypress

🎉 Bem-vindo ao repositório de **Cypress Automation**! Este repositório contém testes automatizados escritos com Cypress para validar funcionalidades da aplicação.

Aqui está o **passo a passo** para clonar o repositório e rodar os testes de automação na sua máquina local. Vamos lá! 👇

---

## 1. Clone o Repositório 🛠️

Abra o **Git Bash** e siga as instruções abaixo:

### 1.1 Navegue até o diretório onde você deseja clonar o repositório:
Por exemplo, se você deseja clonar na pasta `C:\projetos`, execute o seguinte comando:

```bash
cd /c/projetos
1.2 Clone o repositório do GitHub:
Use o comando abaixo para clonar o repositório:

bash
Copiar
git clone https://github.com/Lucasforti/Cypress-Automation.git
🔄 Isso criará uma cópia local do repositório na sua máquina.

2. Instale as Dependências 📦
Agora que você clonou o repositório, vamos instalar as dependências do projeto:

2.1 Acesse o diretório do projeto clonado:
bash
Copiar
cd Cypress-Automation
2.2 Instale as dependências:
Execute o seguinte comando para instalar todas as dependências necessárias, incluindo o Cypress:

bash
Copiar
npm install
💡 Esse comando vai ler o arquivo package.json e instalar todas as dependências do projeto.

3. Rodar os Testes de Automação 🎯
Depois de instalar as dependências, você pode rodar os testes do Cypress de duas formas:

3.1 Rodar os testes em modo interativo 🖥️ (com interface gráfica)
Se você deseja ver a execução dos testes no navegador de forma interativa, rode o comando abaixo:

bash
Copiar
npx cypress open
🌟 Isso abrirá a interface gráfica do Cypress, onde você poderá escolher (E2E) e executar os testes.

3.2 Rodar os testes em modo headless 🏃‍♂️ (sem interface gráfica)
Se você deseja rodar os testes em segundo plano (sem abrir o navegador), ideal para CI/CD ou execução rápida, use o comando abaixo:

bash
Copiar
npx cypress run
🔍 Isso executará os testes no modo headless, sem mostrar a interface gráfica.
