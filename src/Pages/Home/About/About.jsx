import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row gap-x-16">
                <div className=' lg:w-1/2 relative'>
                    <img src={person} className=' max-w-3/4 rounded-xl shadow-2xl' />
                    <img src={parts} className=' max-w-sm rounded-xl shadow-2xl absolute top-48 left-60 border-8 border-white' />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className=' text-xl font-bold mt-2 text-orange-500'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn bg-orange-500">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;