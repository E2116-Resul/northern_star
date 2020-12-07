import { SearchBar } from "./components/searchbar/SearchBar";

import "./App.css";
import CardList from "./components/item/CardList";
import PrimarySearchAppBar from './components/Menu';
import Customer from './components/Customer';

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <Customer />
      <SearchBar />
      <CardList />
    </>
  );
}

export default App;
