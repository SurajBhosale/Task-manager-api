const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bhosalesuraj2000@gmail.com',
        subject: 'thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bhosalesuraj2000@gmail.com',
        subject: 'Cancellation mail',
        text: `We hope, ${name}. you enjoyed our service. If anything you feel not workign you can always reach to us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
