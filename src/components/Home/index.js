import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Layer,PieChart, Pie, Cell,Label 
} from "recharts";

import Sidebar from '../Sidebar';
import {PiHandWavingBold} from "react-icons/pi";
import {BiSearch} from "react-icons/bi";
import {AiOutlineDollar} from "react-icons/ai";
import {CgNotes} from "react-icons/cg";
import {CiWallet} from "react-icons/ci";
import {BsHandbag} from "react-icons/bs";
import {BsArrowDownShort} from "react-icons/bs";
import {BsArrowUpShort} from "react-icons/bs";
import './index.css';

const data = [
  {
    month: "January",
    value: 100,
  },
  {
    month: "February",
    value: 200,
  },
  {
    month: "March",
    value: 250,
  },
  {
    month: "April",
    value: 250,
  },
  {
    month: "May",
    value: 10,
  },
  {
    month: "June",
    value: 30,
  },
  {
    month: "July",
    value: 200,
  },
  {
    month: "August",
    value: 400,
    fill: "#1f77b4", 
  },
  {
    month: "September",
    value: 150,
  },
  {
    month: "October",
    value: 200,
  },
  {
    month: "November",
    value: 200,
  },
  {
    month: "December",
    value: 300,
  },
];

const data1 = [
    {
      count: 50,
      language: "Telugu",
    },
    {
      count: 15,
      language: "Hindi",
    },
    {
      count: 25,
      language: "English",
    },
  ]

const CustomTooltip = ({ payload }) => {
  if (payload[0]) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.month} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Home = () => (
  <div className='home-background'>
    <Sidebar />
    <div className='home-container'>
      <div className='home-container1'>
        <div className='flex'>
          <p className='text'>Hello Shahrukh</p>
          <PiHandWavingBold className='hand' />
          <p>,</p>
        </div>
        <div className='search-container flex'>
          <BiSearch className='search-icon' />
          <input type="search" placeholder='Search' className='search' />
        </div>
      </div>
      <div className='container'>
        <div className='container1'>
          <div>
            <AiOutlineDollar className='symbol' />
          </div>
          <div className='padding'>
            <p className='para'>Earning</p>
            <h1 className='head'>$198k</h1>
            <p className='para2'><span className='green'><BsArrowUpShort />37%</span> this month</p>
          </div>
        </div>
        <div className='container1'>
          <div>
            <CgNotes className='symbol2' />
          </div>
          <div className='padding'>
            <p className='para'>Orders</p>
            <h1 className='head'>$2.4k</h1>
            <p className='para2'><span className='red'><BsArrowDownShort />2%</span> this month</p>
          </div>
        </div>
        <div className='container1'>
          <div>
            <CiWallet className='symbol3' />
          </div>
          <div className='padding'>
            <p className='para'>Balence</p>
            <h1 className='head'>$2.4k</h1>
            <p className='para2'><span className='red'><BsArrowDownShort />2%</span> this month</p>
          </div>
        </div>
        <div className='container1'>
          <div>
            <BsHandbag className='symbol4' />
          </div>
          <div className='padding'>
            <p className='para'>Total Sales</p>
            <h1 className='head'>$89k</h1>
            <p className='para2'><span className='green'><BsArrowUpShort />11%</span> this month</p>
          </div>
        </div>
      </div>
      <div className='flex1'>
        <div className='bar-graph'>
            <div className='flex padding'>
              <div>
                <h1 className='product-heading'>Overview</h1>
                <p className='para'>Monthly Earning</p>
              </div>
              <div>
              <select>
                <option>
                  Quarterly
                </option>
                <option>
                  Half yearly
                </option>
              </select>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
            <BarChart
                data={data}
                margin={{
                top: 5,
                }}
            >
                <XAxis
                dataKey="month"
                tick={{
                    stroke: "gray",
                    strokeWidth: 1,
                }}
                />
                <YAxis hide={true} />
                <Bar dataKey="value" fill="#d0d0d0" barSize="20%" />
                <Layer key="custom-tooltip">
                <CustomTooltip />
                </Layer>
            </BarChart>
            </ResponsiveContainer>
       
      </div>
      <div className='pie-chart'>
        <div >
          <h1 className='product-heading'>Customers</h1>
          <p className='para'>Customers that buy products</p>
        </div>
        <ResponsiveContainer width="100%" height={300} >
        
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={data1}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell  fill="pink" />
            <Cell fill="skyblue" />
            <Cell fill="#d0d0d0" />
            
            <Label value={`65% Total New customers`} position="center" fill="#000" fontSize={12} />
            
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
      </div>
      <div className='product-background'>
        <div className='product-container1'>
          <h1 className='product-heading'>Product Sell</h1>
          <div className='flex'>
            <div className='search-container1 flex'>
              <BiSearch className='search-icon' />
              <input type="search" placeholder='Search' className='search1' />
            </div>
            <div className='select'>
              <select>
                <option>
                  Last 30 days
                </option>
                <option>
                  Last 15 days
                </option>
                <option>
                  Last 7 days
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='product-container1'>
          <p className='para'>Product Name</p>
          <div className='product-container1'>
            <p className='para margin-right'>Stock</p>
            <p className='para margin-right'>Price</p>
            <p className='para3 '>Total Sales</p>
          </div>
        </div>
        <hr />
        <div>
          <div className='product-container1'>
            <div className='flex'>
              <img src="https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png" alt="image1" className='image' />
              <div>
                <h1 className='item-heading'>Abstract 3D</h1>
                <p className='para'>Lorem ipsum dolar sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className='product-container1'>
              <p className='stock-margin'>32 in stock</p>
              <p className='price-margin'>$ 45.99</p>
              <p className='sales-margin'>20</p>
            </div>
          </div>
        </div>
        <div>
          <div className='product-container1'>
            <div className='flex'>
              <img src="https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png" alt="image1" className='image' />
              <div>
                <h1 className='item-heading'>Sarphens Illustation</h1>
                <p className='para'>Lorem ipsum dolar sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className='product-container1'>
              <p className='stock-margin'>32 in stock</p>
              <p className='price-margin'>$ 45.99</p>
              <p className='sales-margin'>20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
