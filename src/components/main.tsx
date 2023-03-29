import React, { useEffect, useRef, useState } from 'react'
import type Main3D from '~/classes/Main3D'
import {Loading} from './'

function Main_({main} : {main: Main3D}) {
  const [Loading_, setLoading] = useState<boolean>(true)
  const load = useRef(true)

  useEffect(() => {
    if(!load.current) return
    load.current = false
    main.World?._resources.on("loaded", () => setLoading(false))
  })


  return (
    <div className="test z-50 w-full h-[200rem] absolute pointer-events-none flex items-center">
      <div className="w-32 h-32 bg-red-500 testt">300</div>

      {Loading_ && <Loading/>}
    </div>
  )
}

export default Main_