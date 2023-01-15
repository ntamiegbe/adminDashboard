import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        Total: 394000,
    },
    {
        name: 'Febuary',
        Total: 208000,
    },
    {
        name: 'March',
        Total: 664000,
    },
    {
        name: 'April',
        Total: 95000,
    },
    {
        name: 'May',
        Total: 304000,
    },
    {
        name: 'June',
        Total: 344000,
    },
];

const Chart = () => {
    return (    
        <div className='chart'>
            <div className="title">Profit (Last 6 Months)</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f29f67" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#f29f67" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#f29f67" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart