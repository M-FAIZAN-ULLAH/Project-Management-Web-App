import { Disclosure } from '@headlessui/react'
import UserComponent from './userComponent'
import { useState } from 'react'
import Addpersons from './users'


const navigation = [
  { name: 'Supervisor', href: '#', current: false },
  { name: 'Student', href: '#', current: false },
  { name: 'Evaluator', href: '#', current: false },
  { name: 'Add-Users', href: '#', current: false },

]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function Addperson() {
  
  
const [Comp, setComp] = useState(() => <UserComponent props={'Supervisor'} />);
 

const handleComp = (name)=>{
    if(name === 'Add-Users')
      setComp(()=><Addpersons/> )
    else
     setComp(()=><UserComponent props={name}/>) 
} 

  return (
    <>
 
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                   
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            onClick={()=>{
                               handleComp(item.name)
                            }} 
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                 
               
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
               {Comp}
            </div>
        </main>
      </div>
    </>
  )
}
