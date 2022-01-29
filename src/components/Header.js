import {useState} from "react";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import '../styles.scss'
import { Link } from "react-router-dom";
import { sizing } from '@mui/system';




const Header = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      console.log('this works')
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="nav">
      <img src="/logo.png" alt="logo" />
        <Button sx={{  color: 'white' }} 
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon className='menuIcon'/>
      </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link className='links' to='/'>
             Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className='links' to='/About'>
             About Us
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className='links' to='/Contact'>
             Contact
          </Link>
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default Header;