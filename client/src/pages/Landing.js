import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<img src={main} alt='narrative' className='img main-img' />
				<div className='info'>
					<h1>
						Financial <span>Reporting</span>
					</h1>
					<p>login or register to continue</p>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
			</div>
		</Wrapper>
	)
}

export default Landing
