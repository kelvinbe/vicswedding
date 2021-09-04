import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';



function Footer(props) {
    return (
        <footer style={{overflowX: 'hidden', boxShadow: '50px !important'
        }}>
            <Box>
                <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        @2021 Ark Hostels All Rights Reserverd
                        </Grid>
                </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;