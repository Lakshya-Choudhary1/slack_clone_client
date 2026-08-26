import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const App = () => {
  return (
    <>
      <header style={{backgroundColor:"red"}}>
        <Show when="signed-out" >
          <SignInButton mode="modal" />
          <SignUpButton mode="modal"/>
        </Show>
        <Show when="signed-in">
          <UserButton userProfileMode="modal"/>
        </Show>
      </header>
    </>
  )
}

export default App;