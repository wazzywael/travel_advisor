import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, styled } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material";
import Rating from "@mui/lab";

const Map = () => {
  const CustomizedTypography = styled(Typography)`
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '100%',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
  `;
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <CustomizedTypography>
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD4McmYUyGsCNQ8D-TW7Mrs-MO_A6pB4w8" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </CustomizedTypography>
  );
};

export default Map;
