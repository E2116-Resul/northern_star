import { SearchBar } from "./components/searchbar/SearchBar";

import Item from "./components/item/Item";
import data from "./data/index";
import PrimarySearchAppBar from './components/PrimarySearchAppBar/PrimarySearchAppBar';
import Customer from './components/Customer/Customer';
import "./App.css";

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <Customer />
      <SearchBar />
      <div className="card-list">
        {data?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
