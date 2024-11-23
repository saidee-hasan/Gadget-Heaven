import React from 'react'
import Chart from './Chart'

function Statistics() {
    document.title="Statistics | Gadget Heaven"
  return (
    <div className='mt-5'>
        <div className="text-center bg-purple-700 text-white p-5">
            <h1 className='text-4xl'>Statistics</h1>
            <br />
            <p>Explore the latest gadgets that will take your experience to the next level.  <br /> From smart devices to the coolest accessories, we have it all!</p>


        </div>

      <Chart/>
    </div>
  )
}

export default Statistics
