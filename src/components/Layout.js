import {Link,NavLink,Outlet} from 'react-router-dom'
function Layout () {
  return (
    <>
     
          <div>
            <NavLink to="/" style={{margin:60, fontSize:40}}>Home</NavLink>
            <NavLink to="/about" style={{margin:60,fontSize:40}}>About</NavLink>
            <NavLink to="/products" style={{margin:60,fontSize:40}}>Products</NavLink>
            </div>
    </>
  )
};

export default Layout;