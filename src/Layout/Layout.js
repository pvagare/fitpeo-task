
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Label from '../components/common/Label';
import Sidebar from './SideBar';

import Dashboard from '../pages/Dashboard/Dashboard';
import Icon from '../components/common/Icon';

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    padding: theme.spacing(1.5),
    color: theme.palette.text.secondary,
}));

function Layout() {

    return (
        <Grid container spacing={2}>
            <Grid item className='padding-left-0 mobile-hide' md={2}>
                <Item>
                    <Sidebar></Sidebar>
                </Item>

            </Grid>
            <Grid item xs={12} md={10}>
                <Item className='body-background'>
                    <div className='page-content'>
                        <div className='label-container'>
                            <Label text={"Dashboard"} containerStyle={"dashboard-text"}></Label>
                            <div>
                                <Icon name="Logout" containerStyle={"icon-space"}>
                                </Icon>
                                <Icon name="ZoomInIcon" containerStyle={"icon-space"}>
                                </Icon>
                                <Icon name="notify" containerStyle={"icon-space"}>
                                </Icon>
                                <Icon name="Dashboard" containerStyle={"icon-space"}>
                                </Icon>
                                <Icon name="setting" containerStyle={"icon-space"}>
                                </Icon>
                            </div>
                        </div>

                        <Dashboard></Dashboard>
                    </div>
                </Item>
            </Grid>
        </Grid>
    );
}

export default Layout;

