import React from 'react';
import MoodInput from '../mood/MoodInput';

// import UploadSection from '../mood/UploadSection';
import SubmitButton from '../mood/SubmitButton';
// import './Mood.css'

export default function Mood() {
  return (
   
    <section className='text-white text-3xl flex flex-col justify-center items-center gap-6'  >
      <h2 className="">How are you feeling today?</h2>
      <MoodInput /> 
    
      
      
      <SubmitButton />
      
    </section>
   
  )
}
