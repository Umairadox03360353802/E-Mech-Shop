import React, { useState } from 'react'
import { Button, Label, Modal, TextInput } from "flowbite-react";
import toast from 'react-hot-toast';



function ModalSection() {

  const [openModal, setOpenModal] = useState(false);
  const [OrderDeatils, setOrderDeatils] = useState({fullname:'',address:'',pincode:'',mobileNumber:''});

  const handleChange=(e)=>{
    setOrderDeatils({ ...OrderDeatils, [e.target.name]: e.target.value })
    console.log(OrderDeatils)

  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if (OrderDeatils.fullname || OrderDeatils.address || OrderDeatils.pincode || OrderDeatils.mobileNumber ) {
      onCloseModal()
      toast.success(' Order is successfull! ')
    }else{
      toast.error(' All fields are required! ')
    }
  }

  function onCloseModal() {
    setOpenModal(false);
    setOrderDeatils('');
  }

  return (
    <>
      <Button className="text-sm px-4 py-0.6 w-full font-semibold tracking-wide bg-[#2b6777] hover:bg-gray-900 text-white rounded-md" onClick={() => setOpenModal(true)}>Checkout</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label  value="Your Full Name" />
              </div>
              <TextInput
              autoComplete='off'
              name='fullname'
                value={OrderDeatils.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label  value="Enter Full Address" />
              </div>
              <TextInput
              autoComplete='off'
              name='address'
                value={OrderDeatils.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label  value="Your Pincode" />
              </div>
              <TextInput
              autoComplete='off'
              name='pincode'
                value={OrderDeatils.pincode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label  value="Your Mobile Number" />
              </div>
              <TextInput
              autoComplete='off'
              name='mobileNumber'
                value={OrderDeatils.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
           
            <div className="w-full">
              <Button className='w-full' onClick={handleSubmit}>Order Now</Button>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalSection