import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const CustomizedTypography = styled(Typography)`
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: calc(1em + theme.spacing(4)), transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
  ;`;
  return (
    <AppBar position="static">
      <CustomizedTypography>
        <Toolbar className="toolbar">
          <Typography variant="h5" className="title">
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className="title">
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
            <div className="search">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search ..."
                inputProps={{
                  root: { className: "inputRoot" },
                  input: { className: "inputInput" },
                }}
              />
            </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </CustomizedTypography>
    </AppBar>
  );
};

export default Header;
