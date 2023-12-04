/* eslint-disable @next/next/no-img-element */
'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import CheckIcon from '@mui/icons-material/Check';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const selectPlataformas = [
    {
        id: 'pc',
        name: 'Windows (PC)',
        avatar: '/images/blog/win.png',
    },
    {
        id: 'browser',
        name: 'Navegador (WEB)',
        avatar: '/images/blog/web.png',
    },
    {
        id: 'all',
        name: 'Todas',
        avatar: '/images/blog/win.png',
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SelectTailwind() {
const [plat, setPlat] = useState(selectPlataformas[2])

return (
    <Listbox value={plat} onChange={setPlat}>
    {({ open }) => (
        <>
        
        <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white dark:bg-dark py-1.5 pl-3 pr-10 text-left text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#2C303B] focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
                <img src={plat.avatar} alt="" className="h-5 w-5 flex-shrink-0" />
            

                <span className="ml-3 block truncate">{plat.name}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <KeyboardDoubleArrowDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
            </Listbox.Button>

            <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-[#2C303B] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {selectPlataformas.map((person) => (
                <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                    classNames(
                        active ? 'bg-primary text-white' : 'text-gray-900 dark:text-white',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                    }
                    value={person}
                >
                    {({ selected, active }) => (
                    
                    
                    <>
                        <div className="flex items-center">
                        <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0" />
                        <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                        >
                            {person.name}
                        </span>
                        </div>

                        {selected ? (
                        <span
                            className={classNames(
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                        >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        ) : null}
                    </>
                    )}
                </Listbox.Option>
                ))}
            </Listbox.Options>
            </Transition>
        </div>
        </>
    )}
    </Listbox>
)
}