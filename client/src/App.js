import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
// Toastify components required here for toastify pop up to be styled
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
    </div>
  );
}

export default App;
