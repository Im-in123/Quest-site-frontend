import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer  } from "react-toastify";
import './App.css';

import AppRouter from './AppRouter';
 function App() {
  return (
    <div className="App">
         <Provider store={store}>
         <ToastContainer />

      <AppRouter/>
      </Provider>
     </div>
  );
}

export default App;
