import React,{useState} from 'react'
import Sidebar from '../shared/Sidebar'
import Header from '../shared/Header'

const Default = ({ children }) =>{
const [navIsOpen,setNavIsOpen] = useState(false)

const navtoggle = () =>{
  setNavIsOpen(!navIsOpen)
}


 return(
  <>
    <div className='container '>
      <Header navisopen={navIsOpen} navtoggle={navtoggle} />
    </div>
    <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row  '>
        <div className="w-full md:w-80 flex-shrink-0">
          <Sidebar navisopen={navIsOpen} navtoggle={navtoggle} />
          </div>
        <div className='w-full bg-navsquare-learn'>{children}</div>
      </div>
    </div>
  </>
)}

export default Default
