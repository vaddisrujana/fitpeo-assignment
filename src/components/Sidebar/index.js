import {RiSettingsLine } from "react-icons/ri";
import {TbSquareKey } from "react-icons/tb";
import {TbBrandProducthunt} from "react-icons/tb"
import {BiChevronRight} from "react-icons/bi"
import {IoIosContact} from "react-icons/io"
import {RiCoinsLine} from "react-icons/ri"
import {LuBadgePercent} from "react-icons/lu"
import {MdOutlineLiveHelp} from "react-icons/md"
import {BiChevronDown} from "react-icons/bi"
import './index.css'

const Sidebar=()=>(
    <div className="sidebar-background">
        <div>
            <div className="flex">
                <RiSettingsLine className="icon"/>
                <h1 className="small-none">Dashboard</h1>
            </div>
            
            <div className="sidebar-container background">
                <div className="flex ">
                    <TbSquareKey className="icon1"/>
                    <p  className="small-none">Dashboard</p>
                </div>
                <BiChevronRight className="right-icon small-none"/>
            </div>
            <div className="sidebar-container">
                <div className="flex">
                    <TbBrandProducthunt className="icon1"/>
                    <p  className="small-none">Product</p>
                </div>
                <BiChevronRight className="right-icon small-none"/>
            </div>
            
            <div className="sidebar-container">
                <div className="flex">
                    <IoIosContact className="icon1"/>
                    <p  className="small-none">Customers</p>
                </div>
                <BiChevronRight className="right-icon small-none"/>
            </div>
            <div className="sidebar-container">
                <div className="flex">
                    <RiCoinsLine className="icon1"/>
                    <p  className="small-none">Income</p>
                </div>
                <BiChevronRight className="right-icon small-none"/>
            </div>
            <div className="sidebar-container">
                <div className="flex">
                    <LuBadgePercent className="icon1"/>
                    <p  className="small-none">Promote</p>
                </div>
                <BiChevronRight className="right-icon small-none"/>
            </div>
            <div className="sidebar-container">
                <div className="flex">
                    <MdOutlineLiveHelp className="icon1"/>
                    <p  className="small-none">Help</p>
                </div>
                <BiChevronRight className="right-icon small-none"/>
            </div>
        </div>
        <div className="profile">
            <div className="flex">
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="profile_pic" className="profile_pic"/>
                <div className="small-none">
                    <p>Evano</p>
                    <p>Project Manager</p>
                </div>
            </div>
            <button className="button small-none"><BiChevronDown className="down-arrow"/></button>
        </div>
    </div>
)

export default Sidebar