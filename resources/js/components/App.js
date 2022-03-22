import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/manage/sass/index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ManageLayout from './layouts/ManageLayout';
import Galleries from './manage/Galleries';
import AddGallery from './manage/AddGallery';
import EditGallery from './manage/EditGallery';

axios.defaults.baseURL = "http://127.0.0.1:8000/";

function App() {
    return (
        <BrowserRouter>
            <div>
                <ManageLayout>
                    <Switch>
                        <Route exact path='/galleries' component={Galleries} />
                        <Route path='/edit/:id' component={EditGallery} />
                        <Route path='/create' component={AddGallery} />
                    </Switch>
                    {/* <Galleries /> */}
                </ManageLayout>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
