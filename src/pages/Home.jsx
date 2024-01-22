import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";

import Products from "../components/Products";

function Home() {
  const data = useLoaderData();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
}

export default Home;
