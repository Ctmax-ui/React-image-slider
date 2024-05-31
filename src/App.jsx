import { useState } from 'react'
import './App.css'

function App() {

  const images = ['https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

  const [imgCount, setImgCount] = useState(0)

  const [currentSlide, setCurrentSlide] = useState(images[0])

  function nextImg() {
    const newCount = imgCount >= images.length - 1 ? 0 : imgCount + 1
    setImgCount(newCount)
    setCurrentSlide(images[newCount])
  }

  function prevImg() {
    const newCount = imgCount === 0 ? images.length - 1 : imgCount - 1
    setImgCount(newCount) 
    setCurrentSlide(images[newCount])
  }


  return (
    <>
      <div className="bg-slate-400 w-svw h-svh flex justify-center items-center">
          <div className=" h-4/6 w-6/12 relative p-5 flex justify-center items-center">
            <img className=' h-full rounded-md' src={currentSlide} alt="" />

            <button onClick={prevImg} className=' absolute left-0 top-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>{'<'}</button>

            <button onClick={nextImg} className=' absolute right-0 top-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>{'>'}</button>
          </div>
      </div>
    </>
  )
}

export default App
