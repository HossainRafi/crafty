import React from "react";

const AddItem = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.url.value;
    const desc = e.target.desc.value;
    const minQuantity = e.target.minQuantity.value;
    const maxQuantity = e.target.maxQuantity.value;
    const price = e.target.price.value;
    const addProduct = { name, img, desc, minQuantity, maxQuantity, price };
    console.log(addProduct);
    fetch("http://localhost:5000/product", {
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
    <div className="bg-gray-200 py-10">
      <form
        onSubmit={handleForm}
        className="rounded-2xl md:w-[500px] md:mt-44 py-5 bg-gray-400"
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
          value="Add Item"
          className="mx-auto bg-slate-500 px-5 py-1 flex justify-center mt-8 rounded-md text-xl font-bold"
        />
      </form>
    </div>
  );
};

export default AddItem;
