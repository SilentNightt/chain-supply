import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCL3NvgaikTIuSoU8LuUw_azugOll2tJ1M",
    authDomain: "shipments-chain.firebaseapp.com",
    projectId: "shipments-chain",
    storageBucket: "shipments-chain.firebasestorage.app",
    messagingSenderId: "929711942730",
    appId: "1:929711942730:web:1e94f03f4b7134d3ed0ab3",
    measurementId: "G-VLCH5CE2TZ"
  };

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Функция для записи данных в Firestore
export const sendMetric = async (metricName: string, data: any) => {
  try {
    await addDoc(collection(db, metricName), data);
    console.log("Метрика успешно отправлена:", data);
  } catch (error) {
    console.error("Ошибка отправки метрики:", error);
  }
};
