import nodemailer from 'nodemailer';

async function sendContactEmail(email, name, subject, message) {
    try {
        // create trasport
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SUBSCRIBE_MAIL,
                pass: process.env.SUBSCRIBE_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
         });

      
        const mailOptions = {
            from: process.env.SUBSCRIBE_MAIL,
            to: 'lucasal.contacto@gmail.com',
            subject: subject,
            html: (name + '/-/' + email + '/-/ ' + message) 
        }

        // send email
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.log(err);
    }
}

export default sendContactEmail;