
import Typography from '@mui/material/Typography';

function OverviewDetails(props) {
    let  item = props.item;
    return (
        <div className='charts-details'>
            <div>
                <Typography variant="body2" color="text.secondary">
                    {
                        item.name
                    }
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {
                        item.value
                    }
                </Typography>
            </div>
            <div>
                <Typography variant="body2" color="text.secondary">
                    {
                        item.name1
                    }
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {
                        item.value1
                    }
                </Typography>
            </div>

        </div>
    );
}

export default OverviewDetails;
