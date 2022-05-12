import React, { useReducer, useContext, useEffect } from 'react'
import reducer from './reducer'
import axios from 'axios'
import moment from 'moment'
import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	SETUP_USER_BEGIN,
	SETUP_USER_SUCCESS,
	SETUP_USER_ERROR,
	TOGGLE_SIDEBAR,
	LOGOUT_USER,
	UPDATE_USER_BEGIN,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_ERROR,
	HANDLE_CHANGE,
	CLEAR_VALUES,
	CREATE_JOB_BEGIN,
	CREATE_JOB_SUCCESS,
	CREATE_JOB_ERROR,
	GET_JOBS_BEGIN,
	GET_JOBS_SUCCESS,
	SET_EDIT_JOB,
	DELETE_JOB_BEGIN,
	EDIT_JOB_BEGIN,
	EDIT_JOB_SUCCESS,
	EDIT_JOB_ERROR,
	SHOW_STATS_BEGIN,
	SHOW_STATS_SUCCESS,
	CLEAR_FILTERS,
	CHANGE_PAGE,
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: '',
	alertType: '',
	user: user ? JSON.parse(user) : null,
	token: token,
	amount: '0',
	showSidebar: false,
	isEditing: false,
	editJobId: '',
	jobName: '',
	jobNumber: '',
	client: '',
	jobTypeOptions: [
		'Social Media Comms',
		'Experiential',
		'Brand',
		'Other',
		"McDonald's",
		'PM Pediatrics',
	],
	jobType: 'Social Media Comms',
	statusOptions: [
		'pending',
		'awaiting signature',
		'approved',
		'budget',
		'RFQ1',
		'RFQ2',
		'RFQ3',
	],
	status: 'pending',
	date: moment().format('YYYY-MM-DD'),
	jobs: [],
	totalJobs: 0,
	numOfPages: 1,
	page: 1,
	stats: {},
	monthlyApplications: [],
	search: '',
	searchStatus: 'all',
	searchType: 'all',
	jobNumber: '',
	client: '',
	sort: 'latest',
	sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
	startDate: moment().startOf('year').format('yyyy-MM-DD'),
	endDate: moment().format('yyyy-MM-DD'),
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const authFetch = axios.create({
		baseURL: '/api/v1',
	})
	// request
	authFetch.interceptors.request.use(
		(config) => {
			config.headers.common['Authorization'] = `Bearer ${state.token}`
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)
	// response interceptor
	authFetch.interceptors.response.use(
		(response) => {
			return response
		},
		(error) => {
			if (error.response.status === 401) {
				logoutUser()
			}
			return Promise.reject(error)
		}
	)

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT })
		clearAlert()
	}

	const clearAlert = () =>
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT })
		}, 3000)

	const addUserToLocalStorage = ({ user, token, location }) => {
		localStorage.setItem('user', JSON.stringify(user))
		localStorage.setItem('token', token)
		localStorage.setItem('location', location)
	}

	const removeUserFromLocalStorage = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		localStorage.removeItem('location')
	}

	const setupUser = async ({ currentUser, endPoint, alertText }) => {
		dispatch({ type: SETUP_USER_BEGIN })
		try {
			const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
			const { user, token, location } = data

			dispatch({
				type: SETUP_USER_SUCCESS,
				payload: { user, token, location, alertText },
			})

			addUserToLocalStorage({ user, token, location })
		} catch (error) {
			dispatch({
				type: SETUP_USER_ERROR,
				payload: { msg: error.response.data.msg },
			})
		}
		clearAlert()
	}

	const toggleSidebar = () => {
		dispatch({ type: TOGGLE_SIDEBAR })
	}

	const logoutUser = () => {
		dispatch({ type: LOGOUT_USER })
		removeUserFromLocalStorage()
	}

	const updateUser = async (currentUser) => {
		dispatch({ type: UPDATE_USER_BEGIN })
		try {
			const { data } = await authFetch.patch('/auth/updateUser', currentUser)

			// no token
			const { user, location } = data

			dispatch({
				type: UPDATE_USER_SUCCESS,
				payload: { user, location, token },
			})

			addUserToLocalStorage({ user, location, token: initialState.token })
		} catch (error) {
			if (error.response.status !== 401) {
				dispatch({
					type: UPDATE_USER_ERROR,
					payload: { msg: error.response.data.msg },
				})
			}
		}
		clearAlert()
	}

	const handleChange = ({ name, value }) => {
		dispatch({
			type: HANDLE_CHANGE,
			payload: { name, value },
		})
	}

	const clearValues = () => {
		dispatch({ type: CLEAR_VALUES })
	}

	const createJob = async () => {
		dispatch({ type: CREATE_JOB_BEGIN })
		try {
			const { jobName, jobNumber, client, amount, jobType, status, date } =
				state

			await authFetch.post('/jobs', {
				jobNumber,
				jobName,
				client,
				amount,
				jobType,
				status,
				date,
			})
			dispatch({
				type: CREATE_JOB_SUCCESS,
			})
			// call function instead clearValues()
			dispatch({ type: CLEAR_VALUES })
		} catch (error) {
			if (error.response.status === 401) return
			dispatch({
				type: CREATE_JOB_ERROR,
				payload: { msg: error.response.data.msg },
			})
		}
		clearAlert()
	}

	const getJobs = async () => {
		// will add page later
		const {
			page,
			search,
			client,
			jobNumber,
			searchStatus,
			searchType,
			sort,
			startDate,
			endDate,
		} = state
		let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}&startDate=${startDate}&endDate=${endDate}`
		if (search) {
			url = url + `&search=${search}`
		}
		if (client) {
			url = url + `&client=${client}`
		}
		if (jobNumber) {
			url = url + `&jobNumber=${jobNumber}`
		}
		dispatch({ type: GET_JOBS_BEGIN })
		try {
			const { data } = await authFetch(url)
			const { jobs, totalJobs, numOfPages } = data
			dispatch({
				type: GET_JOBS_SUCCESS,
				payload: {
					jobs,
					totalJobs,
					numOfPages,
				},
			})
		} catch (error) {
			// logoutUser()
		}
		clearAlert()
	}

	const setEditJob = (id) => {
		dispatch({ type: SET_EDIT_JOB, payload: { id } })
	}
	const editJob = async () => {
		dispatch({ type: EDIT_JOB_BEGIN })
		try {
			const { jobName, jobNumber, amount, jobType, status, date, client } =
				state

			await authFetch.patch(`/jobs/${state.editJobId}`, {
				jobNumber,
				jobName,
				amount,
				jobType,
				status,
				date,
				client,
			})
			dispatch({
				type: EDIT_JOB_SUCCESS,
			})
			dispatch({ type: CLEAR_VALUES })
		} catch (error) {
			if (error.response.status === 401) return
			dispatch({
				type: EDIT_JOB_ERROR,
				payload: { msg: error.response.data.msg },
			})
		}
		clearAlert()
	}
	const deleteJob = async (jobId) => {
		dispatch({ type: DELETE_JOB_BEGIN })
		try {
			await authFetch.delete(`/jobs/${jobId}`)
			getJobs()
		} catch (error) {
			logoutUser()
		}
	}
	const showStats = async () => {
		dispatch({ type: SHOW_STATS_BEGIN })
		try {
			const { data } = await authFetch('/jobs/stats')
			dispatch({
				type: SHOW_STATS_SUCCESS,
				payload: {
					stats: data.defaultStats,
					monthlyApplications: data.monthlyApplications,
					clientRev: data.clientRev,
				},
			})
		} catch (error) {
			console.log(error.response)
			// logoutUser()
		}

		clearAlert()
	}
	const clearFilters = () => {
		dispatch({ type: CLEAR_FILTERS })
	}
	const changePage = (page) => {
		dispatch({ type: CHANGE_PAGE, payload: { page } })
	}

	return (
		<AppContext.Provider
			value={{
				...state,
				displayAlert,
				clearAlert,
				setupUser,
				toggleSidebar,
				logoutUser,
				updateUser,
				handleChange,
				clearValues,
				createJob,
				getJobs,
				setEditJob,
				deleteJob,
				editJob,
				showStats,
				clearFilters,
				changePage,
			}}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}

export { AppProvider, initialState }
