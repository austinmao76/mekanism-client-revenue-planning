import mongoose from 'mongoose'
import { format, endOfDay } from 'date-fns'
import moment from 'moment'

const JobSchema = new mongoose.Schema(
	{
		company: {
			type: String,
			required: [true, 'Please provide company name'],
			maxlength: 50,
		},
		position: {
			type: String,
			required: [true, 'Please provide position'],
			maxlength: 100,
		},
		client: {
			type: String,
			required: [true, 'Please provide client'],
			maxlength: 100,
		},
		status: {
			type: String,
			enum: ['pending', 'awaiting signature', 'approved'],
			default: 'pending',
		},

		jobType: {
			type: String,
			enum: [
				'Social Media Comms',
				'Experiential',
				'Brand',
				'Other',
				"McDonald's",
				'PM Pediatrics',
			],
			default: 'Social Media Comms',
		},
		jobLocation: {
			type: String,
			default: 'my city',
			required: true,
		},
		date: {
			type: Date,
			default: moment().format('YYYY-MM-DD'),
			required: true,
		},

		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: [true, 'Please provide user'],
		},
	},
	{ timestamps: true }
)

export default mongoose.model('Job', JobSchema)
