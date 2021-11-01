import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const ChartBar = (props) => {
    return (
        <>
            <BarChart width={600} height={250} data={props.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={props.color1} stopOpacity={1} />
                        <stop offset="95%" stopColor={props.color2} stopOpacity={1} />
                    </linearGradient>
                </defs>
                <XAxis  dataKey="category" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="price"  fillOpacity={1} fill="url(#colorPrice)" />
            </BarChart>
        </>
    )
}

export default ChartBar
