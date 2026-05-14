import bcrypt from "bcrypt"
import prisma from "../../lib/prisma.js"

const register = async (req, res) => {

    const { username, email, password } = req.body


    const hashPassword = await bcrypt.hash(password, 10)
    console.log(hashPassword)


    const newUser = await prisma.user.create({
        data: {
            username, email, password: hashPassword
        }
    })

    console.log(newUser)
}

const login = (req, res) => {
    res.send("Login")
}

const logout = (req, res) => {
    res.send("Logout")
}

export default { register, login, logout }