import Wrapper from '../assets/wrappers/SearchContainer'
import React from 'react'

export const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column
	return (
		<Wrapper>
			<form className='form'>
				<div className='form-center'>
					Search:{' '}
					<input
						value={filterValue || ''}
						onChange={(e) => setFilter(e.target.value)}
					/>
				</div>
			</form>
		</Wrapper>
	)
}
