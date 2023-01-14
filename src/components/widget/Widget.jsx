import React from 'react'
import './widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';

const Widget = ({ type }) => {
    let data

    const amount = 120000
    const diff = 12.62

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "View all users", 
                icon: <div className="icon"><PersonOutlineOutlinedIcon sx={{ color: "#3b8ff3", backgroundColor: "#b3d3fa", padding:"5px", borderRadius: "5px"}}/></div>
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders", 
                icon: <div className="icon"><ShoppingCartOutlinedIcon sx={{ color: "#34b1aa", backgroundColor: "#9ce2de", padding: "5px", borderRadius: "5px" }} /></div>
            }
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View all earnings", 
                icon: <div className="icon"><MoneyOutlinedIcon sx={{ color: "#e0b50f", backgroundColor: "#fbefc1", padding: "5px", borderRadius: "5px" }} /></div>
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "View details", 
                icon: <div className="icon"><AccountBalanceWalletOutlinedIcon sx={{ color: "#663399", backgroundColor: "#b28cd9", padding: "5px", borderRadius: "5px" }} /></div>
            }
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "₦"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpIcon /> {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget