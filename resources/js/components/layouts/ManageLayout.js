import React from 'react';
import Header from '../manage/Header';

// Gallery's management layout
const ManageLayout = (props) => {
    return ( 
        <React.Fragment>
            <Header />
            {/* Begin: g-main-content */}
            <div className="g-main-content">
                { props.children }
            </div>
            {/* End: g-main-content */}
        </React.Fragment>
    );
}
 
export default ManageLayout;