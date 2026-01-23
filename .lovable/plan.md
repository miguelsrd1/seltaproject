
# Configurar Envio de Emails para info@seltaprojects.com

## Resumo
Vamos configurar o formulário de contacto para enviar todos os pedidos diretamente para **info@seltaprojects.com** usando o Resend como serviço de email e uma Supabase Edge Function.

---

## Passos de Implementação

### Passo 1: Guardar a API Key do Resend
Guardar a API key `re_PSRUqAPA_5EAAj5zFdBmywh81gtGSTGCC` como secret seguro no Supabase com o nome `RESEND_API_KEY`.

### Passo 2: Criar a Edge Function
Criar uma nova edge function `send-contact-email` que:
- Recebe os dados do formulário (nome, email, telefone, mensagem + respostas do questionario)
- Envia um email formatado para info@seltaprojects.com
- Envia um email de confirmacao para o cliente

### Passo 3: Atualizar o Formulario
Modificar o `ContactForm.tsx` para:
- Adicionar estado de loading durante o envio
- Chamar a edge function com todos os dados
- Mostrar mensagem de erro se falhar
- Incluir as respostas do questionario (localização, terreno, orçamento)

---

## O Que Será Enviado

O email para **info@seltaprojects.com** incluira:

| Campo | Descricao |
|-------|-----------|
| Localizacao | Resposta da pergunta 1 (Costa, Interior, Lisboa, Outro) |
| Terreno | Resposta da pergunta 2 (Sim, Nao, A procurar) |
| Orcamento | Resposta da pergunta 3 (250-500k, 500k-1M, etc.) |
| Nome | Nome do cliente |
| Email | Email do cliente |
| Telefone | Telefone (se fornecido) |
| Mensagem | Mensagem adicional |

---

## Ficheiros a Criar/Modificar

| Acao | Ficheiro |
|------|----------|
| Criar | `supabase/config.toml` |
| Criar | `supabase/functions/send-contact-email/index.ts` |
| Modificar | `src/components/ContactForm.tsx` |

---

## Secção Técnica

### Edge Function (send-contact-email/index.ts)

```text
+------------------+     +-------------------+     +------------------+
|   ContactForm    | --> |   Edge Function   | --> |     Resend       |
|   (React)        |     |   (Deno/Supabase) |     |   (Email API)    |
+------------------+     +-------------------+     +------------------+
                                  |
                                  v
                         +------------------+
                         | info@selta...    |
                         | (recebe email)   |
                         +------------------+
```

A edge function:
1. Recebe POST request com dados do formulario
2. Valida os campos obrigatorios (nome, email)
3. Formata email HTML profissional com todos os dados
4. Envia via Resend API para info@seltaprojects.com
5. Opcionalmente envia confirmacao ao cliente
6. Retorna sucesso ou erro

### Atualizacao do ContactForm

- Adicionar estado `isSubmitting` para mostrar loading
- Adicionar estado `error` para mensagens de erro
- Converter `handleSubmit` para async e chamar a edge function
- Incluir as `answers` (respostas do questionario) no envio

---

## Nota Importante sobre o Dominio

O Resend por defeito so permite enviar emails do dominio `onboarding@resend.dev`. Para enviar de `info@seltaprojects.com` ou outro endereco proprio, e necessario:
1. Adicionar e verificar o dominio `seltaprojects.com` no Resend
2. Configurar os registos DNS (SPF, DKIM)

Por agora, os emails serao enviados de `onboarding@resend.dev` mas **entregues a** info@seltaprojects.com.
