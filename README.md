# Oportunidades Falavinha

Este projeto exibe vagas da Falavinha Next e permite que candidatos enviem seus dados para uma caixa de e-mail.

## Configuração do servidor de e-mail

Crie um arquivo `.env` na raiz com as seguintes variáveis:

```
SMTP_HOST=smtp.seudominio.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario
SMTP_PASS=senha
DEST_EMAIL=destino@seudominio.com
SMTP_FROM=Falavinha <no-reply@seudominio.com> # opcional
PORT=3001 # opcional
```

## Instalação

1. Instale as dependências:

```bash
npm install
```

2. Em um terminal, execute o servidor que enviará os e-mails:

```bash
npm run start
```

3. Em outro terminal, execute a aplicação Vue:

```bash
npm run dev
```

As candidaturas serão enviadas para o e-mail definido em `DEST_EMAIL` com o currículo em anexo.
