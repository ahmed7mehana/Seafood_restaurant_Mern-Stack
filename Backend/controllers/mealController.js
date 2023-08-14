const expressAsyncHandler = require("express-async-handler");
const { validMeal, Meal, validUpdateMeal } = require("../model/Meal");
const path =require("path");
const fs =require("fs");
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require("../Utils/cloudnary");
const { User } = require("../model/User");

/**
 *@description  Create
 * @route  /api/auth/create-meal
 * @method post
 * @access private
 */

module.exports.CreateMealCtrl=expressAsyncHandler(async(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    // [valid]
    if(!req.file){
        return res.status(400).json({message:" where the image ??"})
    }
    
    const {error} = validMeal(req.body)
    if(error){
        return res.status(400).json({message:error.details[0].message})
    }

//upload image
const imgpath= path.join(__dirname,`../images/${req.file.filename}`)
const result= await cloudinaryUploadImage(imgpath)

//create meal
const Nmeal= await Meal.create({
    title:req.body.title,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:{
        url:result.secure_url,
        publicId:result.public_id
    },

})


 //sent res
res.status(201).json(Nmeal)


 //remove img from server
fs.unlinkSync(imgpath)
})
/**
 *@description  update meal
 * @route  /api/auth/create-meal-update
 * @method put
 * @access private
 */
module.exports.UpdateMealCtrl=expressAsyncHandler(async(req,res)=>{

//[VALID]
const{error}=validUpdateMeal(req.body)
if(error){
    return res.status(400).json({message:error.details[0].message})
}
//GET MEAL
const meal =await Meal.findById(req.params.id)
if(!meal){
    return res.status(400).json({message:"dont found any meals"})
}
//[UPDATE MEAL]
const updatemeals= await Meal.findByIdAndUpdate(req.params.id,{
    $set:{
        title:req.body.title,
        description:req.body.description,
    }
},{new:true})

//[GIVE DATA TO CLINET]
res.status(200).json(updatemeals)
})
/**
 *@description  update meal-image
 * @route  /api/auth/create-meal-update
 * @method put
 * @access private
 */
 module.exports.UpdateMealimageCtrl=expressAsyncHandler(async(req,res)=>{

//[VALID]
    if(!req.file){
        return res.status(400).json({message:" where the new image ??"})
    }
    //GET MEAL
    const meal =await Meal.findById(req.params.id)
    if(!meal){
        return res.status(400).json({message:"dont found any meals"})
    }

//[delete old  MEAL image]
await cloudinaryRemoveImage(meal.image.publicId)

//upload new image
const imgpath= path.join(__dirname,`../images/${req.file.filename}`)
const result= await cloudinaryUploadImage(imgpath)

//[update meal image]
const updatemeals= await Meal.findByIdAndUpdate(req.params.id,{
    image:{
        url:result.secure_url,
        publicId:result.public_id
    }
},{new : true})

//[GIVE DATA TO CLINET]
res.status(200).json(updatemeals)

//[delet img from server]
fs.unlinkSync(imgpath)
    })

    /**
 *@description  delete meal
 * @route  /api/auth/del-meal
 * @method put
 * @access private
 */
 module.exports.DelMealCtrl=expressAsyncHandler(async(req,res)=>{
        const meal =await Meal.findById(req.params.id)

            if(!meal){ return res.status(400).json({message:"dont found any meals"})
        }else{
            await Meal.findByIdAndDelete(meal)
            await cloudinaryRemoveImage(meal.image.publicId)
        res.status(200).json({message:"meal has been deleted"})
        }


        })

/**
 *@description  get all meals
 * @route  /api/auth/all-meals
 * @method get
 * @access private
 */
 module.exports.GetAllMealsCtrl=expressAsyncHandler(async(req,res)=>{
//pagenation
  const meal_per_page=6
  const {pageNumber}=req.query

let meals

if(pageNumber){
meals=await Meal.find().skip(pageNumber - 1).limit(meal_per_page).sort({createdAt:-1 })

}else{
    meals = await Meal.find().sort({createdAt:-1 })
}
res.status(200).json(meals)
    })
    /**
 *@description  get  meals count
 * @route  /api/auth/count
 * @method get
 * @access private
 */
 module.exports.GetMealsCountCtrl=expressAsyncHandler(async(req,res)=>{
const mealscount =await Meal.count()
res.status(200).json(mealscount)
      })