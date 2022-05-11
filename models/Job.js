import mongoose from 'mongoose'
import moment from 'moment'

const JobSchema = new mongoose.Schema(
	{
		// job number
		jobNumber: {
			type: String,
			maxlength: 50,
		},
		// job name
		jobName: {
			type: String,
			required: [true, 'Please provide job name'],
			maxlength: 100,
		},
		client: {
			type: String,
			required: [true, 'Please provide client'],
			maxlength: 100,
		},
		status: {
			type: String,
			enum: [
				'pending',
				'awaiting signature',
				'approved',
				'budget',
				'RFQ1',
				'RFQ2',
				'RFQ3',
			],
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

		//amount
		amount: {
			type: Number,
			default: '1000',
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
