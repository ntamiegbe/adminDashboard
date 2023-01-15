import React from 'react'
import './widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';

const Widget = ({ type }) => {
    let data

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "View all users",
                icon: <div className="icon"><PersonOutlineOutlinedIcon sx={{ color: "#3b8ff3", backgroundColor: "#b3d3fa", padding: "5px", borderRadius: "5px" }} /></div>,
                amount: 231,
                diff: <div className="percentage positive">
                    <ArrowDropUpIcon /> 6.34%
                </div>
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <div className="icon"><ShoppingCartOutlinedIcon sx={{ color: "#34b1aa", backgroundColor: "#9ce2de", padding: "5px", borderRadius: "5px" }} /></div>,
                amount: 33,
                diff: <div className="percentage negative">
                    <ArrowDropDownIcon /> 3.19%
                </div>
            }
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View all earnings",
                icon: <div className="icon"><MoneyOutlinedIcon sx={{ color: "#e0b50f", backgroundColor: "#fbefc1", padding: "5px", borderRadius: "5px" }} /></div>,
                amount: 19500,
                diff: <div className="percentage negative">
                    <ArrowDropDownIcon /> -1.17%
                </div>
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "View details",
                icon: <div className="icon"><AccountBalanceWalletOutlinedIcon sx={{ color: "#663399", backgroundColor: "#b28cd9", padding: "5px", borderRadius: "5px" }} /></div>,
                amount: 1450000,
                diff: <div className="percentage positive">
                    <ArrowDropUpIcon /> 1.61%
                </div>
            }
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "₦"}{data.amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                {data.diff}
                {data.icon}
            </div>
        </div>
    )
}

export default Widget