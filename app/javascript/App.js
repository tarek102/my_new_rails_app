import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from "react-redux";
import { Greeting } from './components/greeting';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  )
}



export default App;