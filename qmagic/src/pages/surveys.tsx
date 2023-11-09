
import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Surveys() {
    return (

        <div className="relative flex sm:min-h-screen min-h-full flex-col justify-center overflow-hidden bg-gray-50 sm:py-12">
        <Image src="/img/beams.jpg" alt="bg app" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width={1308} height={1200}/>
        <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative bg-white px-6 pt-5 pb-4 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-5">
          <div className="mx-auto max-w-full max-h-screen">
            <div className="flex flex-col items-center justify-center">


            <div className="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
  <div>
    <span className="text-purple-800 text-sm">Blockchain</span>
    <h3 className="font-bold mt-px">About Near Blockchain Network</h3>
    <div className="flex items-center gap-3 mt-2">
      <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">Near</span>
      <span className="text-slate-600 text-sm flex gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> 5 ANSR + NFT</span>
    </div>
  </div>
  <div>
    <button className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">Mint <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg>
</button>
  </div>
   </div>

                </div>
                </div>
                </div>
                </div>


)

    }