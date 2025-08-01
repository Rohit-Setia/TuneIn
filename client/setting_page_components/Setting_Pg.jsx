import {React,useState} from 'react'

export default function Setting_Pg() {
  const [enable, setEnabled] = useState(false);

  return (
    
    <div className='h-[screen] w-screen bg-transparent flex justify-center items-center flex-col gap-9 '>
        <div className='h-28 w-[1290px]  bg-transparent text-white text-4xl font-bold'> Settings <br /><br /> <p className='text-[28px]'>Account</p></div>
        
        
        <div className='h-28 w-[1290px]  bg-transparent flex relative '>
        
        <div className='h-28 w-28  bg-transparent flex justify-center p-4 flex-col gap-4' >
              <div className="text-white flex items-center justify-center rounded-lg bg-[#493222] shrink-0 size-12" data-icon="MusicNote" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z"
                    ></path>
                  </svg>
                </div>
          </div>

          <div  className='h-[58px] w-[728px] bg-transparent absolute top-5 left-28 z-10 text-white text-3xl font-bold '>
              Connect to Music Services
               <p className='text-[20px]'>Connect your account to enjoy personalized music recommendations.</p>

           
          </div>

           <button className='h-[35px] w-[120px] bg-[#493222] text-white absolute flex text-xl font-bold top-9 rounded-[15px] flex justify-center items-center right-0'>Connect</button>
        </div>


   <p className='text-white h-12 w-[1290px]  bg-transparent text-3xl font-bold'>Notifications</p>


         <div className='h-28 w-[1290px]  bg-transparent flex relative'>


                    <div className='h-28 w-28  bg-transparentflex justify-center p-4 flex-col gap-4' >
                              <div className="text-white flex items-center justify-center rounded-lg bg-[#493222] shrink-0 size-12" data-icon="Bell" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                    ></path>
                  </svg>
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
          enable ? ' bg-orange-500' : 'bg-white'
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
