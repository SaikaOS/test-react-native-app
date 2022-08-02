import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./Home";
import Header from "./components/Header";

export default function App() {
  return (
    <Provider store={store}>
        <Header/>
        <Navigation />
    </Provider>
  );
}


