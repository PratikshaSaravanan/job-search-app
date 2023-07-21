import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/Testing'
import {Logo} from '../components'
import {Link} from 'react-router-dom'
const Landing = () => {
    return(
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className = "info">
                    <h1>Job<span>Tracking</span>App</h1>
                    <p>
                    Work that is done to earn a living is simply called a job.
                    Many people define a job in various ways. 
                    Some measure it with high payment, some with fewer working hours and some with good working conditions.
                    </p>
                    <Link to='/register' className ="btn btn-hero">Login/Register</Link>
                </div>
                <img src={main} alt="job hunt" classname ="img main-img" />
            </div>
        </Wrapper>
    )
   
}




export default Landing