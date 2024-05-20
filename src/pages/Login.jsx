import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

function Login() {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-semibold'>LOGIN</h4> 
        <FormInput label={"Email"} type={'email'} name={'identifier'} defaultValue={'test@test.com'}></FormInput>
        <FormInput label={"Password"} type={'password'} name={'password'} defaultValue={'secret'}></FormInput>

      <div className='mt-4 flex flex-col gap-y-2'>
        <SubmitBtn text={'Login'}/>
        <button className='btn btn-info'>Guest user</button>
        <p className=' text-center'>Not a member yet?<Link to={'/register'} className=' ml-2 link link-hover link-primary capitalize'>register</Link></p>
      </div>
        
      </Form>
    </section>
  )
}

export default Login