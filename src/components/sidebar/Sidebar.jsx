import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to='/' style={{ textDecoration: "none" }}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <Link to='/' style={{ textDecoration: "none", color: "black" }}>
                        <li>
                            <DashboardIcon classname="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className="title">Main</p>
                    <Link to='/users' style={{ textDecoration: "none", color: "black" }}>
                        <li>
                            <PeopleIcon classname="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: "none", color: "black" }}>
                        <li>
                            <CategoryIcon classname="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon classname="icon" />
                        <span>Orders</span>
                    </li>

                    <p className="title">Analytics</p>
                    <li>
                        <AnalyticsIcon classname="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon classname="icon" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <Inventory2Icon classname="icon" />
                        <span>Logs</span>
                    </li>

                    <p className="title">User</p>
                    <li>
                        <AccountCircleIcon classname="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <SettingsIcon classname="icon" />
                        <span>Settings</span>
                    </li>
                    <li>
                        <LogoutIcon classname="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar