import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaSpinner, FaFileSignature, FaCheck } from 'react-icons/fa'

import Wrapper from '../assets/wrappers/StatsContainer'
const StatsContainer = () => {
	const { stats } = useAppContext()
	const defaultStats = [
		{
			title: "McDonald's",
			count: stats['mcdonalds'] || 0,
			icon: <FaSpinner />,
			color: '#e9b949',
			bcg: '#fcefc7',
		},
		{
			title: 'PM Pediatrics',
			count: stats['pmpediatrics'] || 0,
			icon: <FaFileSignature />,
			color: '#1d3557',
			bcg: '#caf0f8',
		},
		{
			title: 'Social Media Comms',
			count: stats['socialMediaComms'] || 0,
			icon: <FaCheck />,
			color: '#04e762',
			bcg: '#066839',
		},
	]

	return (
		<Wrapper>
			{defaultStats.map((item, index) => {
				return <StatItem key={index} {...item} />
			})}
		</Wrapper>
	)
}

export default StatsContainer
