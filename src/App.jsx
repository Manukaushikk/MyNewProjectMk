import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignInPage/SignIn'
import Signup from './pages/SignuPage/Signup'
import ForgotPassword from './pages/ForgotPasswordPage/ForgotPassword'
import RecoverPassword from './pages/RecoverPass/RecoverPassword'
import DataTable from './pages/Tables/DataTables'
import Dashboard from './pages/Dashboard/Dashboard'
import Dashboard2 from './pages/Dashboard/Dashboard2'
import Regulators from './pages/Dashboard/Regulators/Regulators'
import Other from './pages/Dashboard/Other/Other'
import OperatorsTab from './pages/Dashboard/Operators/OperatorsTab'
import Navbar from './pages/Navbar/Navbar'
import Slider from './pages/Slider/Slider'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Slider />
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/recoverpassword' element={<RecoverPassword />} />
        <Route path='/dtble' element={<DataTable />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/dashboard' element={<Dashboard2 />} />
        <Route path="/operators" element={<OperatorsTab />} />
        <Route path="/regulators" element={<Regulators />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
