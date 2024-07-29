import './App.css'
import Header from './components/Header/Header'
import InputWithText from './components/InputWithText/InputWithText'
import LoginForm from './components/LoginForm/LoginForm'

function App() {

  return (
    <>
    <Header hideMenu={false} name='teste'/>
    <InputWithText/>
    <LoginForm/>
    </>
  )
}

export default App
