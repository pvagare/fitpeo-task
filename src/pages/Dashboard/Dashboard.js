
import KPIData from '../../components/KIPData/KPIData';
import Grid from '@mui/material/Grid';
import UserCard from '../../components/UserCard/UserCard';
import BarChartInfo from '../../components/BarChart/BarChartInfo';
import Typography from '@mui/material/Typography';
import OverviewDetails from '../../components/OverviewDetails/OverviewDetails';
import OrderStats from '../../components/OrderStats/OrderStats';
import UserActivity from '../../components/UserActivity/UserActivity';
import Avatar from '@mui/material/Avatar';
function Dashboard() {
  var kpiData = [
    {
      name: "R",
      count: '+96%',
      title: "Revenue",
      subHeader: "$21456"
    },
    {
      name: "O",
      count: '-9.6%',
      title: "Orders",
      subHeader: "5643"
    },
    {
      name: "C",
      count: '-30%',
      title: "Customers",
      subHeader: "45254"
    }
  ]

  let profileData = {
    name: "Jenifier Bennet",
    designation: "Software Designer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    productName: "Products",
    productCount: 1234,
    activities: [
      {
        time: "12",
        month: "Sept",
        text: "Product Item is added by you in cart"
      },
      {
        time: "12",
        month: "Sept",
        text: "Product Item is added by you in cart"
      },
      {
        time: "12",
        month: "Sept",
        text: "Product Item is added by you in cart"
      }
    ]
  }

  let overView = [
    {
      name: "Orders",
      value: "5643",
      name1: "Sales",
      value1: "16273"
    },
    {
      name: "Order Value",
      value: "5643",
      name1: "Customers",
      value1: "16273"
    }
    ,
    {
      name: "Income",
      value: "5643",
      name1: "Expenses",
      value1: "16273"
    }
  ]
  return (
    <div className="dashboard">
      <Grid container>
        <Grid item xs={12} md={9} className="spacer">
          <Grid container spacing={2}>
            {
              kpiData.map((item) => {
                return <Grid item xs={0} gridRow md={4}>
                  <KPIData containerStyle={"kpi-container"} data={item}></KPIData>
                </Grid>
              })
            }
            <Grid item xs={12} md={12} className="widget-container">
              <Grid container spacing={2}>
                <Grid item xs={12} gridRow md={4}>
                  <Typography align='left' variant="body2" color="text.secondary">
                    This Month
                  </Typography>
                  <Typography align='left' variant="h4" color="text.secondary">
                    $24,538
                  </Typography>
                  {
                    overView.map((item) => {
                      return <OverviewDetails item={item}></OverviewDetails>
                    })
                  }
                </Grid>
                <Grid item xs={12} gridRow md={8}>
                  <BarChartInfo>
                  </BarChartInfo>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} gridRow md={4} className="user-activity">
                  <Typography align='left' variant="h5" color="text.secondary">
                    User Activity
                  </Typography>
                  <UserActivity>

                  </UserActivity>
                </Grid>
                <Grid item xs={12} gridRow md={4} className="user-stats">
                  <Typography align='left' variant="h5" color="text.secondary">
                    Order Stats
                  </Typography>
                  <OrderStats></OrderStats>
                </Grid>
                <Grid item xs={12} gridRow md={3} className="user-top-products">
                  <Typography align='left' variant="h5" color="text.secondary">
                    Top Product
                  </Typography>
                  {
                    [...Array(3)].map((item) => {
                      return <div className='top-products'>
                        <div>
                          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                            {"R"}
                          </Avatar>
                        </div>
                        <div>
                          <Typography align='left' variant="body2" color="text.secondary">
                            Product1
                          </Typography>
                          <Typography align='left' variant="body2" color="text.secondary">
                            $24,538
                          </Typography>
                        </div>
                        <div>
                          <Typography align='left' variant="body2" color="text.secondary">
                            3%
                          </Typography>
                        </div>
                      </div>
                    })
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={3}>
          <UserCard profile={profileData} profileImg={'profile-img'} containerStyle="user-card"></UserCard>
        </Grid>
      </Grid>

    </div>
  );
}

export default Dashboard;
