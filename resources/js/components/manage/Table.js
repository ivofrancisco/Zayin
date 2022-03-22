import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../assets/manage/sass/tables.scss';

const Table = () => {

    return ( 
        <div className="g-content card sm-card shadow-sm">
            {/* Begin: card-header border-0 py-3 */}
            <div className="card-header border-0 py-3">
                {/* Begin: card-title */}
                <div className="card-title">
                    <h4 className="card-label">Items</h4>
                    <span className="mt-3">List of all Items</span>
                </div>
                {/* End: card-title */}
                {/* Begin: card-toolbar */}
                <div className="card-toolbar">
                    <Link to="/create" className="btn btn-mini info">
                        <i className="icon-plus"></i>
                    </Link>
                </div>
                {/* End: card-toolbar */}
            </div>
            {/* End: card-header border-0 py-3 */}

            {/* Begin: card-body py-0 */}
            <div className="card-body py-0">
                {/* Begin: table g-table */}
                <table className="table g-table">
                    {/* Begin: g-table-head */}
                    <thead className="table g-table">
                        {/* Begin: g-table-row text-left */}
                        <tr className="g-table-row text-left">
                            <th className="pl-0">title</th>
                            <th>created At</th>
                            <th>author</th>
                            <th className="pr-0 text-right">magage</th>
                        </tr>
                        {/* End: g-table-row text-left */}
                    </thead>
                    {/* End: g-table-head */}

                    {/* Begin: g-table-body */}
                    <tbody>

                        {
                            
                            
                        }

                    </tbody>
                    {/* End: g-table-body */}
                </table>
                {/* End: table g-table */}
            </div>
            {/* End: card-body py-0 */}
        </div>
     );
}
 
export default Table;