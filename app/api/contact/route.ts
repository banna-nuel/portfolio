import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validacion basica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalido" },
        { status: 400 }
      )
    }

    // Aqui puedes integrar con servicios de email como:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - O guardar en una base de datos
    
    // Por ahora, simulamos el envio exitoso
    // y mostramos los datos en la consola del servidor
    console.log("Nuevo mensaje de contacto:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Para produccion, descomenta y configura tu servicio de email:
    // await sendEmail({ to: "tu@email.com", from: email, subject, text: message })

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
