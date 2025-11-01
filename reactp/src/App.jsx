import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Calc from './calc'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Calc/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App