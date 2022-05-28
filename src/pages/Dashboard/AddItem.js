import React from "react";

const AddItem = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.url.value;
    const desc = e.target.desc.value;
    const minquantity = e.target.minQuantity.value;
    const maxquantity = e.target.maxQuantity.value;
    const price = e.target.price.value;
    const addProduct = { name, img, desc, minquantity, maxquantity, price };
    console.log(addProduct);
    fetch("https://desolate-waters-73882.herokuapp.com/product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        addProduct,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
      });
  };

  return (
    <div>
      <h1 className="text-center pt-5 font-serif font-bold text-3xl text-blue-500">
        Add An Item
      </h1>
      <div className="bg-gray-200 px-10 py-10">
        <form
          onSubmit={handleForm}
          className="rounded-2xl w-full md:w-3/5 mx-auto py-5 bg-gray-300"
        >
          <h1 className="flex justify-center text-4xl font-bold font-serif text-blue-700 pt-5 pb-5">
            Fill This Form
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            required
            className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
          />
          <input
            type="text"
            name="url"
            placeholder="Image URL"
            required
            className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
          />
          <textarea
            name="desc"
            placeholder="Product Description"
            className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto resize-none"
          />
          <input
            type="number"
            name="maxQuantity"
            placeholder="Available Item"
            required
            className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
          />
          <input
            type="number"
            name="minQuantity"
            placeholder="Minimum Order"
            required
            className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
          />
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            required
            className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
          />
          <input
            type="submit"
            value="Add Product"
            className="mx-auto bg-blue-500 px-5 py-1 flex justify-center mt-8 rounded-md text-xl font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
