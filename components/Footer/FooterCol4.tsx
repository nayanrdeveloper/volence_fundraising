import React from 'react'
import { GoLocation,  } from "react-icons/go";
import {GiRotaryPhone} from "react-icons/gi"
import {HiOutlineMail} from "react-icons/hi"


function FooterCol4() {
  return (
    <div className="p-3 md:p-0">
        <h5 className="font-semibold text-global-primary dark:(text-white)">Contact Information</h5>
        <div className='mt-5 flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
                <GoLocation className='text-global-green text-2xl dark:(text-global-yellow)' />
                <span className='text-light-grey dark:(text-white)'>Rajkot, Gujarat, India.</span>
            </div>
            <div className='flex gap-2 items-center'>
                <GiRotaryPhone className='text-global-green text-2xl dark:(text-global-yellow)' />
                <span className='text-light-grey dark:(text-white)'>+91 76567 45321</span>
            </div>
            <div className='flex gap-2 items-center'>
                <HiOutlineMail className='text-global-green text-2xl dark:(text-global-yellow)' />
                <span className='text-light-grey dark:(text-white)'>nayanrdeveloper@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export default FooterCol4