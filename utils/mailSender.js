const nodemailer = require("nodemailer");

exports.mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "StudyLoop",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log(info);
  } catch (error) {
    console.log(error.message);
  }

  return info; // should be return in try bloack = check
};
