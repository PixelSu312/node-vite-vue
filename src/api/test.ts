
import axios from "axios"


export const getTest = async () => {
  const response = await axios.get("/callback")
  return response.data
}
