import { useState } from 'react'
import Header from './component/header/Header'
import Shop from './component/shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Header></Header> */}
      <Shop></Shop>
    </div>
  )
}

export default App
