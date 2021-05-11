// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const qr = require("qrcode");

export default (req, res) => {
  // const {name, surname, email, date, phone, timestamp} = req.body

  qr.toDataURL(JSON.stringify(req.body.data), { maskPattern: req.body.mask })
    .then(url => {
      res.send(url)
    })
    .catch(err => {
      console.error(err)
    })
  
}