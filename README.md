# @teragon/react-form-validator

> Form Validation library

[![NPM](https://img.shields.io/npm/v/@teragon/react-form-validator.svg)](https://www.npmjs.com/package/@teragon/react-form-validator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![Node.js Package](https://github.com/csalajan/react-form-validator/workflows/Node.js%20Package/badge.svg)

## Install

### NPM
```bash
npm install --save @teragon/react-form-validator
```

### Yarn
```bash
yarn add @teragon/react-form-validator
```

## Usage

```jsx
import React, { Component } from 'react'

import { useValidatedState } from '@teragon/react-form-validator'

const NewUserForm = () => {
    const [ username, usernameErrors, setUsername ] = useValidatedState("", "string|required");

    return (
        <div>
            <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
            { usernameErrors.length > 0 &&
                usernameErrors.map((error, index) => <p key={index}>{error}</p>)
            }
        </div>
    )
}
```

## License

MIT © [Craig Salajan](https://github.com/csalajan)
