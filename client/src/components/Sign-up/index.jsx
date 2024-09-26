'use client';

import { Button,  Label, Modal, TextInput, Dropdown } from 'flowbite-react';
import { useState } from 'react';
import './sign-up-form.css';
import '../../font/kanit.css';


export function SignUp() {
  const [openModal, setOpenModal] = useState(false);
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [uName, setuName] = useState('');


  function onCloseModal() {
    setOpenModal(false);
    setfName('');
  }

  return (
    <>
      <Button className='ml-1' onClick={() => setOpenModal(true)}>Sign Up</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <div >
          {/* className="primary-purple kanit-regular" */}
          <Modal.Header style={{ backgroundColor: '#1c0038', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />

          <Modal.Body style={{ backgroundColor: '#1c0038', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
            <div>
              <h3 className="text-main kanit-bold">Sign up</h3>
              <div>
                <div className="label">
                  <Label htmlFor="text" value="First name" className="text-white " />
                </div>
                <TextInput
                  id="text"
                  placeholder="e.g. John"
                  value={fName}
                  onChange={(event) => setfName(event.target.value)}
                  style={{ backgroundColor: '#0000', borderRadius: 50, padding: 'offset', color: 'white' }}
                  required
                />
              </div>
              <div>
                <div className="label">
                  <Label htmlFor="text" value="Last name" className="text-white " />
                </div>
                <TextInput
                  id="text"
                  placeholder="e.g. Doe"
                  value={lName}
                  onChange={(event) => setlName(event.target.value)}
                  style={{ backgroundColor: '#0000', borderRadius: 50, padding: 'offset', color: 'white' }}
                  required
                />
              </div>
              <div>
                <div className="label">
                  <Label htmlFor="text" value="Username" className="text-white" />
                </div>
                <TextInput
                  id="text"
                  placeholder="username"
                  value={uName}
                  onChange={(event) => setuName(event.target.value)}
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

              <div>
                <div className="label text-white">
                  <Label htmlFor="password" value="Confirm password" className="text-white "></Label>
                </div>
                <TextInput className="primary-purple text-white" id="password" type="password" placeholder="Confirm password"
                  style={{ backgroundColor: '#0000', borderRadius: 50, padding: 'offset', color: 'white' }} required >
                </TextInput>
              </div>

              <div style={{ marginTop: 10, width:'min-content',padding:6, borderRadius: 50, color: 'white', fontSize: 13, border: 1, borderStyle:'solid'}}>
                <Dropdown label="SEX" inline >
                  <Dropdown.Item >Male</Dropdown.Item>
                  <Dropdown.Item>Female</Dropdown.Item>
                </Dropdown>
              </div>
              
              <div className="h-20 w-full flex justify-center mt-10">
                <Button size='lg' style={{backgroundColor: '#ebae12'}} className="btn:hover ctext-white bg-transparent rounded-full text-sm w-150 h-8 inline-flex justify-center items-center " >
                  SIGN UP
                </Button>
              </div>

              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?&nbsp;
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
export default SignUp;
