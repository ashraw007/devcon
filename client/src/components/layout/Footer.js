import React from 'react'

export default () => {
  return (
  <footer className="bg-dark text-white mt-5 p-4" style={{ display: 'flex',justifyContent: 'space-evenly'}}>
      <h6>Copyright &copy; {new Date().getFullYear()} DevCon</h6> 
      <h6>Developed By Dev Squad</h6>
  </footer>
  )
}
