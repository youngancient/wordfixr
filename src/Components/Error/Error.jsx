import { useNavigate } from 'react-router-dom';
import './style.css';

const Error = ({msg}) => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/');
    }
    return ( 
        <div className="error-comp">
            <div className="inner-error">
                <div className="err-img inner-one">
                    <img src="/assets/mobile-error.svg" alt="error" className="mobile" />
                    <img src="/assets/desktop-error.svg" alt="error" className="desktop" />
                </div>
                <div className="error-cont inner-one">
                    <span>
                        <p>Something went wrong</p>
                        <p className='actual'>{msg}</p>
                    </span>
                    <div className="err-btn">
                        <button onClick={handleClick}>Back to Homepage</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Error;