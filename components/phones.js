import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

export default function SimpleCard() {

  return (
    <Grid container style={{marginBottom:'1em', alignItems: 'unsafe center'}}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card style={{
                    minWidth: 200,
                    maxWidth: 250,
                    minHeight: 430,
                    marginTop:'4em',
                    borderTop:'12px black solid',
                    borderRight:'12px black solid',
                    borderLeft:'12px black solid',
                    borderBottomColor: 'white',
                    borderRadius:'50px',
            }}>
                <CardContent>
                    <p>this is a card</p>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card style={{
                    minWidth: 220,
                    maxWidth: 275,
                    minHeight: 500,
                    borderTop:'12px black solid',
                    borderRight:'12px black solid',
                    borderLeft:'12px black solid',
                    borderBottomColor: 'white',
                    borderRadius:'50px',
                    position: 'relative',
                    zIndex: 1,
            }}>
                <CardContent>
                    <p>this is a card</p>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card style={{
                    minWidth: 200,
                    maxWidth: 250,
                    minHeight: 430,
                    marginTop:'4em',
                    borderTop:'12px black solid',
                    borderRight:'12px black solid',
                    borderLeft:'12px black solid',
                    borderBottomColor: 'white',
                    borderRadius:'50px',
                    zIndex: 0,
            }}>
                <CardContent>
                    <p>this is a card</p>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
}