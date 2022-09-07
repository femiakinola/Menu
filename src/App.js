import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  // const filterItems = (category) => {
  // const newItems = items.filter((item) => item.category === category);
  // setMenuItems(newItems);
  // };
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    console.log(response);
    setCategories(response.data.categories);
  };
  return (
    <main>
      <div className="App">
        <h1>Menu</h1>
        {/* <header className="App-header"></header> */}
        {categories.map((item) => {
          return (
            <article key={item.idCategory} className="menu-item">
              <img
                src={item.strCategoryThumb}
                alt={item.strCategory}
                className="photo"
              />
              <div className="item-info">
                <header>
                  <h4>{item.strCategory}</h4>
                </header>
                <p className="item-text">{item.strCategoryDescription}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* <Menu /> */}
      {/* <Categories /> */}
    </main>
  );
}

export default App;
