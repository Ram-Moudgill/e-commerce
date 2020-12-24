import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'ram',
    email: 'ramgill@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'ravi',
    email: 'ravigill@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'lavi',
    email: 'lavigill@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
