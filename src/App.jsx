// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
// import Signup from "./pages/Signup.jsx"
// import Login from './pages/Login.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import BuyerForm from './pages/BuyerForm.jsx';
// import useAuth from './hooks/useAuth';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


// const App = () => {
//   const { loading, logoutUser } = useAuth();


//   if (loading) {
//     return <div>Loading...</div>; // Optional: Add a spinner if needed
//   }

//   // const isAuthenticated = document.cookie.includes('filmmaker_access_token'); // Replace with your actual cookie name
//   const isAuthenticated = document.cookie.includes('filmbuyer_access_token'); // Replace with your actual cookie name

// const [state, setState] = useState({
//   top: false,
//   left: false,
//   bottom: false,
//   right: false, 
// });

// const toggleDrawer = (anchor, open) => (event) => {
//   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//     return;
//   }
//   setState({ ...state, [anchor]: open });
// };

// const list = (anchor) => (
//   <Box
//     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//     role="presentation"
//     onClick={toggleDrawer(anchor, false)}
//     onKeyDown={toggleDrawer(anchor, false)}
//   >
//     <List>
//       {['Project List'].map((text, index) => (
//         <ListItem key={text} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//     <Divider />
//     <List>
//       {['All mail', 'Trash', 'Spam'].map((text, index) => (
//         <ListItem key={text} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//   </Box>
// );

//   return (

//     <>


//       <Router>
//         <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f5f5f5' }}>
//           <h1 style={{ textAlign: 'center', flex: 1 }}>LOGIN TO YOUR ONLINE FILMBAZAAR ACCOUNT</h1>
//           <div style={{ display: 'flex', gap: '1rem' }}>
//             <Link to="/buyer" style={{ marginRight: '1rem' }}>Buyer</Link>
//             {isAuthenticated ? (
//               <>
//                 <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
//                 <button onClick={logoutUser} style={{ padding: '0.5rem 1rem' }}>Logout</button>
//               </>
//             ) : (
//               <>
//                 <Link to="/signup" style={{ marginRight: '1rem' }}>Sign Up</Link>
//                 <Link to="/login">Login</Link>
//               </>
//             )}

//              <Link onClick={toggleDrawer('right', true)} >
//              <FormatListBulletedIcon/>
//              </Link>



//           </div>

//         </nav>

//         <Routes>
//           <Route path="/" element={<Navigate to="/signup" replace />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
//           <Route path="/buyer" element={<BuyerForm />} />
//           <Route path="*" element={<Navigate to="/signup" replace />} />
//         </Routes>
//       </Router>


//       <div>
//         {['right'].map((anchor) => (
//           <React.Fragment key={anchor}>
//             {/* <Button onClick={toggleDrawer(anchor, true)} sx={{ position: 'fixed', top: 16, right: 50 }}>{anchor}</Button> */}
//             <Drawer
//               anchor={anchor}
//               open={state[anchor]}
//               onClose={toggleDrawer(anchor, false)}
//             >
//               {list(anchor)}
//             </Drawer>
//           </React.Fragment>
//         ))}
//       </div>



//     </>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
// import SellerForm from './pages/SellerForm.jsx';
import BuyerForm from './pages/BuyerForm.jsx';
import useAuth from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BuyerFormDetails from './pages/BuyerFormDetails.jsx';
import ProjectList from './pages/ProjectList.jsx';

const App = () => {
  const { loading, logoutUser } = useAuth();
  const dispatch = useDispatch();

  

  if (loading) {
    return <div>Loading...</div>; // Optional: Add a spinner if needed
  }

  // const isAuthenticated = document.cookie.includes('filmmaker_access_token'); // Replace with your actual cookie name
  const isAuthenticated = document.cookie.includes('filmbuyer_access_token'); // Replace with your actual cookie name


  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Project List'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleLogout = async () => {
    await dispatch(logoutUser());
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <h1 style={{ textAlign: 'center', flex: 1 }}>LOGIN TO YOUR ONLINE FILMBAZAAR ACCOUNT</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* <Link to="/buyer" style={{ marginRight: '1rem' }}>Buyer</Link> */}
          <Link to="/buyerdetails" style={{ marginRight: '1rem' }}>Buyer</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
              <button onClick={handleLogout} style={{ padding: '0.5rem 1rem' }}>Logout</button>
              <Link onClick={toggleDrawer('right', true)} >
                <FormatListBulletedIcon />
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" style={{ marginRight: '1rem' }}>Sign Up</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
        {/* <Route path="/buyer" element={<BuyerForm />} /> */}
        <Route path="/buyerdetails" element={<BuyerFormDetails/>} />
        <Route path="/list" element={<ProjectList/>} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>

      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)} sx={{ position: 'fixed', top: 16, right: 50 }}>{anchor}</Button> */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default App;
