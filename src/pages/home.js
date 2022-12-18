import useApi from "../hooks/useApi";
import ItemCard from "../components/itemCard";
import { useEffect, useState } from "react";

import React from "react";

function Home() {
  const api = useApi();

  const [categoriesBoxes, setCategoriesBoxes] = useState([]);

  useEffect(() => {
    api
      .get(
        "public/categories/listMainCategories"
      )
      .then((response) => {
        const tempCategoriesBoxes = [];
        response.data.data.map((item, index) => {
         // console.log("ITEMM", index, item);
          tempCategoriesBoxes.push(
            <ItemCard
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              slug={item.slug}
            />
          );
          // console.log("diziii",tempCategoriesBoxes)
        });

        setCategoriesBoxes(tempCategoriesBoxes);
      })
      .catch((err) => {
        //console.log(err);
      });
  },[]);

  return (
    
    <main>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h3 className="display-4 fw-normal">FİND SERVİCES</h3>
        <p className="fs-5 text-muted">
          
        </p>
      </div>
      <div className="row row-cols-2 row-cols-md-3 mb-3 text-center">
        {categoriesBoxes}
      </div>
    </main>
    
  );
}

export default Home;
