import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBejD5uWJ-waC4V0kfZ19EYRsgDBiLgrC0",
    authDomain: "absensi-siswa-e28d3.firebaseapp.com",
    databaseURL: "https://absensi-siswa-e28d3-default-rtdb.firebaseio.com",
    projectId: "absensi-siswa-e28d3",
    storageBucket: "absensi-siswa-e28d3.appspot.com",
    messagingSenderId: "61476094624",
    appId: "1:61476094624:web:e296fba324347132243fc5",
    measurementId: "G-48TZ74C2ZV"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db }