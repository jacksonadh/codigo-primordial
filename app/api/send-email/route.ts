import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  objective: string
  timeline: string
  budget: string
  message: string
  intent?: string
}

function generateEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nova solicitação - Código Primordial</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #1a1a1a; border-radius: 16px; overflow: hidden;">
          <tr>
            <td style="padding: 32px 40px; border-bottom: 2px solid #39ff14;">
              <span style="font-family: monospace; font-size: 28px; font-weight: bold; color: #39ff14;">&lt;/&gt;</span>
              <span style="font-size: 20px; font-weight: 600; color: #f5f5f5; margin-left: 8px;">Código Primordial</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 40px 16px;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #f5f5f5;">
                Nova solicitação: ${data.intent || 'Contato'}
              </h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #737373;">
                Recebido em ${new Date().toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 24px;">
              <table role="presentation" style="width: 100%; background-color: #252525; border-radius: 12px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #39ff14; text-transform: uppercase;">Dados do cliente</h2>
                    <p style="margin: 0 0 8px; color: #f5f5f5;"><strong>Nome:</strong> ${data.name}</p>
                    <p style="margin: 0 0 8px; color: #f5f5f5;"><strong>E-mail:</strong> ${data.email}</p>
                    <p style="margin: 0 0 8px; color: #f5f5f5;"><strong>WhatsApp:</strong> ${data.phone || 'Não informado'}</p>
                    ${data.company ? `<p style="margin: 0; color: #f5f5f5;"><strong>Empresa:</strong> ${data.company}</p>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 24px;">
              <table role="presentation" style="width: 100%; background-color: #252525; border-radius: 12px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #8b5cf6; text-transform: uppercase;">Detalhes do projeto</h2>
                    <p style="margin: 0 0 8px; color: #f5f5f5;"><strong>Tipo:</strong> ${data.projectType}</p>
                    <p style="margin: 0 0 8px; color: #f5f5f5;"><strong>Objetivo:</strong> ${data.objective}</p>
                    <p style="margin: 0 0 8px; color: #f5f5f5;"><strong>Prazo:</strong> ${data.timeline}</p>
                    <p style="margin: 0; color: #f5f5f5;"><strong>Investimento:</strong> ${data.budget}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 32px;">
              <table role="presentation" style="width: 100%; background-color: #252525; border-radius: 12px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #f5f5f5; text-transform: uppercase;">Mensagem</h2>
                    <p style="margin: 0; font-size: 15px; color: #a3a3a3; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData
    const { name, email, phone, company, projectType, objective, timeline, budget, message, intent } = body

    if (!name || !email || !projectType || !objective || !timeline || !budget || !message) {
      return NextResponse.json(
        {
          error: 'Campos obrigatórios não preenchidos',
          required: ['name', 'email', 'projectType', 'objective', 'timeline', 'budget', 'message'],
        },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Código Primordial <contato@codigoprimordial.com>',
      to: ['contato@codigoprimordial.com'],
      replyTo: email,
      subject: `[${intent || 'Contato'}] ${projectType} - ${name}`,
      html: generateEmailTemplate({
        name,
        email,
        phone: phone || '',
        company: company || '',
        projectType,
        objective,
        timeline,
        budget,
        message,
        intent,
      }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Erro ao enviar e-mail', details: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'E-mail enviado com sucesso!',
      id: data?.id,
    })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      {
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
