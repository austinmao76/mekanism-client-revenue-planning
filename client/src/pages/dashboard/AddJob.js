import { FormRow, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
const AddJob = () => {
	const {
		isEditing,
		showAlert,
		displayAlert,
		position,
		company,
		client,
		jobLocation,
		jobType,
		jobTypeOptions,
		status,
		statusOptions,
		date,
		handleChange,
		clearValues,
		isLoading,
		createJob,
	} = useAppContext()

	const handleSubmit = (e) => {
		e.preventDefault()
		// while testing

		// if (!position || !company || !jobLocation) {
		//   displayAlert()
		//   return
		// }
		if (isEditing) {
			// eventually editJob()
			return
		}
		createJob()
	}

	const handleJobInput = (e) => {
		handleChange({ name: e.target.name, value: e.target.value })
	}

	return (
		<Wrapper>
			<form className='form'>
				<h3>{isEditing ? 'edit job' : 'add job'} </h3>
				{showAlert && <Alert />}

				{/* position */}
				<div className='form-center'>
					<FormRow
						type='text'
						labelText='Job Name'
						name='position'
						value={position}
						handleChange={handleJobInput}
					/>
					{/* company */}
					<FormRow
						type='text'
						labelText='Job Number'
						name='company'
						value={company}
						handleChange={handleJobInput}
					/>
					{/* client */}
					<FormRow
						type='text'
						labelText='client'
						name='client'
						value={client}
						handleChange={handleJobInput}
					/>
					{/* location */}
					<FormRow
						type='text'
						labelText='Amount'
						name='jobLocation'
						value={jobLocation}
						handleChange={handleJobInput}
					/>
					{/* job status */}

					<FormRowSelect
						name='status'
						value={status}
						handleChange={handleJobInput}
						list={statusOptions}
					/>

					{/* job type */}
					<FormRowSelect
						labelText='type'
						name='jobType'
						value={jobType}
						handleChange={handleJobInput}
						list={jobTypeOptions}
					/>

					{/* date */}
					<FormRow
						type='date'
						labelText='date'
						name='date'
						value={date}
						handleChange={handleJobInput}
					/>

					<div className='btn-container'>
						<button
							className='btn btn-block submit-btn'
							type='submit'
							onClick={handleSubmit}
							disabled={isLoading}>
							submit
						</button>
						<button
							className='btn btn-block clear-btn'
							onClick={(e) => {
								e.preventDefault()
								clearValues()
							}}>
							clear
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	)
}

export default AddJob
