import React from 'react'
import { useNavigation } from 'react-router-dom'

function SubmitBtn({text}) {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

  return (
    <button type='submit' className='btn btn-primary'>{
        isSubmitting ? <>
            <span className='loading loading-spinner'></span>
        </>: text || 'Submit'  
    }</button>
  )
}

export default SubmitBtn