

import Header from "../components/header";
import Footer from "../components/footer";

import useApi from "../hooks/useApi";
import ItemCard from "../components/itemCard";
import { useEffect, useState } from "react";

function Home() {
  const api = useApi();

  const [categoriesBoxes, setCategoriesBoxes] = useState([]);

  useEffect(() => {
    api
      .get(
        "https://api.adoptez1artisan.com/public/categories/listMainCategories"
      )
      .then((response) => {
        const tempCategoriesBoxes =[];
        response.data.data.map((index, item) => {
          console.log("ITEMM", index, item);
          tempCategoriesBoxes.push(
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              slug={item.slug}
            />
          );
        })
        setCategoriesBoxes(tempCategoriesBoxes)
      });
  }, []);

  return (
    <div> 
      <ItemCard />
      {categoriesBoxes}
      
    </div>
  );
}

export default Home;

