import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="container">
      <div className="sidebar">
        <nav>
            <ul>
            <li>
                <Link to="/tic-tac-toe">Tic Tac Toe</Link>
              </li>
              <li>
                <Link to="/">Todo</Link>
              </li>
              <li>
                <Link to="/personal-finance">Personal Finance</Link>
              </li>
              
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/chat-app">Chat app</Link>
              </li>
            </ul>
          </nav>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
      
    </>
  )
};

export default Layout;