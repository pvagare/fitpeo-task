
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatIcon from '@mui/icons-material/Chat';
import RecommendIcon from '@mui/icons-material/Recommend';
import EmailIcon from '@mui/icons-material/Email';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CallIcon from '@mui/icons-material/Call';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LogoutIcon from '@mui/icons-material/Logout';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SettingsIcon from '@mui/icons-material/Settings';

function Icon(props) {
    let name = props.name;
    let iconHtml = null;
    if (name === "Dashboard") {
        iconHtml = <DashboardIcon></DashboardIcon>
    } else if (name === "Calender") {
        iconHtml = <CalendarTodayIcon></CalendarTodayIcon>
    }
    else if (name === "Chat") {
        iconHtml = <ChatIcon></ChatIcon>
    }
    else if (name === "eCommernce") {
        iconHtml = <RecommendIcon></RecommendIcon>
    }
    else if (name === "Emails") {
        iconHtml = <EmailIcon></EmailIcon>
    }
    else if (name === "Project") {
        iconHtml = <AccountTreeIcon></AccountTreeIcon>
    }
    else if (name === "Contact") {
        iconHtml = <CallIcon></CallIcon>
    } else if (name === "File Manager") {
        iconHtml = <DriveFileMoveIcon></DriveFileMoveIcon>
    }
    else if (name === "Logout") {
        iconHtml = <LogoutIcon></LogoutIcon>
    }
    else if (name === "ZoomInIcon") {
        iconHtml = <ZoomInIcon></ZoomInIcon>
    }
    else if (name === "notify") {
        iconHtml = <NotificationImportantIcon></NotificationImportantIcon>
    }
    else if (name === "setting") {
        iconHtml = <SettingsIcon></SettingsIcon>
    }

    return (
        <span className={props.containerStyle}>
            {iconHtml}
        </span>

    );
}

export default Icon;

