import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import { Button } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import {Link as RouterLink} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#400CCC",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    drawerContainer: {
        padding: "20px 30px",
      },
      menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
}))


export default function Header() {
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false
    });
  
    const { mobileView, drawerOpen } = state;
    const classes = useStyles()
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      }
    }, []);
    const headersData = [
        {
          label: "Home",
          href: "/listings",
        },
        {
          label: "Booking",
          href: "/mentors",
        },
        {
          label: "Sales",
          href: "/account",
        },
        {
          label: "About Us",
          href: "/logout",
        },
      ];

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      };

      const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: classes.menuButton

              }}
            >
              {label}
            </Button>
          );
        });
      };

      const displayDesktop = () => {
        return (
          <Toolbar className={classes.toolbar}>
            {'Heloos'}
            {getMenuButtons()}
          </Toolbar>
        );
      };

    const displayMobile = () => {
            const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
            const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
    <div>{'Ark Booking'}</div>
    </Toolbar>
        );
      };

    return(
        <header>
        <AppBar className={classes.header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    )

}