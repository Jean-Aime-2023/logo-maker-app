import { useState } from 'react'
import './App.css'
import BackgroundController from './components/BackgroundController'
import Header from './components/Header'
import IconController from './components/IconController'
import SideNav from './components/SideNav'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage,setUpdateStorage] = useState([])
  return (
    <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>
      <div>
        <Header />
        <div className='w-screen'>
          <div className='w-[15%] fixed'>
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>
          <div className='ml-72 w-[85%] h-screen grid grid-cols-1 md:grid-cols-7 fixed'>
            <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
              {selectedIndex == 0 ?
                <IconController /> :
                <BackgroundController />
              }
            </div>
            <div className='md:col-span-4'>
              <LogoPreview />
            </div>
            <div className='md:col-span-1'>
              Ads Banner
            </div>
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  )
}

{/* <div className='md:col-span-2 bg-gray-400 border h-screen shadow-sm p-5 overflow-auto'>
          {selectedIndex == 0 ?
            <IconController /> :
            <BackgroundController />
          }
        </div>
        <div className='md:col-span-3 bg-red-500'>
          <LogoPreview/>
        </div>
        <div className='bg-green-400 md:col-span-1'>
          Ads Banner
        </div> */}