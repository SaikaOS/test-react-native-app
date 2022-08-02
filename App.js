import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
        <Navigation />
        <StatusBar theme='auto'/>
    </Provider>
  );
}


