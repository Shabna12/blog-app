import React, { createContext, useState } from 'react'
export const updateResponseContext = createContext()

function ContextAPI({children}) {

    const [updateResponse, setUpdateResponse] = useState("")

  return (
    <>
      <updateResponseContext.Provider value={{updateResponse, setUpdateResponse}}>
         {children}
      </updateResponseContext.Provider>
    </>
  )
}

export default ContextAPI