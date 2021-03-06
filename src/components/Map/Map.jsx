import React from 'react';
import  GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    const classes = useStyles(); // Calling our stylesheet as a hook.
    const isMobile = useMediaQuery('(min-width: 600px)'); // will be false if device width > 600px

    const coordinates = { lat: 0, lng: 0};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAkwgI-ivpMUDCVdfjA5MGL-uMTczpBi4w' }}
                defaultCenter={coordinates} // center of our Map
                center={coordinates} // the real center of our map
                defaultZoom={14}
                margin={[50, 50, 50, 50, 50]} // top, right, bottom, left
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map