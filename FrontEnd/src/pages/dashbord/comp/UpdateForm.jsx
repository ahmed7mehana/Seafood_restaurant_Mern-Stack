import React, { useState } from 'react'
import { updateMeal } from '../../../redux/apiCall/MealApiCall'
import { useDispatch } from 'react-redux'

function UpdateForm({meal ,updateImageSubmitHandler}) {
const [title , setTitle]=useState(meal.title)
const [description , setdescription]=useState(meal.description)
const [category , setcategory]=useState(meal.category)
const [price , setprice]=useState(meal.price)

const dispatch = useDispatch();

console.log("")

  // Form Submit update Handler
  const formSubmitUpdateHandler = (e,id) => {
    e.preventDefault();
    dispatch(updateMeal({title,description,category,price},id));
    // setUpdate(false)
    console.log("updated")
  };

  return (
    <div >
    <form key={meal._id} className=" bg-red-900 p-5 w-[80%] fixed left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] ">
    <button className="block text-gray-700 font-medium" onClick={(e)=>updateImageSubmitHandler(e,meal._id)}>update img</button>


    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-medium">title</label>
      <input
        type="text"
        name="title"
        value={title}
        placeholder={meal.title}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block text-gray-700 font-medium">description</label>
      <input
        type="text"
        name="description"
        value={description}
        placeholder={description}

        onChange={(e) => setdescription(e.target.value)}
        className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-4">
    <label htmlFor="password" className="block text-gray-700 font-medium">category</label>
    <input
      type="category"
      value={category}
      placeholder={category}
      onChange={(e) => setcategory(e.target.value)}
      className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
      required
    />
  </div>
    <div className="mb-4">
    <label htmlFor="password" className="block text-gray-700 font-medium">price</label>
    <input
      type="number"
      value={price}
      placeholder={price}

      onChange={(e) => setprice(e.target.value)}
      className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
      required
    />
  </div>
    <div className="mt-6">
      <button
        type="submit"
        onClick={(e)=>formSubmitUpdateHandler(e,meal._id)}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
      >
        Update now
      </button>
    </div>
  </form>
    
    </div>
  )
}

export default UpdateForm