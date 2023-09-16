import axios from 'axios';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // example contract
  const ethAddress = '0x5af0d9827e0c53e4799bb226655a1de152a425a5';
  const [data, setData] = useState<any>();

  useEffect(() => {
    const asyncReqs = async () => {
      const response = (await axios.post('/api/read', { ethAddress })).data;
      setData(response);
    }
    asyncReqs();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold">Visualizer App</h1>
    </main>
  )
}
