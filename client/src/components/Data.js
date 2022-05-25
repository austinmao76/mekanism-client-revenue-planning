import { useAppContext } from '../context/appContext'
import React from 'react'

const Info = () => {
	const { clientRev: data } = useAppContext()
	return JSON.string(data)
}

export default Info
