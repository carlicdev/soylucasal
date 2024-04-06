import { NextResponse } from "next/server";
import sendContactEmail from "@/app/services/sendContactEmail";

export async function POST(request) {
    try {
        const {email, name, subject, message } = await request.json()

        // Verify request body
        if(!name || !email || !subject || !message) {
            return NextResponse.json({
                message: 'Todos los campos son obligatorios.',
                status: 400
            }, {
                status: 400
            })
        }



        
        // enviar correo diciendo que recibimos su comentario
        await sendContactEmail(email, name, subject, message)

        return NextResponse.json({
            message: 'Hemos recibido tu mensaje.',
            status: 200
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: 'No se ha podido enviar el mensaje.',
            status: 500
        }, {
            status: 500
        })
    }
}