import { Link } from 'react-router-dom';
import logo from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {
    const {creatUser} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const allData = {password, email}
        console.log(allData);
        creatUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-20">
                   <img src={logo} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        
                    <h1 className="text-4xl text-center font-bold">SignUp now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    <p className=' text-xl text-center mb-3'>All redy have an account? <Link className='text-orange-500' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;