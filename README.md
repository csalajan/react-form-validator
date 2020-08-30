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
import React from 'react'

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

## Validators

|Name | Description |
|-----|-------|
|accepted| Validate if the value is true |
| after | Validates if a date is after the passed in date |
| after_or_equal| Validates if a date is on or after the passed in date |
| alpha | Validates that the value is alpha only |
| alpha_space | Validates that the values is alpha with spaces only |
| alpha_num | Validates that the value is alpha numeric only |
| alpha_num_space | Validates that the value is alpha numeric with spaces only |
| alpha_num_dash | Validates that the value is alpha numeric with dashes only |
| alpha_num_dash_space | Validates that the value is alpha numeric with dashes or spaces |
| array | Validates that the value is an array |
| before | Validates that the value is a date before the passed in date |
| before_or_equal | Validates that the value is a date on or before the passed in date |
| between | Validates that the value is between two numbers |
| boolean | Validates that the value is a boolean |
| card_exp | Validates that the value is a credit card expiration date |
| card_num | Validates that the value is a credit card number |
| currency | Validates that the value is currency |
| date | Validates that the value is a date |
| date_equals | Validates that the value is a date that equals the passed in date |
| email | Validates that the value is an email address |
| in | Validates that the value exists in the list of values passed in |
| integer | Validates that the value is an integer |
| max | Validates that the value is smaller than the passed in value |
| min | Validates that the value is larger than the passed in value |
| not_in | Validates that the value is not in the list of passed in values |
| not_regex | Validates that the value does not match the passed in regex |
| numeric | Validates that the value is numeric |
| phone | Validates that the value is a phone number |
| regex | Validates that the value matches the passed in regex |
| required | Validates that the value is not blank |
| size | Validates that the value's size matches the passed in value |
| string | Validates that the value is a string |
| typeof | Validates that the value matches the passed in type |
| url | Validates that the value is a URL |


## License

MIT © [Craig Salajan](https://github.com/csalajan)
