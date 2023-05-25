import AllRoutes from './AllRoutes';
import './dist/css/main.css';
import Blogpage from './pages/Blogpage';
import Covid from './pages/Covid';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <AllRoutes />
      {/* <Covid />
      <Blogpage /> */}
    </div>
  );
}

export default App;
