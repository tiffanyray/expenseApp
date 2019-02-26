import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>  
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Warning! This is private info. Don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);



const requireAutentication = (WarppedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WarppedComponent {...props}/>
            ) : (
                <p>Please login to view the information</p>
            )}

        </div>
    );
};

const AuthInfo = requireAutentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="this is the detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is the detail" />, document.getElementById('app'));