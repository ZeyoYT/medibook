import Image from "next/image";

import landingImage from '../../public/landing.png'
import ambulanceImage from '../../public/ambulance.png'
import hospitalBedImage from '../../public/medicalbed.png'
import opdImage from '../../public/opd.png'
import mapImage from '../../public/map.png'

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: "400"
});

export default function Home() {
  
  return (
    <main className={inter.className}>

      <div className="border-b-4 pb-2 lg:pb-4 bg-gray-300 rounded-b-[30%]">

        <div className="flex items-center justify-center relative">

          <div className="absolute backdrop-blur-lg bg-slate-900 bg-opacity-30 p-4 lg:px-12 lg:py-12 rounded-[1rem] overflow-hidden z-20 gap-5 text-center flex flex-col text-slate-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            
            <div className="flex items-center justify-center flex-col">
              <span className="text-5xl">MediBook</span>
              <span className="text-lg tracking-tight">Your Health, Your Choice, Your Convenience.</span>
            </div>

            <div className="grid grid-flow-col grid-cols-2 gap-2 justify-evenly">
              <button className="rounded-lg bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-12 p-4">Book Now</button>
              <button className="rounded-lg bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 px-12 p-4">Login</button>
            </div>

          </div>

          <Image src={landingImage} className="rounded-b-[30%] min-h-[60dvh] lg:max-h-[75dvh] object-cover" />
        </div>
      </div>
      
      <div className="w-full text-center pt-20 flex flex-col gap-8 bg-gradient-to-b from-transparent via-slate-300 to-white">
          
          <h1 className="text-4xl ">Whats MediBook ?</h1>
          <p className="px-4 text-xl lg:px-12 lg:text-2xl tracking-tight text-balance text-gray-700">
            Navigating the healthcare landscape can be overwhelming. Medibook simplifies the process by offering a comprehensive platform for all your healthcare needs. From finding the right hospital bed to scheduling OPD appointments and arranging reliable ambulance services, Medibook is your one-stop solution. Our user-friendly interface and dedicated support team ensure a hassle-free experience, putting your health and well-being at the forefront. Trust Medibook to provide the care and convenience you deserve.
          </p>

          <section className="text-gray-600 body-font lg:text-right">
            <div className="container px-5 py-24 mx-auto flex justify-center flex-wrap">
              <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 px-4 mb-6">
                  <h1 className="title-font font-medium text-4xl mb-4 text-gray-900">
                    Why MediBook
                  </h1>
                  <div className="leading-relaxed text-xl">
                  MediBook simplifies healthcare with online booking for hospital beds, ambulances, and OPD checkups. Our user-friendly platform provides transparent pricing and valuable health information.
                  </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">21K+</h2>
                  <p className="leading-relaxed">Users</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">35K+</h2>
                  <p className="leading-relaxed">Hospitals</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">50K+</h2>
                  <p className="leading-relaxed">Doctors</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">24</h2>
                  <p className="leading-relaxed">Cities</p>
                </div>
              </div>
              <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 flex items-center justify-center">
                <img src="/networkgraph.png" className="overflow-hidden rounded-full mix-blend-color-burn" />
              </div>
            </div>
          </section>
          
          <section className="p-12 grid lg:grid-flow-col lg:grid-cols-2 grid-flow-row">
            
            <div className="flex flex-col gap-5 p-12 justify-evenly items-center">              
                <div className="flex flex-col gap-5">
                  <span className="text-4xl">Services We Provide</span>
  
                  <span className="text-xl">Need a hospital bed, ambulance, or checkup appointment? MediBook makes it easy. We provide quick and convenient booking for your healthcare needs, along with helpful hospital maps to guide you.</span>
                </div>

                <div>
                  <span>This are just a few from many services we provide</span>
                </div>
            </div>

            <div className="grid min-h-[50vh] text-2xl *:min-h-[28vh] *:rounded-[1rem] *:shadow-lg *:shadow-gray-400 gap-8 lg:gap-5 lg:grid-flow-row lg:grid-cols-2">
              <div className="bg-blue-200 p-4 relative">
                Ambulance Service

                <Image src={ambulanceImage} className="max-h-[25vh] lg:max-h-[20vh] object-cover grayscale absolute -bottom-3 lg:-bottom-1 -right-4" />                
              </div>
              <div className="bg-blue-300 p-4 relative">
                Bed Booking
                
                <Image src={hospitalBedImage} className="max-h-[30vh] object-contain grayscale absolute top-3 -right-4" />   
              </div>
              <div className="bg-blue-400 p-4 relative">
                OPD Booking

                <Image src={opdImage} className="max-h-[30vh] object-contain grayscale absolute -bottom-8 -right-4" />
              </div>
              <div className="bg-blue-500 p-4 relative">
                Hospital Finder
                
                <Image src={mapImage} className="max-h-[25vh] object-contain grayscale absolute top-6 -right-1" />                
              </div>
            </div>
          </section>

          <section className="bg-slate-900 pb-8">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-center text-gray-300 capitalize lg:text-3xl">
                What our <span className="text-blue-500 ">Users</span> say
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-center text-gray-400">
                Users around india who have used our services.
              </p>
              <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 *:bg-slate-800">
                <div className="p-8 border rounded-lg  flex flex-col items-center justify-center">
                  <p className="leading-loose text-gray-400">
                    “MediBook is a great platform for booking hospital beds and ambulances. It's easy to use and the prices are fair.”
                  </p>
                  <div className="flex items-center mt-8 -mx-2">
                    <img
                      className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                    />
                    <div className="mx-2">
                      <h1 className="font-semibold text-slate-300">
                        Ravi
                      </h1>
                      <span className="text-sm text-gray-400">
                        From Pune, India
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8 border rounded-lg flex flex-col justify-between items-center">
                  <p className="leading-loose text-gray-400">
                    “Its never been this easy to book a bed or ambulance. MediBook is the best.”
                  </p>
                  <div className="flex items-center mt-8 -mx-2">
                    <img
                      className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />
                    <div className="mx-2">
                      <h1 className="font-semibold text-slate-300">
                        Aanya
                      </h1>
                      <span className="text-sm text-gray-400">From Delhi, India</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 border rounded-lg flex flex-col justify-evenly items-center">
                  <p className="leading-loose text-gray-400">
                    “I had to book a ambulance for my neighbour who is in critical condition. MediBook made it easy to book an ambulance and the ambulance arrived on time.”
                  </p>
                  <div className="flex items-center mt-8 -mx-2">
                    <img
                      className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300"
                      src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />
                    <div className="mx-2">
                      <h1 className="font-semibold text-slate-300">
                        Rahul
                      </h1>
                      <span className="text-sm text-gray-400">
                        From Mumbai, India
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>


      </div>

    </main>
  );
}
