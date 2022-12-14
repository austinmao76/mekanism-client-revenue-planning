import {
	FaLocationArrow,
	FaBriefcase,
	FaCalendarAlt,
	FaDollarSign,
	FaUsers,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import JobInfo from './JobInfo'
import moment from 'moment'

const Job = ({
	_id,
	jobName,
	jobNumber,
	amount,
	jobType,
	createdAt,
	status,
	date,
	client,
}) => {
	const { setEditJob, deleteJob } = useAppContext()

	let date_formatted = moment(date)
	date_formatted = date_formatted.format('MMM YYYY')

	return (
		<Wrapper>
			<header>
				<div className='main-icon'>{client.charAt(0)}</div>
				<div className='info'>
					<h4>{client}</h4>
					<h5>{jobName}</h5>
					<p>{jobNumber}</p>
				</div>
			</header>
			<div className='content'>
				<div className='content-center'>
					<JobInfo icon={<FaUsers />} text={client} />
					<JobInfo icon={<FaDollarSign />} text={amount} />
					<JobInfo icon={<FaCalendarAlt />} text={date_formatted} />
					<JobInfo icon={<FaBriefcase />} text={jobType} />
					<div className={`status ${status.replace(' ', '-')}`}>{status}</div>
				</div>
				{/* content center later */}
				<footer>
					<div className='actions'>
						<Link
							to='/add-job'
							onClick={() => setEditJob(_id)}
							className='btn edit-btn'>
							Edit
						</Link>
						<button
							type='button'
							className='btn delete-btn'
							onClick={() => deleteJob(_id)}>
							Delete
						</button>
					</div>
				</footer>
			</div>
		</Wrapper>
	)
}

export default Job
