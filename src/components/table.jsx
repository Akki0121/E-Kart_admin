// TableComponent.jsx
import React from "react";

const TableComponent = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-slate-800">
          {/* bg-gray-200 */}
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-slate-900 text-left text-2xl font-medium text-white"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 border border-slate-900 text-lg text-gray-800"
                >
                  {column.field === "images" ? (
                    <img
                      src={row[column.field]}
                      alt="product image"
                      className="w-24"
                    />
                  ) : (
                    row[column.field]
                  )}
                </td>
                // {row[column.field]}
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
