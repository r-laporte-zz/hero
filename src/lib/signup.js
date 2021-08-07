import axios from "axios"

const URL_SIGNUP = "https://localhost:3000/api/signup";
export async function signUp(payload) {
  try {
    const result = await axios.post(URL_SIGNUP, payload);
    return result.data;
  } catch (error) {
    return error;
  }
}

