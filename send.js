const nodemailer = require("nodemailer");
const getJsonName = require('./src/getJsonName');
const requests = require('./request.json');
const getSheet = require('./src/getSheet')
const getTooday = require('./src/getToday')
const xlsx = require('xlsx');
const fs = require('fs');
const config = require('./config.json')

const buildExcel = () => {
    const path = `./stat/${getJsonName()}`;

    const json = JSON.parse(fs.readFileSync(path));
    const newFile = xlsx.utils.book_new()
    requests.forEach(item => {
        const sheet = xlsx.utils.json_to_sheet(getSheet(json, item))
        xlsx.utils.book_append_sheet(newFile, sheet, item)
    })
    xlsx.writeFile(newFile, 'report.xlsx')
}



async function main() {
    buildExcel()
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: config.mail,
        pass: config.pass, 
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: config.mail, // sender address
      to: config.to, // list of receivers
      subject: "Отчет поисковой выдачи "+ getTooday(), 
      html: "<b>Отчет поисковой выдачи:</b>", 
      attachments: [
          {
            filename: 'report.xlsx',
            path: './report.xlsx'
          }
      ]
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(err => console.log(err))