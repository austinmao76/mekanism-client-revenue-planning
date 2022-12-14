import React, { useState } from 'react'

import BarChartComponent from './BarChart'
import AreaChartComponent from './AreaChart'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'

function ChartsContainer() {
	const [barChart, setBarChart] = useState(true)
	const { monthlyApplications: data } = useAppContext()
	console.log(data)
	return (
		<Wrapper>
			<h4>Monthly Revenue</h4>

			{/* <button type='button' onClick={() => setBarChart(!barChart)}>
				{barChart ? 'AreaChart' : 'BarChart'}
			</button> */}
			{barChart ? (
				<BarChartComponent data={data} />
			) : (
				<AreaChartComponent data={data} />
			)}
		</Wrapper>
	)
}

export default ChartsContainer
