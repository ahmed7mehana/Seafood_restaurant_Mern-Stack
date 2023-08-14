import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMeal, deleteMeal, getAllMeals, updateMeal, updateMealImage } from "../../redux/apiCall/MealApiCall";
import { AiFillCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from "react-loader-spinner";




const Meal = () => {
const [open,setOpen] = useState(false)
const [update,setUpdate] = useState(false)
const [title,setName]=useState(' ')
const [description,setDesc]=useState("")
const [category,setcategory]=useState("")
const [price,setPrice]=useState("")
const [file,setFile] = useState(null);

const { isMealCreated ,loading} = useSelector((state) => state.meal)
const { Meals} = useSelector((state) => state.meal)
const dispatch = useDispatch();

// Update Image Submit Handler
const updateImageSubmitHandler = (e,id) => {
  e.preventDefault();
  if (!file) return toast.warning("there is no file!");

  const formData = new FormData();
  formData.append("image", file);

  dispatch(updateMealImage(formData,id));
  console.log(id)
};

// Form Submit update Handler
const formSubmitUpdateHandler = (e,id) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Post Title is required");
    if (description.trim() === "") return toast.error("Post Description is required");
    if (category.trim() === "") return toast.error("Post category is required");
    if (price.trim() === "") return toast.error("Post price is required");


    dispatch(updateMeal({title,description,category,price},id));
    setUpdate(false)
    console.log("updated")
};

// Form Submit Handler
const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Post Title is required");
    if (description.trim() === "") return toast.error("Post Description is required");
    if (category.trim() === "") return toast.error("Post category is required");
    if (!file) return toast.error("Post Image is required");

const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    dispatch(createMeal(formData));

};

  useEffect(() => {
    dispatch(getAllMeals());
    if (isMealCreated) {
      setOpen(false)
      toast("Done successfully ")
      setTimeout(()=>{window.location.reload()}, 1000);
    }
  }, [isMealCreated]);




  return (
    <>
    <div className="flex ">
    <div className="flex-1 p-4 bg-gray-100">
<div className=" m-auto min-h-screen text-[10px] sm:text-[16px]    top-[10%] ">
   <div className="  flex-wrap  flex-row flex items-center justify-center  mt-[100px]">
   {Meals.map((m)=> (
  <div key={m._id} className="border-2 p-3 m-3  bg-gradient-to-br from-[#7cd1f9] to-[#efff00] ">
  <AiFillCloseCircle size={25} className=" cursor-pointer" onClick={()=>{
    dispatch(deleteMeal(m._id))
    setTimeout(()=>{window.location.reload()}, 2000);
    }} />
  <div  className="w-[150px] sm:w-[250px] flex flex-col items-center justify-center  ">
  <img src={m.image.url} className="sm:h-[150px]     w-full h-[60px]" alt=""></img>
  <div className="">
  <h1>  العنوان : {m.title}</h1>
  <p>الوصف : {m.description}</p>
  <p> التصنيف : {m.category}</p>
  <p> السعر : {m.price}</p>
   </div>
  </div>
  <button className=" text-green-300 hover:text-red-400 font-bold bg-gradient-to-br from-red-500 to-black  hover: bg-gradient-to-br hover:from-black hover:to-green-400   px-10 py-2 rounded-lg  " onClick={()=>{setUpdate(true)}}>Update</button>
  {update?(
    <form className=" bg-red-900 p-5 w-[80%] fixed left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] ">
   
    <button className="block text-gray-700 font-medium" onClick={(e)=>updateImageSubmitHandler(e,m._id)}>update img</button>
    <input
    type="file"
    name="file"
    id="file"
    className="update-post-upload"
    onChange={(e) => setFile(e.target.files[0])}
  />

    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-medium">title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setName(e.target.value)}
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
        onChange={(e) => setDesc(e.target.value)}
        className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-4">
    <label htmlFor="category" className="block text-gray-700 font-medium">category</label>
    <input
      type="category"
      value={category}
      onChange={(e) => setcategory(e.target.value)}
      className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
      required
    />
  </div>
    <div className="mb-4">
    <label htmlFor="password" className="block text-gray-700 font-medium">price</label>
    <input
      type="text"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
      required
    />
  </div>
    <div className="mt-6">
      <button
        type="submit"
        onClick={(e)=>formSubmitUpdateHandler(e,m._id)}
        className="w-fit m-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
      >
      {loading ? (
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="40"
          visible={true}
        />
      ) : (
        "Update Now"
      )}
      </button>
    </div>
  </form>
):""}
  </div>
   ))}
   <ToastContainer />
   </div>
<button className=" text-green-300 hover:text-red-400 font-bold bg-gradient-to-br from-red-500 to-black  hover: bg-gradient-to-br hover:from-black hover:to-green-400   rounded-lg p-2 uppercase    " onClick={()=>setOpen(!open)}>Create a new meal</button>
    {open?(
        <form className=" rounded-[20px] bg-red-900 p-5 w-[80%] fixed left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] ">
       
<AiFillCloseCircle size={30} onClick={()=>setOpen(false)}/>
        <input
        type="file"
        name="file"
        id="file"
        className="create-post-upload"
        onChange={(e) => setFile(e.target.files[0])}
      />

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">title</label>
          <input
            type="tect"
            value={title}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
        <label htmlFor="text" className="block text-gray-700 font-medium">category</label>
        <input
           placeholder=' سلطات_مقبلات_بيتزا_باستا_اطباق رئيسيه_حلويات_مشروبات+ريزوتو '
          type="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
        <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium">price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
        <div className="mt-6">
          <button
            type="submit"
            onClick={formSubmitHandler}
            className="w-fit m-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
          {loading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="40"
              visible={true}
            />
          ) : (
            "Create"
          )}
          </button>
        </div>
      </form>
    ):""}
    </div>
    </div>
  </div>
    </>
  );
};

export default Meal;
