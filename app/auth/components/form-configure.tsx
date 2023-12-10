'use client'

import { useRouter } from "next/navigation"
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import CheckIcon from '@mui/icons-material/Check'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { generos } from "@/data/info-api"

import CircularProgress from '@mui/material/CircularProgress';
import { useSession } from "next-auth/react"


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

const FormConfigure = ({ logado, platf, meusgeneros }: { logado: boolean, platf: number, meusgeneros: string[] }) => {

  const { update } = useSession()

  const router = useRouter()

  if(logado !== true)
  {
    router.push('/')
  }

  const [error, setError] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [selecionados, setSelecionados] = useState<string[]>(meusgeneros)
  const [plat, setPlat] = useState(selectPlataformas[platf])
  const [carregando, setCarregando] = useState<boolean>(false)

  async function onSubmit(event: React.MouseEvent<HTMLElement>) {
      
    event.preventDefault()

      setCarregando(true)

      try {
          const response = await fetch("/api/auth/configure", {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  categoryas: selecionados,
                  plat: plat.id,
              }),
          });

          const f = await response.json();
          
          if(f.code === 200)
          {
            await update({ categorias: selecionados, plataforma: plat.id })
            setSucesso('Alteração realizada com sucesso.')

            router.push('/')
            router.refresh()
          }
          else
          {
              setError(f.message)
          }

      } catch (error) {
          console.log(error)
      }

      setCarregando(false)
      
  }

  function todos() {
      //setSelecionados([])
      if(selecionados.length >= 1)
      {
      setSelecionados([])
      }
      else
      {
        for (const key in generos) {
          
          if(!selecionados.includes(generos[key].original)) {
            setSelecionados(prev => [...prev, generos[key].original])
          }
        }
      }
      
      


  }

  function handleToggle(id: string) {
      //Caso já tenha sido selecionado...
      if(selecionados.includes(id)) {
      //Exclui o id do array "selecionados"
      setSelecionados(prev => prev.filter(x => x !== id))
      }
      else //Caso não tenha sido seleconado
      {
      //Adiciona aquele id ao array "selecionados"
      setSelecionados(prev => [...prev, id])
      }

  }

  function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
  }

  return (
  <>
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three mx-auto max-w-[800px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Configure sua conta
              </h3>
              <p className="mb-11 text-center text-base font-medium text-body-color">
                Escolha suas plataformas e gêneros preferidos!
              </p>
              
              
                <div className="mb-8">
                  <label
                    htmlFor="plat"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    Plataforma{" "}
                  </label>
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

                </div>
                <div className="mb-8">
                  <label
                    htmlFor="generos"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    Generos que você ama{" "}
                  </label>
                  
                  <div className="flex flex-wrap ">
                  <button key="1211" className="bg-green-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary" onClick={todos}>{selecionados.length >= 1 ? 'Nenhum' : 'Todos'}</button>
    
                  {generos.map(generos => (
                  <button
                  key={generos.original}
                  className={selecionados.includes(generos.original) ? "grow bg-primary mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-white duration-300 hover:bg-gray-300 hover:text-black dark:bg-primary dark:text-white dark:hover:bg-[#2C303B]" : "grow bg-gray-300 mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"}
                  onClick={() => handleToggle(generos.original)}
                  >
                      {generos.traducao}
                  </button>
                  ))}
                  </div>
                </div>
                
                {carregando === false ? selecionados.length >= 1 ?
                <div className="mb-6">
                  <button  onClick={onSubmit} className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                    Continuar
                  </button>
                </div> : <p className="text-center text-base text-red-400 font-medium text-body-color">
                [ERRO]: Selecione pelo menos um gênero
              </p> : <div className="mb-6 flex justify-center"> <CircularProgress /> </div>
                }

              {error && <p className="text-center text-base text-red-400 font-medium text-body-color">
                {error}
              </p>}

              {sucesso && <p className="text-center text-base text-green-400 font-medium text-body-color">
                {sucesso}
              </p>}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969"
          >
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  </>
);

}

export { FormConfigure }