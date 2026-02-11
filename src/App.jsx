import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [PositionX, setPositionX] = useState()
  let [Sayno,setSayno]=useState("no")
  let [PositionY, setPositionY] = useState()
  let [BoxX, setBoxX] = useState(600)
  let [BoxY, setBoxY] = useState(350)

  let move = (e) => {
    let x = e.clientX;
    let y = e.clientY;


    console.log("we are there", x,y);
    if ((Math.hypot((x - BoxX), (y - BoxY))) < 130) {
      setSayno(" No 😅")

      let newBoxX = Math.floor(Math.random() * (988 + 1) + 140);
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

        <h1 className="text-4xl md:text-5xl pb-6  font-bold text-white mb-10 text-center drop-shadow-lg">
          💖 Will You Be My Valentine? 💖
        </h1>
          <button className="px-8 py-3 bg-white text-rose-500 font-semibold pt-3 text-lg rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
    Yes 💘
  </button>


        <div className='bg-rose-400 text-white flex   items-center px-8 py-3 font-bold justify-center  rounded-full shadow-xl font-semibold cursor-pointer' style={{ position: "absolute", transition: "top 0.75s ease, left 0.75s ease", top: `${PositionY}px`, left: `${PositionX}px` }}>
          {Sayno}

        </div>

      </div>

    </>
  )
}

export default App
