// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const qr = require("qrcode");

export default function handler(req, res) {
  if(!req.body || !req.body.data){
    return res.status(500).send('No request body or data')
  }

  const {name, surname, email, dob, phone, timestamp} = req?.body?.data
  if(!(name && surname && email && dob && phone && timestamp)){
    return res.status(500).send('Missing data, please fill-in all the inputs fields')
  }

  qr.toDataURL(JSON.stringify(req.body.data), { maskPattern: req.body.mask || 0 })
    .then(url => {
      return res.status(200).send(url)
    })
    .catch(err => {
      console.error(err)
      return res.status(500).send('Something broke!')
    })
  
}