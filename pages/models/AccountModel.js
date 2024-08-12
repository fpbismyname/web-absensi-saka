import { db } from "../libs/firebase";
import { doc, getDoc } from "firebase/firestore";

const getAccount = async(username = null) => {
    try {
        const user = username || ""
        const docRef = doc(db, "data_murid", user)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (err) {
        console.log(err);
    }
}

export { getAccount }