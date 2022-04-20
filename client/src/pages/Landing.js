import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt='jobify' className='logo' />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
						excepturi fuga facere, at illo labore non magni sunt quaerat,
						facilis libero omnis recusandae dignissimos aspernatur ratione quos,
						delectus impedit. Animi!
					</p>
					<button className='btn btn-hero'>Login/Register</button>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	)
}

export default Landing
