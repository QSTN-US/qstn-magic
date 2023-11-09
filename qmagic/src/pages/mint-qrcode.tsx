
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Surveys() {
  const [qrCodelink, setQrCodelink] = useState<any>();

  const apiUrl = `http://localhost:3002/api/encode`;

  async function callEncoder() {
  try {
    const response = await axios.post(apiUrl, {
      appcode: '',
    });
    setQrCodelink(response.data.qrcode);
  } catch (error: any) {
    console.error('Error creating qrcode:', error);
    return false;
  }
  }
  useEffect(() => {
    callEncoder()
  },[qrCodelink])


    return (

        <div className="relative flex sm:min-h-screen min-h-full flex-col justify-center overflow-hidden bg-gray-50 sm:py-12">
        <Image src="/img/beams.jpg" alt="bg app" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width={1308} height={1200}/>
        <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative bg-white px-6 pt-5 pb-4 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-5">
          <div className="mx-auto max-w-full max-h-screen">
            <div className="flex flex-col items-center justify-center">


              <Image src={qrCodelink} width={512} height={512} className="h-[512px] w-[512px]" alt="QSTN MAGIX" />

                </div>
                </div>
                </div>
                </div>


)

    }