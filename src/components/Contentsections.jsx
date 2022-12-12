import React from 'react'
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const Contentsections = () => {
  return (

    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"></div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 mb-28">

        <div>                     {/* Este div ncierra todo*/}
          <div>                   {/* div1 */}
            <div className="absolute">
              <div className=''>
              <h1 className='text-white pt-40 pl-10 text-2xl font-bold s'>CURSO RMA</h1>
              </div>
            </div>
            <div className="h-30 w-full ">
              <img src="https://iktanstrategies.com/wp-content/uploads/2020/12/Atardecer-plataforma.jpg" alt="" />
            </div>
          </div>





          <div className='flex'>     {/* div2 */}

            <div className='h-76 w-3/6 pl-5'>
              <div className='mb-2 text-2xl'>
                <h2>AUTORIZACION </h2>
                <h2>PARA RECOLECCIÓN Y  </h2>
                <h2>TRANSPORTE DE  </h2>
              </div>
              <div className='mb-2 font-bold text-2xl'>
                <h2>RESIDUOS DE</h2>
                <h2>MANEJO</h2>
                <h2>ESPECIAL</h2>
              </div>
              <div>
              
                <h2>Informes e Inscripciones:</h2>
              </div>
              <div>
                <span>cursos@iktanst.com</span>
              </div>
              
            </div>

              <div className='h-76 w-3/6 pl-5 pt-5 bg-[#230B0C]'>

                  <p className='text-white font-bold text-xl'>DURACIÓN</p>
                  <p className='text-white text-sm '>8 HORAS</p>

                  <p className='text-white font-bold text-xl'>SESIONES EN VIVO</p>
                  <p className='text-white text-sm'>MODALIDAD EN LINEA</p>

                  <p className='text-white font-bold text-xl'>CONSTANCIA DC-3</p>
                  <p className='text-white text-sm'>VALIDEZ ANTE LA STPS</p>

              </div>


          </div>



          <div className="bg-gradient-to-r from-[#200800] via-[#431D08] to-[#D37610] flex space-x-10 ">  {/* div3 */}
            <div className='pl-5 pt-5 pb-5'>
              <img className='w-25 h-12' src="https://iktanstrategies.com/wp-content/uploads/2022/08/LIT.png" alt="" />
            </div>
            <div>
              <h3 className='text-white text-sm '>IKTAN Training es una rama de IKTAN Strategies SAPI de CV;</h3>
              <h3 className='text-white text-sm '> la apertura de los grupos está supeditada a que se cumpla </h3>
              <h3 className='text-white text-sm '> con un minimo de participantes; consulta el</h3>
              <h3 className='text-white text-sm '> calendario de cursos 2023 en www.iktanstrategies.com </h3>
            </div>
          </div>
        </div>








        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl pt-28">
              Autorización para Recolección y Transporte de Residuos de
              Manejo Especial
            </h3>
            <p className="mt-8 text-lg text-gray-500 text-justify">
              La Gestión de Residuos debe realizarse con apego a los
              principios de valorización, responsabilidad compartida y
              manejo integral, particularmente el manejo de los Residuos
              Peligrosos debe realizarse conforme la Ley General para la
              Prevención y Gestión Integral de Residuos (LGPGIR) y su
              Reglamento (RLGPGIR), regulación en la cual se dan las
              especificaciones necesarias para prevenir y controlar la
              contaminación del medio ambiente y la protección de la salud
              humana, así como evitar riesgos a la salud y daños a los
              ecosistemas.
            </p>


          </div>
        </div>
      </div>
    </div >

  )
}
