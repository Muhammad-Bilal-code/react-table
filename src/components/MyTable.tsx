import React from "react";

const MyTable = ({ loading, dataScreen, columns, data }: any) => {
  console.log(loading);
  console.log(columns);

  return (
    <div>
      {dataScreen ? (
        loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  {columns.map((item: any, ind: any) => (
                    <th key={ind}>{item.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row: any, ind: any) => (
                  <tr key={ind}>
                    {columns.map((col: any, ind: any) => (
                      <td key={ind}>{col.btn ? col.btn(row) : row[col.key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : null}
    </div>
  );
};

export default MyTable;
