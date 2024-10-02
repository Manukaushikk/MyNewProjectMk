import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignInPage/SignIn'
import Signup from './pages/SignuPage/Signup'
import ForgotPassword from './pages/ForgotPasswordPage/ForgotPassword'
import RecoverPassword from './pages/RecoverPass/RecoverPassword'
import DataTable from './pages/Tables/DataTables'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/recoverpassword' element={<RecoverPassword />} />
        <Route path='/dtble' element={<DataTable />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
