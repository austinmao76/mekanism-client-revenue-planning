import moment from 'moment'

const year = moment().format('YYYY')

export const COLUMNS = [
	{
		Header: 'Client',
		Footer: 'Client',
		accessor: 'client',
		sticky: 'left',
	},
	{
		Header: 'Job Number',
		Footer: 'Job Number',
		accessor: 'jobNumber',
		sticky: 'left',
	},
	{
		Header: 'Job Name',
		Footer: 'Job Name',
		accessor: 'jobName',
		sticky: 'left',
	},
	{
		Header: 'Job Type',
		Footer: 'Job Type',
		accessor: 'jobType',
		sticky: 'left',
	},
	{
		Header: 'Status',
		Footer: 'Status',
		accessor: 'status',
		sticky: 'left',
	},
	{
		Header: `${year}-01-01`,
		Footer: `Jan ${year}`,
		accessor: `${year}-01-01`,
		Cell: ({ value }) => {
			return value
		},
	},
	{
		Header: `${year}-02-01`,
		Footer: `Feb ${year}`,
		accessor: `${year}-02-01`,
	},
	{
		Header: `${year}-03-01`,
		Footer: `Mar ${year}`,
		accessor: `${year}-03-01`,
	},
	{
		Header: `${year}-04-01`,
		Footer: `Apr ${year}`,
		accessor: `${year}-04-01`,
	},
	{
		Header: `${year}-05-01`,
		Footer: `May ${year}`,
		accessor: `${year}-05-01`,
	},
	{
		Header: `${year}-06-01`,
		Footer: `Jun ${year}`,
		accessor: `${year}-06-01`,
	},
	{
		Header: `${year}-07-01`,
		Footer: `Jul ${year}`,
		accessor: `${year}-07-01`,
	},
	{
		Header: `${year}-08-01`,
		Footer: `Aug ${year}`,
		accessor: `${year}-08-01`,
	},
	{
		Header: `${year}-09-01`,
		Footer: `Sep ${year}`,
		accessor: `${year}-09-01`,
	},
	{
		Header: `${year}-10-01`,
		Footer: `Oct ${year}`,
		accessor: `${year}-10-01`,
	},
	{
		Header: `${year}-11-01`,
		Footer: `Nov ${year}`,
		accessor: `${year}-11-01`,
	},
	{
		Header: `${year}-12-01`,
		Footer: `Jan ${year}`,
		accessor: `${year}-12-01`,
	},
]
