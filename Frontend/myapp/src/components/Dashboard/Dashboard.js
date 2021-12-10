import React from 'react';
import './Dashboard.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
function Dashboard()
{


    const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    Amount: 1400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    Amount: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    Amount: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    Amount: 3000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    Amount: 3181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    Amount: 4000,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    Amount: 2100,
  },
  {
    name: 'August',
    uv: 3490,
    pv: 4300,
    Amount: 1900,
  },
  {
    name: 'Sept',
    uv: 3490,
    pv: 4300,
    Amount: 1700,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4300,
    Amount: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
    Amount: 400,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    Amount: 3100,
  },
];


    return(
        
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                  <div className="topRight">
                      <div className="topbarIcons">
                         <AccountCircleIcon stroke="#fff"/>
                      </div>
                  </div>
            </div>
            <div className="Home">
                <div className="featured">
                    <div className="featuredItem">
                        <span className="featuredTitle">Donation per year</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$2,415</span>
                            <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredNegative"></ArrowDownward>
                            </span>
                        </div>
                        <span className="featuredSub">Compared to last month</span>
                    </div>

                    <div className="featuredItem">
                        <span className="featuredTitle">Fund</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$2,415</span>
                            <span className="featuredMoneyRate">-11.4 <ArrowUpward className="featuredNegative"></ArrowUpward>
                            </span>
                        </div>
                        <span className="featuredSub">Compared to last month</span>
                    </div>

                    <div className="featuredItem">
                        <span className="featuredTitle">Revenue</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$2,415</span>
                            <span className="featuredMoneyRate">-11.4 <ArrowUpward className="featuredNegative"></ArrowUpward>
                            </span>
                        </div>
                        <span className="featuredSub">Compared to last month</span>
                    </div>

                    <div className="featuredItem">
                        <span className="featuredTitle">Donation YT</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$2,415</span>
                            <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredNegative"></ArrowDownward>
                            </span>
                        </div>
                        <span className="featuredSub">Compared to last month</span>
                    </div>
                </div>
    <div className="chart">
    <h3 className="chartTitle"><b>Overall Progress</b></h3>
    <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#008000"/>
            <YAxis dataKey="uv" stroke="#008000"></YAxis>
            <Line type="monotone" dataKey= "Amount" stroke="#008000"/>
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            <Legend/>
        </LineChart>
    </ResponsiveContainer>
    </div>
</div>
</div>
    )
}

export default Dashboard;