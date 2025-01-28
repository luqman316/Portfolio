// import React from 'react'

import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <>
    <div className="border-t border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">{CONTACT.email}</a>
        </div>
    </div>
    </>
  )
}

export default Contact
