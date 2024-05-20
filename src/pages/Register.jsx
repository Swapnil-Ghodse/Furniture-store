import React from 'react';
import {Form, Link} from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

function Register() {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4' >
        <h4 className='text-4xl capitalize font-semibold text-center'>REGISTER</h4>
      
        <FormInput label={'username'} type={'email'} name={'username'} defaultValue={'test@test.com'}></FormInput>

        <FormInput label={'email'} type={'email'} name={'email'} defaultValue={'test@test.com'}></FormInput>
        <FormInput label={'Password'} type={'password'} name={'identifier'} defaultValue={'test@test.com'}></FormInput>

        <div className='mt-4 flex'>
          <SubmitBtn text={'Register'} className='btn btn-primary'></SubmitBtn>
        </div>
        <p className='text-center'>Already have account <Link to={'/login'} className='link link-primary link-hover capitalize'>login</Link></p>
      </Form>
    </section>
  )
}

export default Register