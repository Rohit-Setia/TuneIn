import {React,useState} from 'react'

export default function Setting_Pg() {
  const [enable, setEnabled] = useState(false);

  return (
    
    <div className='h-[screen] w-screen bg-transparent flex justify-center items-center flex-col gap-9 '>
        <div className='h-28 w-[1290px]  bg-transparent text-white text-4xl font-bold'> Setting <br /><br /> <p className='text-[28px]'>Account</p></div>
        
        
        <div className='h-28 w-[1290px]  bg-transparent flex relative '>
      
        <div className='h-28 w-28  bg-transparent flex justify-center p-4 flex-col gap-4' >
              <div className='h-28 w-27 bg-white'>
                
              </div>
          </div>

          <div  className='h-[58px] w-[728px] bg-transparent absolute top-5 left-28 z-10 text-white text-3xl font-bold '>
              Connect to Music Services
               <p className='text-[20px]'>Connect your account to enjoy personalized music recommendations.</p>

           
          </div>

           <button className='h-[35px] w-[120px] bg-black text-white absolute flex text-xl font-bold top-9 rounded-[15px] flex justify-center items-center right-0'>Connect</button>
        </div>


   <p className='text-white h-12 w-[1290px]  bg-transparent text-3xl font-bold'>Notifications</p>


         <div className='h-28 w-[1290px]  bg-transparent flex relative'>


                    <div className='h-28 w-28  bg-transparentflex justify-center p-4 flex-col gap-4' >
                              <div className='h-28 w-27 bg-white'>
                                
                              </div>
                      </div>

          <div  className='h-[58px] w-[728px]  bg-transparent absolute top-5 left-28 z-10 text-white text-3xl font-bold '>
            Push Notifications
            <p className='text-[20px]'>Enable push notifications to receive updates and recommendations.</p>

           
          </div>

<div className="flex absolute top-10 right-8">
      <button
        onClick={() => setEnabled(!enable)}
        className={`w-12 h-6 rounded-full relative transition-colors duration-400 ${
          enable ? ' bg-green-500' : 'bg-white'
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-500 ${
            enable ? 'right-0.5 bg-white' : 'left-0.5 bg-[#1e140d]'
          }`}
        ></span>
      </button>
    </div>
    


         </div>




   <p className='text-white h-12 w-[1290px] bg-transparenttext-3xl font-bold'>App Information</p>

<div className="space-y-14 w-[1290px]  bg-transparent text-2xl text-white">
  <div className="flex justify-between">
    <span>Version</span>
    <span>1.0.0</span>
  </div>
  <div className="flex justify-between">
    <span>Privacy Policy</span>
    <span>→</span>
  </div>
  <div className="flex justify-between">
    <span>Terms of Service</span>
    <span>→</span>
  </div>
  <div className="flex justify-between">
    <span>Contact Us</span>
    <span>→</span>
  </div>
</div>

    </div>
  )
}
