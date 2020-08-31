import React from 'react'
import Input from "./Input/Input";

import styles from './App.module.css';

const App = () => {

  return (
    <div className={styles.container}>
      <Input validators="alpha" initialValue="" fieldName="Alpha" />
      <Input validators="alpha" initialValue="" fieldName="Alpha" />
      <Input validators="alpha" initialValue="" fieldName="Alpha" />
      <Input validators="alpha" initialValue="" fieldName="Alpha" />
      <Input validators="alpha" initialValue="" fieldName="Alpha" />
    </div>
  )
}

export default App
