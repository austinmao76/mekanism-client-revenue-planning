import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
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
				<Legend verticalAlign='top' height={36} />
				<Bar
					dataKey='approved'
					name='Approved'
					stackId='a'
					fill='#3d5a80'
					barSize={75}
				/>
				<Bar
					dataKey='awaitingSignature'
					name='Awaiting Signature'
					stackId='a'
					fill='#98c1d9'
					barSize={75}
				/>
				<Bar
					dataKey='pending'
					name='Pending'
					fill='#e56b6f'
					stackId='a'
					barSize={75}
				/>
				<Bar dataKey='RFQ1' stackId='b' fill='#ee6c4d' barSize={75} />
			</BarChart>
		</ResponsiveContainer>
	)
}
export default BarChartComponent
