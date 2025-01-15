# Sistema de Gestão de Eventos

## **Visão Geral do Projeto**
O sistema de gestão de eventos é uma plataforma que permite a organização de eventos de forma eficiente, abrangendo desde o cadastro e gerenciamento de eventos até o controle da participação de visitantes no dia do evento. O objetivo é oferecer uma solução intuitiva para super administradores, responsáveis pelos eventos e visitantes, garantindo segurança, automação e praticidade.

---

## **Arquitetura Inicial do Sistema**
### **1. Camadas do Sistema**

#### **Frontend (Next.js)**
- **Interfaces principais:**
  - Painel do Super Administrador.
  - Painel do Responsável pelo Evento.
  - Interfaces para visitantes (inscrição e confirmação).
- **Tecnologias auxiliares:**
  - TailwindCSS para estilização.
  - Axios ou Fetch API para comunicação com o backend.

#### **Backend (Laravel)**
- **API RESTful:**
  - Endpoints para cadastro, edição e exclusão de eventos, visitantes e check-ins.
- **Banco de Dados:**
  - MySQL ou PostgreSQL para armazenamento.
  - Redis para cache e gerenciamento de filas.
- **Segurança:**
  - Autenticação via Laravel Sanctum.
  - Logs de auditoria para ações críticas.
- **Tarefas em Segundo Plano:**
  - Filas para envio de emails e mensagens.
  - Atualizações em massa, como notificações para visitantes.

#### **Aplicativo de QR Code (PWA ou React Native)**
- Leitura de QR Codes para check-in.
- Registro de dados offline com sincronização posterior ao servidor.

---

## **Requisitos do Sistema**
### **1. Requisitos Funcionais**
#### **Must-Have (Essenciais):**
1. Cadastro e gerenciamento de eventos.
2. Envio de links de acesso aos responsáveis pelos eventos.
3. Cadastro de visitantes, com envio de QR Codes por email ou WhatsApp.
4. Check-in via leitura de QR Code, com registro de horário e detalhes.
5. Painel do Super Administrador com relatórios detalhados (número de participantes, lista de presença, etc.).
6. Controle de permissões para responsáveis e funcionários.
7. Autenticação segura para todos os usuários.
8. Cadastro manual de visitantes no local do evento.

#### **Nice-to-Have (Adicionais):**
1. Sistema de notificações automatizadas antes e após o evento.
2. Mapas interativos para localização do evento.
3. Feedback dos visitantes após o evento.
4. Check-ins para áreas específicas do evento (multiáreas).
5. Logs de atividades no painel para auditoria.
6. Modo offline para o aplicativo de QR Code.
7. Integração com gateways de pagamento (para eventos pagos).

### **2. Requisitos Não Funcionais**
1. **Desempenho:**
   - Respostas em menos de 1 segundo para a maioria das requisições.
   - Capacidade de suportar até 1.000 visitantes simultâneos.
2. **Segurança:**
   - Proteção contra ataques como SQL Injection e XSS.
   - Armazenamento seguro de senhas e dados sensíveis.
3. **Usabilidade:**
   - Interfaces responsivas e acessíveis.
4. **Manutenção:**
   - Código modular e bem documentado.

---

## **Documentação do Projeto**

### **Fluxo de Usuários**
1. **Super Administrador:**
   - Cadastra o evento, define localização, limite de participantes e envia o link ao responsável.
   - Visualiza relatórios detalhados no painel.
2. **Responsável pelo Evento:**
   - Adiciona informações extras ao evento.
   - Cadastra e gerencia funcionários e visitantes.
   - Envia QR Codes e mensagens.
3. **Visitante:**
   - Recebe QR Code por email/WhatsApp.
   - Faz check-in no evento.
4. **Funcionário:**
   - Realiza check-ins usando o app de QR Code.
   - Visualiza ações limitadas com base na área atribuída.

---

### **Modelagem Inicial do Banco de Dados**
#### Tabelas Principais
- **users**
  - id, nome, email, senha, tipo (super admin, responsável, funcionário).
- **events**
  - id, nome, localização, data, limite_participantes, status.
- **visitors**
  - id, nome, email, evento_id, status_checkin.
- **qrcodes**
  - id, visitor_id, codigo, status (ativo, expirado).
- **checkins**
  - id, visitor_id, evento_id, horario.

---

### **Próximos Passos**
1. Definir fluxos detalhados para cada usuário.
2. Criar protótipos das interfaces principais.
3. Desenvolver a API do backend.
4. Implementar o frontend e testar a integração.

Se precisar de ajustes ou de mais detalhamento em alguma parte, é só avisar!

