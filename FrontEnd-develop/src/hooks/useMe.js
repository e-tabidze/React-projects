import { useState } from 'react'

function useMe() {
  //const [isAuthorized,  ] = useState(false)

  const [isAuthorized] = useState(true)

  return {
    //me: { role: 'admin' },
   // me: { role: 'admin' },
  }
}

export default useMe
