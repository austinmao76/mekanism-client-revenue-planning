import React, { useMemo, useEffect } from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'
import { useAppContext } from '../context/appContext'
import { COLUMNS } from './Columns'
import moment from 'moment'
import { ColumnFilter } from './ColumnFilter'
import '../assets/wrappers/table.css'
import _ from 'lodash'
const PivotTableContainer = () => {
	const year = moment().format('YYYY')

	const { clientRev: items } = useAppContext()
	const cols = useMemo(
		() => [
			{
				Header: 'Client',
				Footer: 'Client',
				accessor: 'client',
				sticky: 'left',
			},
			{
				Header: 'Job Number',
				Footer: 'Job Number',
				accessor: 'd =>jobNumber',
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
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-01-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-01-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-02-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-02-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-02-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-03-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-03-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-03-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-04-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-04-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-04-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-05-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-05-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-05-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-06-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-06-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-06-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-07-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-07-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-07-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-08-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-08-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-08-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-09-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-09-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-09-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-10-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-10-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-10-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-11-01`,
				FFooter: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-11-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-11-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
			{
				Header: `${year}-12-01`,
				Footer: (info) => {
					// Only calculate total visits if rows change
					let total = React.useMemo(
						() =>
							info.rows.reduce(
								(sum, row) => row.values[`${year}-12-01`] + sum,
								0
							),
						[info.rows]
					)
					total = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(total)

					return <>Total: {total}</>
				},
				accessor: `${year}-12-01`,
				Cell: ({ value }) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
			},
		],
		[]
	)

	const defaultColumn = React.useMemo(
		() => ({
			Filter: ColumnFilter,
		}),
		[]
	)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			columns: cols,
			data: items,
		},
		useFilters,
		useSortBy
	)
	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers?.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									{/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? ' 🔽'
												: ' 🔼'
											: ''}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows?.map((row) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								})}
							</tr>
						)
					})}
				</tbody>
				<tfoot>
					{footerGroups.map((footerGroup) => (
						<tr {...footerGroup.getFooterGroupProps()}>
							{footerGroup.headers.map((column) => (
								<td {...column.getFooterProps()}>{column.render('Footer')}</td>
							))}
						</tr>
					))}
				</tfoot>
			</table>
		</>
	)
}

export default PivotTableContainer
