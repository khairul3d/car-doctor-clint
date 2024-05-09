
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

   
const Chackout = () => {
    const servises = useLoaderData()
    const { _id, title, price, img } = servises;
    const {user} = useContext(AuthContext)

    const handleChackOut = e => {
        e.preventDefault();
        const form = e.target ;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const order = {
            costomerName: name,
            date: date, 
            email: email,
            img, 
            servises: title,
            servises_id: _id,
            price: price
         
        }
        console.log(order);

        fetch('http://localhost:5000/chackout',{
             method: 'POST',
             headers: {
                'content-type': 'application/json'
             },
             body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('services chackout succsessfully')
            }
        })
            
    }
    
   
    return (
        <div>
            <h1>book service:{title} </h1>
            <div>
                <div>
                    <form onSubmit={handleChackOut} className="card-body">
                       <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date"  className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Ammout</span>
                            </label>
                            <input type="text" defaultValue={'$'+price} className="input input-bordered" required />
                           
                        </div>
                       
                       </div>
                       <div className="form-control w-full mt-6">
                            <input className="btn btn-primary btn-block" type="submit" value="Order Confrom" />
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Chackout;