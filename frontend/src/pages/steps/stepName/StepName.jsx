import React from 'react'

function StepName({onNext}) {
  return (
    <>
    <div> Name component</div>
      <button onClick={onNext}>Next</button>
    
    </>
  )
}

export default StepName