import { ErrorMessage } from 'formik'
import React from 'react'

const ErrorPage = ({name}) => {
  return (
    <div className='text-red-500'>
        <ErrorMessage name={name}/>
    </div>
  )
}

export default ErrorPage