import axios from "axios";

// const loginAndSIgnUp = async (mode, data) => {
//   const response = await axios.post(
//     `https://1fe3-102-88-63-207.ngrok-free.app/api/V1/skyshowNG/${mode}`,
//     data
//   );
//   return response.data;
// };
const url = `https://d753-105-113-60-81.ngrok-free.app`;

export async function createUser(payload) {
  const response = await axios.post(`${url}/api/V1/skyshowNG/signUp`, payload);
  console.log(response.data, "response");
  return response.data;
}

export async function verifyEmailAndNumber(option, data) {
  if (option === "Email") {
    const response = await axios.post(
      `${url}/api/V1/skyshowNG/signUp?email=${data}`
    );
    return response.data;
  }

  if (option === "Number") {
    const response = await axios.post(
      `${url}/api/V1/skyshowNG/signUp?Number=${data}`
    );
    return response.data;
  }
}

export async function login(payload) {
  const response = await axios.post(`${url}/api/V1/skyshowNG/login`, payload);

  return response.data;
}

export async function addBank() {
  const response = axios.get(`${url}/api/V1/skyshowNG/addBank?acc`);
}
