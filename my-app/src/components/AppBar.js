import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Logo from '../images/logo_practica.png';
import {useStyles} from '../styles/AppBar.js';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';



 const Appbar = () =>  {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={Logo} alt='logo_Practica.pe' className={classes.logo}/>
          <Typography variant="h6" className={classes.title}>
            Practica.pe
          </Typography>
          <Button className={classes.btnAppBar}>soy creador</Button>
          <Button className={classes.btnAppBar}>soy empresa</Button>
          <Button className={`${classes.btnAppBar} ${classes.btnSoyAsesor}`}>soy asesor</Button>
            <div className={classes.MenuOpen}>
                <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                >
                <MenuOpenIcon className={classes.MenuOpenIcon}/>
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.Popper}>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            <MenuItem onClick={handleClose} className={classes.btnMenu}>soy creador</MenuItem><hr/>
                            <MenuItem onClick={handleClose} className={classes.btnMenu}>soy empresa</MenuItem><hr/>
                            <MenuItem onClick={handleClose} className={`${classes.btnMenu} ${classes.btnSoyAsesorMenu}`}>soy asesor</MenuItem>
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </div>

        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}

export default Appbar