import React from 'react'

const Herosecction = () => {
  return (
    <div className="relative ">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto ">
              <div className="relative shadow-xl sm:overflow-hidden ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover  blur-sm brightness-100    " //object-cover
                    src="https://iktanstrategies.com/wp-content/uploads/2020/12/Atardecer-plataforma.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0  mix-blend-multiply" />
                </div>
               
                <div className="relative h-screen w-screen ">
                  <div className="flex h-screen">
                    <div className="m-auto">
                      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ">
                        <span className="block text-white ">
                          Tercero Autorizado
                        </span>
                        <span className="block text-white bg-gradient-to-r from-[#D61229] via-[#DD102A] to-[#E44458]  px-6 py-2">  //    
                          TA-D-A02/06-16/2021
                        </span>
                      </h1>
                      <p className="mx-auto mt-6 max-w-lg text-center text-3xl text-white sm:max-w-3xl font-bold ">
                        PARA EXPLORACIÓN Y EXTRACCIÓN DE HIDROCARBUROS.
                      </p>
                      <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                        <div className="space-y-4 sm:mx-auto  sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                          <a
                            href="#"
                            className="flex  items-center justify-center rounded-md border border-transparent bg-[#DD102A] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-[rgb(112,9,21)] sm:px-8"
                          >
                            Conoce mas.....
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Herosecction