import { getAccount } from "../models/AccountModel";

const login = async(req, res) =>{
    if (req.method === "POST"){
        const { username } = req.body;
        const dataAccount = await getAccount(username)
    }
}

export {login}