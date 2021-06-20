import { useState } from 'react'
import Form from './components/Form/Form'
import UserTable from './components/UserTable/UserTable'
function App() {
  const [user, setUser] = useState([])

  return (
    <>
      <Form user={user} setUser={setUser} />
      <UserTable user={user} setUser={setUser} />
    </>
  )
}

export default App
