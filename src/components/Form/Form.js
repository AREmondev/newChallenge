import React, { useState } from 'react'

function Form({ user, setUser }) {
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  let usrMail = []
  for (const usr of user) {
    usrMail.push(usr.email)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const validEmail = validateEmail(email)
    const oldUser = usrMail.includes(email)
    console.log(usrMail)
    if (name !== '' && name !== undefined && validEmail) {
      if (!oldUser) {
        const newUser = { name, email }
        setUser([...user, newUser])
        setName('')
        setEmail('')
      } else {
        alert('User Already Exist')
      }
    } else {
      alert('Input field not valid or fill')
    }
  }
  return (
    <>
      <div className="input-area">
        <div className="container">
          <div className="center">
            <form id="add-form" onSubmit={(e) => submitHandler(e)}>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                name=""
                value={name}
                id="name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                name=""
                value={email}
                id="email"
              />
              <button id="submit-btn">Add </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
