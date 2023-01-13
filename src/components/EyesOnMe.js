// Code EyesOnMe Component Here
import React from 'react'

function handleFocus(event){
    return console.log("Good!")
}
function handleBlur(){
    return console.log("Hey! Eyes on me!")
}
function EyesOnMe() {
  return (
    <>

      <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
    </>
  )
}

export default EyesOnMe
