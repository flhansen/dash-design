import React from 'react';
import Typography from '../Typography/Typography';
import './Table.scss';

function Table({ headers = [], data = [], onClickItem = () => {}, ...props }) {

  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            {
              headers.map((header, idx) => (
                <th key={idx}>
                  <Typography type='caption'>{header}</Typography>
                </th>
              ))
            }
          </tr>
            {
              data.map((d, idx) => {
                const handleClick = () => {
                  onClickItem(d, idx);
                };

                return (
                  <tr className="items" onClick={handleClick} key={idx}>
                    {
                      d.map((c, idx) => (
                        <td key={idx}>
                          <Typography type='body2'>{c}</Typography>
                        </td>
                      ))
                    }
                  </tr>
                );
              })
            }
        </tbody>
      </table>
    </div>
  );

}

export default Table;
