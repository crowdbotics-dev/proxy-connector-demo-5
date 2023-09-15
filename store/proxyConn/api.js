import axios from "axios"
import {
  PROXY_CONN_1_USERNAME,
  PROXY_CONN_1_PASSWORD
} from "react-native-dotenv"
const proxyConn = axios.create({
  baseURL: "https://something.com/api",
  auth: { username: PROXY_CONN_1_USERNAME, password: PROXY_CONN_1_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
