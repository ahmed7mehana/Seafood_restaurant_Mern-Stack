import React, { useEffect } from 'react' 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeals } from '../redux/apiCall/MealApiCall';


export default function Menu() {
  const { Meals } = useSelector((state) => state.meal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMeals());
    window.scrollTo(0, 0);
  }, []);

                    console.log(Meals)


  return (
    <div className='  top-[600px] flex flex-col justify-center items-center bg-[#e5e2cf]'>
    <img src='../../images/menu.jpg'></img>

      <Accordion className=' w-[90%] mt-5 '>
        <AccordionSummary 
         className='h-[80px]'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
<h2 className='text-[20px] font-light'> سلطات </h2>

        </AccordionSummary>
    <div className='flex flex-row items-center justify-end flex-wrap bg-[#eef1f1]'>
    {Meals.filter((item) => item.category === "سلطات").map((m)=>(
      <AccordionDetails className='w-[400px]  flex flex-row p-4  sm:flex-nowrap  flex-wrap justify-center items-center' key={m._id}>
      <div className='text-end mr-2'>
      <h2 className=' font-bold'>
      {m.title}
    </h2>
        <p className='text-[12px]'>
{m.description}        </p>
        <Typography>
         {m.price} $
      </Typography>
      </div>
      <img className='w-[130px] h-[130px] rounded-sm' src={m.image.url}></img>
      </AccordionDetails>
  ))}

    </div>

      </Accordion>

      <Accordion className='  w-[90%] '>
        <AccordionSummary 
         className='h-[80px]'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
<h2 className='text-[20px] font-light'> مقبلات </h2>

        </AccordionSummary>
        <div className='flex flex-row items-center justify-end flex-wrap bg-[#eef1f1]'>
        {Meals.filter((item) => item.category === "مقبلات").map((m)=>(
          <AccordionDetails className='w-[400px]  flex flex-row p-4  sm:flex-nowrap  flex-wrap justify-center items-center' key={m._id}>
          <div className='text-end mr-2'>
          <h2 className=' font-bold'>
          {m.title}
        </h2>
            <p className='text-[12px]'>
    {m.description}        </p>
            <Typography>
             {m.price} $
          </Typography>
          </div>
          <img className='w-[130px] h-[130px] rounded-sm' src={m.image.url}></img>
          </AccordionDetails>
      ))}
    
        </div>


      </Accordion>






      <Accordion className=' w-[90%]  '>
      <AccordionSummary 
       className='h-[80px]'
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
<h2 className='text-[20px] font-light'> بيتزا </h2>

      </AccordionSummary>
  <div className='flex flex-row flex-wrap  bg-[#eef1f1]'>
  {Meals.filter((item) => item.category === "بيتزا").map((m)=>(
    <AccordionDetails className='w-[400px]  flex flex-row p-4' key={m._id}>
    <div className='text-end mr-2'>
    <h2 className=' font-bold'>
    {m.title}
  </h2>
      <p className='text-[12px]'>
{m.description}        </p>
      <Typography>
       {m.price} $
    </Typography>
    </div>
    <img className='w-[130px] h-[130px] rounded-sm' src={m.image.url}></img>
    </AccordionDetails>
))}

  </div>




    </Accordion>

    <Accordion className='  w-[90%]'>
    <AccordionSummary 
     className='h-[80px]'
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
<h2 className='text-[20px] font-light'> باستا </h2>

    </AccordionSummary>
<div className='flex flex-row flex-wrap  bg-[#eef1f1]'>
{Meals.filter((item) => item.category === "باستا").map((m)=>(
  <AccordionDetails className='w-[400px]  flex flex-row p-4' key={m._id}>
  <div className='text-end mr-2'>
  <h2 className=' font-bold'>
  {m.title}
</h2>
    <p className='text-[12px]'>
{m.description}        </p>
    <Typography>
     {m.price} $
  </Typography>
  </div>
  <img className='w-[130px] h-[130px] rounded-sm' src={m.image.url}></img>
  </AccordionDetails>
))}

</div>




  </Accordion>

  <Accordion className='  w-[90%] '>
  <AccordionSummary 
   className='h-[80px]'
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
<h2 className='text-[20px] font-light'> ريزوتو </h2>

  </AccordionSummary>
<div className='flex flex-row flex-wrap  bg-[#eef1f1]'>
{Meals.filter((item) => item.category === "ريزوتو").map((m)=>(
<AccordionDetails className='w-[400px]  flex flex-row p-4' key={m._id}>
<div className='text-end mr-2'>
<h2 className=' font-bold'>
{m.title}
</h2>
  <p className='text-[12px]'>
{m.description}        </p>
  <Typography>
   {m.price} $
</Typography>
</div>
<img className='w-[130px] h-[130px] rounded-sm' src={m.image.url}></img>
</AccordionDetails>
))}

</div>




</Accordion>

<Accordion className='  w-[90%] '>
<AccordionSummary 
 className='h-[80px]'
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
<h2 className='text-[20px] font-light'> اطباق رئيسيه </h2>

</AccordionSummary>
<div className='flex flex-row flex-wrap'>
{Meals.filter((item) => item.category === "اطباق رئيسيه").map((m)=>(
<AccordionDetails className='w-[400px]  flex flex-row p-4' key={m._id}>
<div className='text-end mr-2'>
<h2 className=' font-bold'>
{m.title}
</h2>
<p className='text-[12px]'>
{m.description}        </p>
<Typography>
 {m.price} $
</Typography>
</div>
<img className='w-[130px] h-[130px] rounded-sm' src={m.image.url}></img>
</AccordionDetails>
))}

</div>




</Accordion>


<Accordion className='  w-[90%] '>
<AccordionSummary 
 className='h-[80px]'
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
<h2 className='text-[20px] font-light'> حلويات </h2>

</AccordionSummary>
<div className='flex flex-row flex-wrap'>
{Meals.filter((item) => item.category === "حلويات").map((m)=>(
<AccordionDetails className='w-[400px]  flex flex-row p-4' key={m._id}>
<div className='text-end mr-2'>
<h2 className=' font-bold'>
{m.title}
</h2>
<p className='text-[12px]'>
{m.description}        </p>
<Typography>
 {m.price} $
</Typography>
</div>
<img className='w-[130px] h-[130px] rounded-sm' src={m.image.url}></img>
</AccordionDetails>
))}

</div>




</Accordion>

<Accordion className='  w-[90%] mb-5 '>
<AccordionSummary 
 className='h-[80px]'
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
<h2 className='text-[20px] font-light'> مشروبات </h2>

</AccordionSummary>
<div className='flex flex-row flex-wrap'>
{Meals.filter((item) => item.category === "مشروبات").map((m)=>(
<AccordionDetails className='w-[400px]  flex flex-row p-4' key={m._id}>
<div className='text-end mr-2'>
<h2 className=' font-bold'>
{m.title}
</h2>
<p className='text-[12px]'>
{m.description}        </p>
<Typography>
 {m.price} $
</Typography>
</div>
<img className='w-[130px] h-[130px] rounded-sm' src={m.image.url}></img>
</AccordionDetails>
))}

</div>




</Accordion>




    </div>
  );
}