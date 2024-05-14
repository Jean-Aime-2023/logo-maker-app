import './App.css'
import Header from './components/Header'
import SideNav from './components/SideNav'

export default function App() {
  return (
    <>
    <Header/>
    <div className='w-64 fixed'>
      <SideNav/>
    </div>
    <div className='ml-64'>
      Body
    </div>
    </>
  )
}