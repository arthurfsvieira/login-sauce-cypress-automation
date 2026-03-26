# 🧪 Automação E2E com Cypress - Sauce Demo

Este repositório contém uma suíte de testes automatizados de ponta a ponta (End-to-End) desenvolvida com **Cypress**. O projeto foi estruturado com foco em **reutilização de código**, **manutenibilidade** e integração com pipelines de **CI/CD**.

---

## 🎯 Objetivos do Projeto
*   **Cobertura Crítica:** Validar os fluxos de autenticação (sucesso e falha) no site [Sauce Demo](https://www.saucedemo.com/).
*   **Escalabilidade:** Implementação de **Custom Commands** para abstrair ações repetitivas.
*   **Qualidade:** Garantir que novos deploys não quebrem funcionalidades essenciais da plataforma.

---

## 🛠️ Tecnologias Utilizadas
*   **Framework:** [Cypress](https://www.cypress.io/)
*   **Linguagem:** JavaScript (Node.js)
*   **CI/CD:** GitHub Actions (Execução automatizada em cada Push)
*   **Relatórios:** Cypress Dashboard / Mochawesome (opcional)

---

## 🏗️ Diferenciais Técnicos (Conforme Requisitos da Vaga)

*   **Cenários Robustos:** Testes desenhados para validar não apenas o caminho feliz, mas também mensagens de erro e estados da interface.
*   **Comandos Reutilizáveis:** Uso da pasta `support/commands.js` para criar o comando `cy.login()`, reduzindo a duplicação de código.
*   **Pipeline de CI/CD:** Arquivo `.github/workflows/main.yml` configurado para rodar os testes automaticamente em ambiente Linux (Ubuntu) a cada atualização no repositório.
*   **Análise de Falhas:** O Cypress está configurado para gerar screenshots e vídeos em modo headless para facilitar o report de defeitos.

---

## 📂 Estrutura de Pastas
```text
├── .github/workflows/   # Configuração do GitHub Actions
├── cypress/
│   ├── e2e/             # Scripts de teste (.cy.js)
│   ├── fixtures/        # Massas de dados para testes
│   └── support/         # Comandos personalizados e configurações globais
├── cypress.config.js    # Arquivo principal de configuração
└── package.json         # Gerenciamento de scripts e dependências
```
## 🚀 Como Executar Localmente
1. Instalação
Clone o repositório e instale as dependências:
```
Bash
git clone [https://github.com/arthurfsvieira/projeto-cypress-automacao.git](https://github.com/arthurfsvieira/projeto-cypress-automacao.git)
cd projeto-cypress-automacao
npm install
```
2. Abrindo a Interface Visual (Modo Iterativo)
```
Bash
npx cypress open
```
3. Executando em Modo Headless (Terminal)
```
Bash
npx cypress run
```

## 📈 Próximos Passos
[ ] Implementar fluxo de checkout completo.

[ ] Adicionar testes de API para validar o backend em paralelo.

[ ] Configurar relatórios HTML detalhados com Mochawesome.

## 👤 Autor
Arthur Vieira

www.linkedin.com/in/arthurfsvieira | arthur.devbr@gmail.com