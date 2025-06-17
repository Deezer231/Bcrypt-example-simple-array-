import bcrypt from 'bcrypt';

const password = 'password1'

console.time("TIME")
const hash = await bcrypt.hash (password, 13) // asychronous method - use await ( WAITS FOR BCRRYPT TO FISNISH WITH HASHING/COMPARING- THEN LETS CODE MOVE ON WITH RESULT)
console.timeEnd("TIME")


console.log ({password, hash})

// SALT -random string bcrypt adds in to make it random everytime
//13 work factor reccommended for security
// https://youtu.be/AzA_LTDoFqY?si=aeARoifp7LmVLhm6