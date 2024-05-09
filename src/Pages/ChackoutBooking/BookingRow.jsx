

const BookingRow = ({ booking, handleDelete, handleConfirmUpdate }) => {
    const { _id, costomerName, date, email, img, price, status } = booking
 
    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-red-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {costomerName}

            </td>
            <td>{date}</td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
               {
               status === 'confirm' ? <span className=" font-bold text-primary">confimed</span> :
               <button onClick={() => handleConfirmUpdate(_id)} className="btn btn-ghost btn-xs">Plase Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;