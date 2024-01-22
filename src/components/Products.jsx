import ProductcratCard from "./ProductcratCard";

function Products({ products }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl w-80 rounded-md  bg-black py-2 text-center text-white">
          Shpping everyDay
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ullam aut
          ratione quidem ad sunt maxime nulla corporis ipsam. Consequatur magnam
          dolores aliquid. Maiores et voluptate eius consectetur nihil placeat.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 ">
        {products.map((Item, idx) => (
          <ProductcratCard key={idx} productItem={Item}></ProductcratCard>
        ))}
      </div>
    </div>
  );
}

export default Products;
