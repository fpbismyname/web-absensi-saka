import * as bcrypt from "bcrypt";
import { db } from "../libs/firebase";
import { get, ref, set, push } from "firebase/database";

const getAccount = async (username = null) => {
    try {
        const dataAccount = await get(ref(db, 'account'))
        return dataAccount.val()
    } catch (err) {
        console.log(err);
    }
}

const addAccount = async (AccountData) => {
    try {
        const { role, nama_lengkap, kelas, jurusan, email, username, password } = AccountData
        const hashPassword = bcrypt.hashSync(password, 10)
        const allAccount = await getAccount()
        const checkDuplicationAccount = Object.values(allAccount).find(
            doc => doc['username'] === username ||
                doc['email'] === email ||
                doc['nama_lengkap'] === nama_lengkap
        )
        if (!checkDuplicationAccount) {
            const add = set(push(ref(db, 'account')), {
                role: role,
                nama_lengkap: nama_lengkap,
                kelas: kelas,
                jurusan: jurusan,
                email: email,
                username: username,
                password: hashPassword
            })
            if (add) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}

const editAccount = async (idAccount, updateData) => {
    const { id } = idAccount
    const { nama_lengkap, kelas, jurusan, email, username, password } = updateData
    try {
        const edit = await update(ref(db, `account/${id}`), {
            nama_lengkap: nama_lengkap,
            kelas: kelas,
            jurusan: jurusan,
            email: email,
            username: username,
            password: password
        })
        if (edit) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false
    }
}

const deleteAccount = () => { }
export { getAccount, addAccount, editAccount, deleteAccount }