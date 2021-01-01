const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'hiby.90hou@gmail.com',
      subject: 'thanks for joining in',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

const sendCancelationEmail = (email, name) => {
  console.log(email,name)
  sgMail
    .send({
      to: email,
      from: 'hiby.90hou@gmail.com',
      subject: 'Tell me why you want to cancel',
      text: `Hi ${name}. Tell me why you want to cancel`
    })
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}