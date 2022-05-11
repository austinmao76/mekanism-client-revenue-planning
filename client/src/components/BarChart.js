import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'

const BarChartComponent = ({ data }) => {
	return (
		<ResponsiveContainer width='100%' height={300}>
			<BarChart
				width={500}
				height={400}
				data={data}
				margin={{
					top: 20,
					right: 80,
					bottom: 20,
					left: 20,
				}}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='date' />
				<YAxis
					allowDecimals={false}
					tickFormatter={(value) =>
						new Intl.NumberFormat('en', {
							notation: 'compact',
							compactDisplay: 'short',
						}).format(value)
					}
				/>
				<Tooltip />
				<Bar dataKey='revenue' fill='#2cb1bc' barSize={75} />
			</BarChart>
		</ResponsiveContainer>
	)
}
export default BarChartComponent
