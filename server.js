import brevo, { SendSmtpEmail, SendTransacSms } from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.API_KEY_MAILER
);

//console.log(process.env.API_KEY_MAILER);

async function main() {
  
  //DBQuery
  const user = {
    name: 'Maria',
    email: 'otakugodie@gmail.com'
  };

  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject = "Helo world from brevo and NodeJS";
    sendSmtpEmail.to = [
      {
        email: user.email,
        name: user.name,
        email: "otakugodie@gmail.com",
        name: "Diego Rodriguez",
      },
    ];
    sendSmtpEmail.htmlContent = `<html><body><h1>Hello ${user.name} from Brevo and NodeJS</h1><p>This is a teste email</p><button>Click me</button><a href='https://www.google.com'>Visit Google</a></body></html>`;
        
        // ```
        //     <html>
        //         <body>
        //             <h1>Hello world from Brevo and NodeJS</h1>
        //             <p>This is a teste email</p>
        //             <button>Click me</button>
        //             <a href='https://www.google.com'>Visit Google</a>
        //         </body>
        //     </html>
        // ```;

    sendSmtpEmail.sender = {
      name: "Diego Rodriguez",
      email: "diegofer.rodriguezc@gmail.com",
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();
