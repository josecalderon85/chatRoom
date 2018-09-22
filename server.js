const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('pusher-chatkit-server')

const app = express()

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:ae6b9f76-4356-486c-accf-a4d022bbe839',
  key: 'ad5af305-a61d-4344-88c5-8b535171aa69:1XcxkNt+WNa5kaWEt2dwgkPHmX1JayPMG9H9ckF017w='
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users',(req, res) =>{
  const { username } = req.body

  chatkit
  .createUser({
    name: username,
    id: username
  })
  .then(()=> res.sendStatus(201))
  .catch(error =>{
    if(error.error_type === 'services/chatkit/user_already_exists'){
      res.sendStatus(200)
    }else{
      res.status(error.statusCode).json(error)
    }
  })
})

app.post('/authenticate',(req, res)=>{
  const { grant_type } = req.body
  res.json(chatkit.authenticate({ grant_type,userId: req.query.user_id}, req.query.user_id))
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
