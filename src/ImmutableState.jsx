import React, { useState } from 'react';


const ImmutableState = () => {
    const [data,setData]=useState({
        nama: 'khen',
        tanggalLahir: '13 April 2002',
    });
    
    const changeState = () => {
      // Untuk mengubah state, gunakan fungsi updater dengan spread operator
      setData((prevData) => ({
        ...prevData,
        nama: 'Hafids',
        tanggalLahir : '2 juni 2002'
      }));

    }
    
  return (
    <div className="bg-white shadow-md rounded-md mx-4 my-6 px-4 py-2">
      <h1 className="text-gray-500 text-center font-semibold">IMMUTABLE REACTJS MATA KULIAH FRONTEND</h1>
      <div className="mt-8">
        <h2 className="text-center text-gray-500">Bagian Immutable State</h2>
        <h3 className="text-center text-gray-500 mt-4">{data.nama}
          <span className="text-sm text-gray-400"> ({data.tanggalLahir})</span>
        </h3>
        <button onClick={changeState} className="flex mx-auto mt-6 mb-4 px-4 py-1 bg-indigo-500 text-white rounded-md shadow-md shadow-indigo-500 hover:bg-indigo-600 hover:shadow-indigo-600 transition duration-300">
          Change State
        </button>
      </div>
    </div>
  );
};

export default ImmutableState;




// const ImmutableState = () => {
//     const [data, setData] = useState({
//         nama: 'khen',
//         tanggalLahir: '13 April 2002',
//     });
    
//     const changeState = () => {
//       // Untuk mengubah state, gunakan fungsi updater dengan spread operator
//       setData((prevData) => ({
//         ...prevData,
//         nama: 'hafids',
//         tanggalLahir : '14 april 244'
//       }));
//     };
//   return (
//     <div className="bg-white shadow-md rounded-md mx-4 my-6 px-4 py-2">
//       <h1 className="text-gray-500 text-center font-semibold">IMMUTABLE REACTJS MATA KULIAH FRONTEND</h1>
//       <div className="mt-8">
//         <h2 className="text-center text-gray-500">Bagian Immutable State</h2>
//         <h3 className="text-center text-gray-500 mt-4">{data.nama}
//           <span className="text-sm text-gray-400"> ({data.tanggalLahir})</span>
//         </h3>
//         <button onClick={changeState} className="flex mx-auto mt-6 mb-4 px-4 py-1 bg-indigo-500 text-white rounded-md shadow-md shadow-indigo-500 hover:bg-indigo-600 hover:shadow-indigo-600 transition duration-300">
//           Change State
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImmutableState;