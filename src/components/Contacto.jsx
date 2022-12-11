import React from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, LifebuoyIcon, NewspaperIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Changelog', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'News', href: '#' },
]
const supportLinks = [
  {
    name: 'WhatsApp',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Correo Electronico',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
]


export const Contacto = () => {
  return (
    <div className="bg-white">
      <header className="relative bg-blue-gray-800 pb-36">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-blue-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <Popover as="div" className="relative z-10">
          

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden">
              <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-gray-400 hover:bg-blue-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-blue-gray-900 hover:bg-blue-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="block w-full rounded-md border border-transparent bg-blue-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-blue-600"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="relative mx-auto mt-24 max-w-md px-4 pb-32   pt-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Contacto</h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-gray-300">
            
          </p>
        </div>
      </header>

      <main>
        <div className="bg-blue-gray-50 mb-16">
          {/* Cards */}
          <section
            className="relative z-10 mx-auto -mt-32 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
            aria-labelledby="contact-heading"
          >
            <h2 className="sr-only" id="contact-heading">
              Contact us
            </h2>
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {supportLinks.map((link) => (
                <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-blue-600 p-5 shadow-lg ">
                      <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium text-blue-gray-900">{link.name}</h3>
                    <p className="mt-4 text-base text-blue-gray-500">{link.description}</p>
                  </div>
                  <div className="rounded-bl-2xl rounded-br-2xl bg-blue-gray-50 p-6 md:px-8">
                    <a href={link.href} className="text-base font-medium text-blue-700 hover:text-blue-600">
                      Contact us
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          
        </div>  
      </main>
    </div>
  )
}
