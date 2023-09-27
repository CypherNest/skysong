import axios from "axios";

// const loginAndSIgnUp = async (mode, data) => {
//   const response = await axios.post(
//     `https://1fe3-102-88-63-207.ngrok-free.app/api/V1/skyshowNG/${mode}`,
//     data
//   );
//   return response.data;
// };
const url = `https://d50c-197-210-28-193.ngrok-free.app`;

export async function createUser(payload) {
  const response = await axios.post(`${url}/api/V1/skyshowNG/signUp`, payload);
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

export async function generateBTC(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/btc_Wallet_Address`,
    {
      headers,
    }
  );
  return response.data;
}

export async function generateEthereumWallet(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/generateEtheriumWallet`,
    {
      headers,
    }
  );
  return response.data;
}

export async function generateUsdt(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/generateTetherAddress`,
    {
      headers,
    }
  );
  return response.data;
}

export async function update(data, token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.patch(`${url}/api/V1/skyshowNG/updateMe`, data, {
    headers,
  });
  return response.data;
}
