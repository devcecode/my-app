import React, { useEffect, useRef } from 'react'

function App() {

  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        console.log(`Cargar más datos`)
      }
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])


  return (
    <div ref={ref}></div>
  )
}

export default App
