import axios from 'axios';
import { NextApiRequest, NextApiResponse } from "next";


const API_KEY = process.env.API_KEY;

const headers = {
    headers: {
        accept: 'application/json',
        'x-amberdata-blockchain-id': 'ethereum-mainnet',
        'x-api-key': API_KEY
    }
};
  

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { ethAddress } = req.body;
    const response = (await axios.post(
        `https://web3api.io/api/v2/addresses/${ethAddress}/transactions`,
        { ethAddress },
        headers
    )).data;
    return res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    return res.status(error.status || 500).end(error.message);
  }
}
