import bcrypt from 'bcrypt'

const password = 'password1'

const hash = await bcrypt.hash(password, 13)

const ismatch  = await bcrypt.compare('password1', hash)

console.log(ismatch)




