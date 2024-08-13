import { getAccount, addAccount } from "../models/AccountModel";

const login = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { username, password } = req.body;
            if (username && password) {
                const dataAccount = await getAccount()
                if (dataAccount[username]){
                    const account = dataAccount[username]
                    if (account['password'] === password){
                        res.status(200).json({
                            status: 200,
                            message: "Login success"
                        })
                    } else {
                        res.status(401).json({
                            status:401,
                            message: "Invalid username or password",
                        })
                    }
                } else {
                    res.status(401).json({
                        status: 401,
                        message: "Invalid username or password",
                    })
                }
            } else {
                res.send("Username or password are required.")
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
            })
        }
    } else {
        res.status(405).json({ status: 405, message: "Method not allowed" })
    }
}

const register = (req, res) => {
    if (req.method === "POST") {
        try {
            const datas = addAccount(req.body)
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
            res.status(400).json({
                status: 400,
                message: "Failed to create account",
            })
        }
    } else {
        res.status(405).json({ status: 405, message: "Method not allowed" })
    }
}

export { login, register }