import { FunnelChart, Funnel, LabelList, Tooltip } from 'recharts'

const ChartFunnel = (props) => {

    return (
        <>
            <FunnelChart width={730} height={250}>
                <Tooltip />
                <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={props.color1} stopOpacity={1} />
                        <stop offset="95%" stopColor={props.color2} stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Funnel
                    dataKey="price"
                    data={props.data}
                    isAnimationActive
                    fillOpacity={1} 
                    fill="url(#colorPrice)"
                >
                    <LabelList position="right" fill="white" stroke="none" dataKey="category" />
                </Funnel>
            </FunnelChart>

        </>
    )
}

export default ChartFunnel;