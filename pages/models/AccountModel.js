import { db } from "../libs/firebase";
import { collection, getDocs } from "firebase/firestore";

const getAccount = async(username = null) => {
    try {
        const dataAccount = await getDocs(collection(db, 'data_murid'));
        const account = dataAccount.docs.map(doc=>doc.data())
        return account
    } catch (err) {
        console.log(err);
    }
}

export { getAccount }