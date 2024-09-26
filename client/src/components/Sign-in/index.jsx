'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import './sign-in-form.css';
import '../../font/kanit.css';
// import MyButton from "./ui/Button";
// import eye from './icons/eye.png'
// import { AiFillEye } from "react-icons/ai";


export function SignIn() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <Button className='mr-1' onClick={() => setOpenModal(true)}>Sign In</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <div >
        {/* className="primary-purple kanit-regular" */}
          <Modal.Header style={{backgroundColor: '#1c0038', borderTopLeftRadius: 8, borderTopRightRadius: 8}}/>

          <Modal.Body style={{backgroundColor: '#1c0038', borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
            <div>
              <h3 className="text-main kanit-bold">Sign in</h3>
              <div>
                <div className="label">
                  <Label htmlFor="email" value="Your email" className="text-white " />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  style={{ backgroundColor: '#0000', borderRadius: 50, padding: 'offset', color: 'white' }}
                  required
                />
              </div>

              <div>
                <div className="label text-white">
                  <Label htmlFor="password" value="Your password" className="text-white "></Label>
                </div>
                <TextInput className="primary-purple text-white" id="password" type="password" placeholder="Input your password"
                  style={{ backgroundColor: '#0000', borderRadius: 50, padding: 'offset', color: 'white' }} required >
                </TextInput>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-white">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-gray-500 underline dark:text-cyan-500">
                  Lost Password?
                </a>
              </div>

              <div className="h-20 w-full flex justify-center mt-10">
                <Button size='lg' style={{backgroundColor: '#ebae12'}} className="text-white bg-transparent rounded-full text-sm w-150 h-8 inline-flex justify-center items-center " >
                  SIGN IN
                </Button>

              </div>

              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Don't have an account?&nbsp;
                <a href="#" className="text-gray-500 underline dark:text-cyan-500">
                  Click here
                </a>

              </div>

            </div>
          </Modal.Body>
        </div>
      </Modal>

    </>
  );
}
export default SignIn;
