import * as bcrypt from "bcrypt";
import { getAccount, addAccount, editAccount } from "../models/AccountModel";

const login = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { username, password } = req.body;
            if (username && password) {
                const dataAccount = await getAccount()
                const checkAccount = Object.values(dataAccount).find((user) => user['username'] === username)
                if (checkAccount) {
                    if (bcrypt.compareSync(password, checkAccount['password'])) {
                        res.status(200).json({
                            status: 200,
                            message: "Login success"
                        })
                    } else {
                        res.status(401).json({
                            status: 401,
                            message: "Invalid username or password"
                        })
                    }
                }
            } else {
                res.send("Username or password are required.")
            }
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error",
            })
        }
    } else {
        res.status(405).json({ status: 405, message: "Method not allowed" })
    }
}

const register = async(req, res) => {
    if (req.method === "POST") {
        try {
            const datas = await addAccount(req.body)
            if (datas) {
                res.status(201).json({
                    status: 201,
                    message: "Account created successfully",
                })
            } else {
                res.status(400).json({
                    status: 400,
                    message: "Failed to create account",
                })
            }
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error",
            })
        }
    } else {
        res.status(405).json({ status: 405, message: "Method not allowed" })
    }
}

const edit = (req, res) => {
    if (req.method === "PUT") {
        try {
            const idAccount = req.query
            const datas = editAccount(idAccount, req.body)
            if (datas) {
                res.status(200).json({
                    status: 200,
                    message: "Account data is Updated",
                    idAccount
                })
            } else {
                res.status(400).json({
                    status: 400,
                    message: "Failed to update account data"
                })
            }
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            })
        }
    } else {
        res.status(405).json({ status: 405, message: "Method not allowed" })
    }
}

export { login, register, edit }