import React from 'react'



const NewRobot = ({robot, imgSrc}) => {
  
  return (  

    <div className='robot-card'>
      <img src={imgSrc} style={{width: '80%', height : '60%', margin: '0 auto', padding : '0', borderRadius : '50%'}} alt="robot" />
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
    </div>
  )
}

export default NewRobot
