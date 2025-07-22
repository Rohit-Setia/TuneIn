import React from 'react'
import './Setting.css'
import MusicService from './MusicService'
export default function Setting() {
  return (
    <div >
        <div className='MainBox'>

        <div className='Setting'>
                <div style={{fontSize:"30px",fontWeight:"600"}}> <h1>  Setting</h1>    
                </div> 
       </div>

       <div className='Setting' style={{marginTop:"0px"}}>
         <div >  <h1 style={{fontWeight:"600",fontSize:"20px"}} > Account</h1> </div>
         
       </div>
       
       <MusicService/>
       </div>
    </div>
  )
}
