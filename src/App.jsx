import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [PositionX, setPositionX] = useState()
  let [PositionY, setPositionY] = useState()
  let [BoxX, setBoxX] = useState(0)
  let [BoxY, setBoxY] = useState(0)

  let move = (e) => {
    let x = e.clientX;
    let y = e.clientY;


    console.log("we are there", (Math.hypot((x - BoxX), (y - BoxY))));
    if ((Math.hypot((x - BoxX), (y - BoxY))) < 130) {

      let newBoxX = Math.floor(Math.random() * (693 + 1) + 261);
      let newBoxY = Math.floor(Math.random() * (370 + 1) + 80);

      setBoxX(newBoxX);
      setBoxY(newBoxY);

      setPositionX(newBoxX);
      setPositionY(newBoxY);

      console.log(BoxX, BoxY);


    }



  }

  return (
    <>


      <div onMouseMove={(t) => move(t)} className=' bg-[#db4367] flex justify-center items-center flex-col  w-full h-screen'>

        <h1 className="text-4xl md:text-5xl   font-bold text-white mb-10 text-center drop-shadow-lg">
          💖 Will You Be My Valentine? 💖
        </h1>
          <button className="px-8 py-3 bg-white text-rose-500 font-semibold text-lg rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
    Yes 💘
  </button>


        <div className='bg-rose-600 text-white flex items-center justify-center w-[100px] h-[100px] rounded-full shadow-xl font-semibold cursor-pointer' style={{ position: "absolute", transition: "top 0.75s ease, left 0.75s ease", top: `${PositionY}px`, left: `${PositionX}px` }}>
          No 😅

        </div>

      </div>

    </>
  )
}

export default App
