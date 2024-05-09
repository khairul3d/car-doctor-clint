import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import UseHooksSucure from "../../Hooks/UseHooksSucure";


const ChackoutBooking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const useHookSecure = UseHooksSucure()
    const url = `/chackout?email=${user}`
    useEffect(() => {
        // fetch(url, { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data);
        //     })
        useHookSecure.get(url)
        .then(res => setBookings(res.data))
    }, [url, useHookSecure])
    const handleDelete = id => {
        const proceed = confirm('are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/chackout/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('delete sucsessfully')
                        const remaining = bookings.filter(book => book._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }
    const handleConfirmUpdate = id => {
        fetch(`http://localhost:5000/chackout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(book => book._id !== id)
                    const update = bookings.find(book => book._id === id)
                    update.status = 'confirm'
                    const newUpdate = [update, ...remaining]
                    setBookings(newUpdate)
                }
            })
    }

    return (
        <div>
            <h1>chake out booking: {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>image</th>
                            <th className=" mr-20">Name</th>
                            <th>Date</th>
                            <th>email</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleConfirmUpdate={handleConfirmUpdate}
                                handleDelete={handleDelete}
                            ></BookingRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ChackoutBooking;