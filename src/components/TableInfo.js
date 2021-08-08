import React from 'react'
import "../styles/TableInfo.css";

function TableInfo({ countries }) {
    return (
        <div className="tableInfo">
            {countries.map(({ country, cases }) => (
               <tr>
                   <td>{country}</td>
                   <td>
                        <strong>{cases}</strong>
                    </td>
               </tr>
            ))}
        </div>
    )
}

export default TableInfo;