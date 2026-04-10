# Desafio Nology - Cashback

Projeto desenvolvido para o desafio de estagio da Nology.  
A aplicacao calcula cashback com regras de cliente normal/VIP, promocao para compras acima de R$ 500 e registra historico por IP em banco PostgreSQL.

## Como rodar

### 1) Backend (FastAPI + PostgreSQL com Docker)

```bash
cd back-end
cp .env.example .env
docker compose up --build
```

API disponivel em `http://localhost:8000`.

### 2) Frontend (React + Vite)

Em outro terminal:

```bash
cd front-end
npm install
npm run dev
```

Frontend disponivel em `http://localhost:5173`.
