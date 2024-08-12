import { getAccount, addAccount} from "../models/AccountModel";

const login = async (req, res) => {
    if (req.method === "POST") {
        const {username} = req.body; 
        const dataAccount = await getAccount()
        const initAccount = dataAccount.find((account)=>account['username'] === username)
        if (initAccount) {
            res.status(200).json({
                status:200,
                message: "Login success",
                token: "asdkjlhfalkdsjfhlskjadfh"
            })
        } else {
            res.status(401).json({
                status:401,
                message: "Invalid username or password"
            })
        }
    } else {
        res.status(405).json({ status: 405, message: "Method not allowed"})
    }
}

const register = (req, res)=>{
    if (req.method === "POST") {
        const data = req.body;
        const datas = addAccount(data)
        res.send(datas)
    }
}

export { login, register }