import React from 'react'
import RulesButton from '../../components/RulesButton'
import Game from '../../components/Game'

export default function GamePage() {
  const [mode, setMode] = React.useState("")
  return (
    <div className={`${mode ? "min-h-[100dvh]" : "items-center justify-center"} flex flex-col relative`}>
      {
        !mode ? (
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white mb-4">
              A game built with Vite, React, TypeScript, and Tailwind CSS
            </h1>
            <p className="text-lg text-white">
              Choose your mode!
            </p>

            <div className='text-gray-500 flex flex-row mt-6 gap-3'>
              <button onClick={() => setMode("original")} className='hover:text-gray-800 bg-white py-3 px-5'>Original Mode</button>
              <button onClick={() => setMode("bonus")} className='hover:text-gray-800 bg-white py-3 px-5'>Bonus Mode</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 my-[6rem]">
            <Game mode={mode}/>
            <div className="absolute bottom-8 right-8 text-gray-500 flex flex-row mt-6 gap-3">
              <RulesButton mode={mode} setMode={setMode} />
            </div>
          </div>
        )
      }
    </div>
  )
}
