import bcrypt from 'bcrypt'
import express from 'express'

const app = express()
app.use(express.json())
const users = []

app.post ('/signup', async (req, res) => {
    const { username , password } = req.body
    const hash = await bcrypt.hash(password, 13)
    users.push({
        username,
        password: hash
    })
console.log(users)

    res.send ('ok')
})

app.post('/login', async (req, res) => {
 const {username, password} = req.body 
 const user = users.find(user => user.username === username)
if(!user){
    return res.status(400).send('User not found')
}
const isValid = await bcrypt.compare(password, user.password)
if (!isValid){
    return res.send("wrong password")

}
 res.send('Logged in successfully')
})


app.listen(3000, ()  => console.log('Server is running on port 3000'))

// postman- POST - http://localhost:3000/signup or http://localhost:3000/login
//{
//  "username" : "sam",
//  "password" : "sam"
//}
// users and password stored in array here (drop very restart of server)