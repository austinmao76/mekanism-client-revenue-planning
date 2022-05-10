import { MdQueryStats, MdOutlineAnalytics } from 'react-icons/md'
import { ImProfile } from 'react-icons/im'
import { RiExchangeDollarLine } from 'react-icons/ri'

const links = [
	{
		id: 1,
		text: 'analysis',
		path: '/',
		icon: <MdOutlineAnalytics />,
	},
	{
		id: 2,
		text: 'all revenue',
		path: 'all-jobs',
		icon: <MdQueryStats />,
	},
	{
		id: 3,
		text: 'add/edit revenue',
		path: 'add-job',
		icon: <RiExchangeDollarLine />,
	},
	{
		id: 4,
		text: 'profile',
		path: 'profile',
		icon: <ImProfile />,
	},
]

export default links
