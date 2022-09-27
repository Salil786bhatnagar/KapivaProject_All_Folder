import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Orders from './Orders';
import Signup from './Signups';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h4 className='h4-text'><b>Dashboard</b></h4>
    <hr/><br/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
            <Paper id="p1" className={classes.paper}>Total Sale</Paper>
            </Grid>

            <Grid item xs={3}>
            <Paper id="p2" className={classes.paper}>Total Orders</Paper>
           </Grid>
             
           <Grid item xs={3}>
           <Paper id="p3" className={classes.paper}>This Month Stats</Paper>
           </Grid>

           <Grid item xs={3}>
           <Paper id="p4" className={classes.paper}>Last Month Stats</Paper>
          </Grid>

         </Grid> 
          <br/>
         <Grid container spacing={3}>
            <Grid item xs={3}>
            <Paper id="p5" className={classes.paper}>Total Customers</Paper>
            </Grid>

            <Grid item xs={3}>
            <Paper id="p6" className={classes.paper}>Engagement</Paper>
           </Grid>
             
           <Grid item xs={3}>
           <Paper id="p7" className={classes.paper}>AOV</Paper>
           </Grid>

           <Grid item xs={3}>
           <Paper id="p8" className={classes.paper}>xs=3</Paper>
          </Grid>

         </Grid>
        </Grid>
      </Grid><br/><br/>
      <hr/>
      <div>
          <Orders/>
      </div>
      <hr/><br/>
      <div>
         <Signup/>
      </div>
    </div>
  );
}