import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'

function App() {

  return (
    <div className='flex flex-col justify-center min-h-screen bg-gray-600'>
      <div className='flex w-full max-w-[1660px] h-[750px] mx-auto overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.7)] bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700'>
        <div className='w-5/6 p-6'>
            <div>
              <Outlet />             
            </div>
        </div>
        <div className='w-1/6 bg-[#1A1A1A] rounded-l-2xl border-l-2 border-custom-orange shadow-[0_0_20px_#FF914D44] flex flex-col items-center py-6'>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default App
