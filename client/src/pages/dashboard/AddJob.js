import { FormRow, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
const AddJob = () => {
	const {
		isEditing,
		showAlert,
		displayAlert,
		jobName,
		jobNumber,
		client,
		amount,
		jobType,
		jobTypeOptions,
		status,
		statusOptions,
		date,
		handleChange,
		clearValues,
		isLoading,
		createJob,
		editJob,
	} = useAppContext()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!jobName || !jobNumber || !amount) {
			displayAlert()
			return
		}
		if (isEditing) {
			editJob()
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

				{/* jobName */}
				<div className='form-center'>
					<FormRow
						type='text'
						labelText='Job Name'
						name='jobName'
						value={jobName}
						handleChange={handleJobInput}
					/>
					{/* jobNumber */}
					<FormRow
						type='text'
						labelText='Job Number'
						name='jobNumber'
						value={jobNumber}
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
						type='number'
						labelText='Amount'
						name='amount'
						value={amount}
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
