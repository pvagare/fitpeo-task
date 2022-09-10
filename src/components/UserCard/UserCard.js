import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '@mui/material/Divider';
import OrderStats from '../OrderStats/OrderStats';
export default function UserCard(props) {
    let profile = props.profile;

    return (
        <div className={props.containerStyle}>
            <Card>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreHorizIcon />
                        </IconButton>
                    }
                />
                <div className={props.profileImg}>

                    <CardMedia
                        component="img"
                        height="194"
                        image={profile.img}
                        alt="Paella dish"
                    />
                </div>
                <CardContent>
                    <Typography variant="h5" color="text.secondary">
                        {
                            profile.name
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {
                            profile.designation
                        }
                    </Typography>

                    <div className='product-details'>
                        <div>
                            <Typography variant="h5" color="text.secondary">
                                {
                                    profile.productCount
                                }
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {
                                    profile.productName
                                }
                            </Typography>


                        </div>
                        <div>
                            <Typography variant="h5" color="text.secondary">
                                {
                                    profile.productCount
                                }
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {
                                    profile.productName
                                }
                            </Typography>
                        </div>
                    </div>
                    <Divider className='divider'></Divider>
                    <Typography align="left" variant="h5" color="text.secondary">
                        Earnings
                    </Typography>
                    <OrderStats></OrderStats>
                    <Divider className='divider'></Divider>
                    <Typography align="left" variant="h5" color="text.secondary">
                        Recent Activity
                    </Typography>

                    {
                        profile.activities.map((item) => {
                            return <div className='activities'>
                                <div className='time-section'>
                                    <Typography variant="h5" color="text.secondary">
                                        {
                                            item.time
                                        }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {
                                            item.month
                                        }
                                    </Typography>
                                </div>
                                <div className='activity-text'>
                                    <Typography variant="body2" color="text.secondary">
                                        {
                                            item.text
                                        }
                                    </Typography>

                                </div>
                            </div>
                        })
                    }


                </CardContent>
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton> */}
                </CardActions>
            </Card>
        </div>
    );
}
