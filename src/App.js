import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./components/Views/HomeView";
import AddView from "./components/Views/AddView";
import EditView from "./components/Views/EditView";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/add" element={<AddView />} />
          <Route path="/edit/:id" element={<EditView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
