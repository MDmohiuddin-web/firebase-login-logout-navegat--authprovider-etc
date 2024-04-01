import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Provaider/Authprovaider";
import { toast } from "react-toastify";

const Navigations = () => {
  const { user,logout } = useContext(AuthContext);
  const out=()=>{
    toast.success('sing out successfully')
    logout()
    .then(()=>{console.log('log out successfully')})
    .catch(error=>{
      console.error(error);
    } )

  }

  // import { NavLink ,Link} from "react-router-dom";
  const links = (
    <>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
      <li>
        <NavLink to="/register">register</NavLink>
      </li>
      <li><NavLink to='/order'> order</NavLink></li>
      { user &&
        <> <li><NavLink to='/profile'> profile</NavLink></li> </>
      }
    </>
  );
  return (
    <div className="md:w-4/5 m-auto my-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            firebase{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          {/* <Link to='/login' className="btn btn-primary">log in</Link>
            <Link to='/register' className="btn btn-primary">register </Link> */}
          {
          user ? <>
            <span>{user.email}</span>
            
            <Link to="/" className="btn btn-warning" onClick={out}>
            sin out
          </Link>
            </> :<> <Link to='/login' className="btn btn-primary">log in</Link>
            <Link to='/register' className="btn btn-primary">register </Link></>
            
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navigations;
