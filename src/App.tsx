import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'

function App() {

  return (
    <div className='flex flex-col justify-center min-h-screen bg-gray-600'>
      <div className='flex w-full max-w-[1660px] h-[750px] mx-auto overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.7)] bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700'>
        <div className='flex-1 flex flex-col overflow-hidden p-4'>
            <div className='flex-1 overflow-y-auto'>
              <Outlet />             
            </div>
        </div>
        <div className='flex flex-col w-full lg:w-1/6 bg-minimalBlack border-l-2 border-navi-orange shadow-[0_0_20px_#FF914D44]'>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default App
