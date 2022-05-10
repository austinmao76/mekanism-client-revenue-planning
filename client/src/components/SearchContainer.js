import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'

const SearchContainer = () => {
	const {
		isLoading,
		search,
		handleChange,
		searchStatus,
		statusOptions,
		jobTypeOptions,
		searchType,
		clearFilters,
		sort,
		sortOptions,
		client,
		company,
		endDate,
		startDate,
	} = useAppContext()

	const handleSearch = (e) => {
		if (isLoading) return
		handleChange({ name: e.target.name, value: e.target.value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		clearFilters()
	}
	return (
		<Wrapper>
			<form className='form'>
				<h4>search form</h4>
				{/* search position */}
				<div className='form-center'>
					<FormRow
						type='text'
						name='client'
						value={client}
						handleChange={handleSearch}></FormRow>
					<FormRow
						type='text'
						name='search'
						labelText={'Job Name'}
						value={search}
						handleChange={handleSearch}></FormRow>
					<FormRow
						type='text'
						name='company'
						labelText={'Job Number'}
						value={company}
						handleChange={handleSearch}></FormRow>
					{/* search by status */}
					<FormRowSelect
						labelText='job status'
						name='searchStatus'
						value={searchStatus}
						handleChange={handleSearch}
						list={['all', ...statusOptions]}></FormRowSelect>
					{/* search by type */}

					<FormRowSelect
						labelText='job type'
						name='searchType'
						value={searchType}
						handleChange={handleSearch}
						list={['all', ...jobTypeOptions]}></FormRowSelect>

					<FormRow
						type='date'
						labelText='start date'
						name='startDate'
						value={startDate}
						handleChange={handleSearch}></FormRow>
					<FormRow
						type='date'
						labelText='end date'
						name='endDate'
						value={endDate}
						handleChange={handleSearch}></FormRow>
					{/* sort */}

					<FormRowSelect
						name='sort'
						value={sort}
						handleChange={handleSearch}
						list={sortOptions}></FormRowSelect>
					<button
						className='btn btn-block btn-danger'
						disabled={isLoading}
						onClick={handleSubmit}>
						clear filters
					</button>
				</div>
			</form>
		</Wrapper>
	)
}

export default SearchContainer
