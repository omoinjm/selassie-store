import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const windowHeight = window.innerHeight;

const classes = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        height: `calc(${windowHeight}px / 1.5)`,

        '@media screen and (max-width: 991px)' : {
            height: `calc(${windowHeight}px / 1.4)`
        }
    }
}));

const NotFoundError = () => {
  return (
    <div className={classes.root}>
        <h1 className="display-4">404 Page Not Found</h1>
        <p className="lead">The page you requested does not exist.</p>
        <a href="/">Go back to Homepage</a>
    </div>
  )
}

export default NotFoundError