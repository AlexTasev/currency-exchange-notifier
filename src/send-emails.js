const fs = require("fs");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { auth, service, host, imageUrl, emailList, email } = require("./app-data");

const sendEmails = (currentPrice) => {
  const emailTransport = nodemailer.createTransport({ service, host, auth });
  const emailText = `1 USD = ${currentPrice} BGN ===> Target price reached!`;

  // hbs template
  const source = fs.readFileSync("./src/views/email-template.hbs", "utf8");
  const template = handlebars.compile(source);
  const html = template({ emailText, imageUrl });

  emailList.forEach((recipient) => {
    // send the email
    emailTransport.sendMail(
      { ...email, to: recipient, html },
      (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(emailText);
          console.log(`Email sent: ${info.response}`);
          process.exit();
        }
      },
    );
  });
};

module.exports = sendEmails;
