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
		accessor: 'Status',
		sticky: 'left',
	},
	{
		Header: `${year}-01-01`,
		Footer: `Jan ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-02-01`,
		Footer: `Feb ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-03-01`,
		Footer: `Mar ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-04-01`,
		Footer: `Apr ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-05-01`,
		Footer: `May ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-06-01`,
		Footer: `Jun ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-07-01`,
		Footer: `Jul ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-08-01`,
		Footer: `Aug ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-09-01`,
		Footer: `Sep ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-10-01`,
		Footer: `Oct ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-11-01`,
		Footer: `Nov ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
	{
		Header: `${year}-12-01`,
		Footer: `Jan ${year}`,
		accessor: '2022-01-01',
		Cell: ({ value }) => {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		},
	},
]

export const GROUPED_COLUMNS = [
	{
		Header: 'Id',
		Footer: 'Id',
		accessor: 'id',
	},
	{
		Header: 'Name',
		Footer: 'Name',
		columns: [
			{
				Header: 'First Name',
				Footer: 'First Name',
				accessor: 'first_name',
			},
			{
				Header: 'Last Name',
				Footer: 'Last Name',
				accessor: 'last_name',
			},
		],
	},
	{
		Header: 'Info',
		Footer: 'Info',
		columns: [
			{
				Header: 'Date of Birth',
				Footer: 'Date of Birth',
				accessor: 'date_of_birth',
			},
			{
				Header: 'Country',
				Footer: 'Country',
				accessor: 'country',
			},
			{
				Header: 'Phone',
				Footer: 'Phone',
				accessor: 'phone',
			},
		],
	},
]
