import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

export default function KPIData(props) {
    let data = props.data;

    return (
        <div className={props.containerStyle}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {data.name}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <div className='small-size'>
                                {data.count}
                            </div>
                        </IconButton>
                    }
                    title={data.title}
                    subheader={data.subHeader}>
                </CardHeader>
            </Card>
        </div>
    );
}
