import { db } from "../libs/firebase";
import {get, ref, set} from "firebase/database";

const getAccount = async(username = null) => {
    try {
        const dataAccount = await get(ref(db, 'account'))
        const account = dataAccount.val()
        return account
    } catch (err) {
        console.log(err);
    }
}

const addAccount = (...val) => {
    try{
        const {id, role, nama_lengkap, kelas, jurusan, email, username, password}= val[0];
        const add = set(ref(db, `account/${username}`), {
            id:id,
            nama_lengkap:nama_lengkap,
            kelas:kelas,
            jurusan:jurusan,
            email:email,
            username:username,
            password:password
        })
        if (add){
            return true;
        } else {
            return false
        }
    } catch (err){
        return false
    }
}

export { getAccount, addAccount}