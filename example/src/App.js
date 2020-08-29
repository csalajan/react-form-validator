import React from 'react'

import '@teragon/react-form-validator/dist/index.css'
import { useValidatedState } from "@teragon/react-form-validator";

const App = () => {
  const [name, nameErrors, setName ] = useValidatedState("", "string|required");
  const [email, emailErrors, setEmail ] = useValidatedState("", "email|required");

  return (
    <div>
      <div>
        <label>Name</label>
        <input value={name} onChange={event => setName(event.target.value)} />
        {nameErrors.length > 0 &&
          nameErrors.map((error, index) => (
            <p key={index}>{error}</p>
          ))
        }
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={event => setEmail(event.target.value)} />
        {emailErrors.length > 0 &&
        emailErrors.map((error, index) => (
          <p key={index}>{error}</p>
        ))
        }
      </div>
    </div>
  )
}

export default App
