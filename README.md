# Oportunidades Falavinha

Este projeto exibe vagas da Falavinha Next e permite que candidatos enviem seus dados para um endpoint do Formspree.

## Configuração do servidor

Link da aplicação: https://oportunidades-falavinha.vercel.app/

Crie um arquivo `.env` na raiz (há um modelo em `.env.example`) com as seguintes variáveis:

```
FORMSPREE_ENDPOINT=https://formspree.io/f/mpwrrvkq
PORT=3001 # opcional
```

## Instalação

1. Instale as dependências:

```bash
npm install
```

2. Em um terminal, execute o servidor responsável por encaminhar os dados para o Formspree:

```bash
npm run start
```

3. Em outro terminal, execute a aplicação Vue:

```bash
npm run dev
```

As candidaturas serão enviadas para o endpoint definido em `FORMSPREE_ENDPOINT` com todos os campos e o currículo em anexo.
