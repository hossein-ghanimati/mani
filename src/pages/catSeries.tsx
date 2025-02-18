import {  memo, useEffect, useState } from "react";
import HeaderTop from "../components/HeaderTop/HeaderTop";
import FooterBottom from "../components/footerBottom/footerBottom";
import CourseBox from "../components/coursebox/coursebox";
import { useParams } from "react-router-dom";
import useCourses from "../assets/hooks/courses";
import { dateFilterCourses } from "../assets/funcs/filterfuncs";
import { getUrlParam, setUrlParam } from "../assets/funcs/url";

const series = memo(() => {

  const [isSelectCourseType,setIsSelectCourseType] = useState(false)
  const [courses,setCourses] = useState([])
  const params = useParams().catName as any
  const [allCourses] = useCourses(params) as any
  const pp = getUrlParam('sort')
    

  useEffect(()=>{
    const filteredCourses = dateFilterCourses(pp,allCourses)
    setCourses(filteredCourses)
  },[params,allCourses?.length])

 
  const handleFilterDates = (e:any) => {
   const filteredCourses = dateFilterCourses(e.target.value,allCourses)
   setUrlParam('sort',e.target.value)
   setCourses(filteredCourses)
  }

  const handleSearchCourses = (e:string) =>{
    const filteredCourses = allCourses.filter((course:any)=>course.name.includes(e))
    setCourses(filteredCourses)
  }
 
 
    return (
      <>
      <HeaderTop /> 
      
        <div className='lg:w-full flex justify-start my-4 gap-3 dark:text-gray-300'>
              <div className='flex justify-center items-center sm:mr-2 lg:mr-0'>
                  <div className='h-14 bg-blue-700 w-14  rounded-full flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                       <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
              </div>
              <div className=' h-full flex flex-col justify-center'>
                  <p className='text-blue-700 font-bold akh'>دوره های آموزشی  </p>
                  <p className="text-[11px] font-bold opacity-70">دوره ببین، تمرین کن، برنامه نویس شو </p>
              </div>
        </div>
            <div className="w-full  flex justify-center">
           
        <div className="w-[96%] h-fit flex gap-3 ">
         <div className="bg-white dark:bg-gray-950 dark:text-gray-300 ssm:hidden md:inline-block min-h-full w-1/4">
           <div className="h-fit sticky top-[80px] ">
            
            <div className=" flex flex-col justify-center ">
              <p className="font-bold text-[13px] ">جست وجو دوره</p>
              <div className="bg-slate-200 dark:bg-gray-800 h-10 rounded-xl  overflow-hidden justify-between flex items-center my-2">
                <input type="text" onBlur={(e:any)=>handleSearchCourses(e.target.value)} className="bg-slate-200 h-10 dark:bg-gray-800" placeholder="عنوان دوره..." />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-3 w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
              </div>
              <div className="bg-slate-200 dark:bg-gray-800 h-10 flex overflow-hidden rounded-xl items-center justify-between my-2">
              <p className="mr-1 font-bold text-[13px]">در حال برگزاری</p>
               
              </div>
              <div onClick={()=>{setIsSelectCourseType(type => !type)}} className="select-none dark:bg-gray-800 bg-slate-200 h-10  flex  overflow-hidden rounded-xl hover:text-blue-600 transition-all cursor-pointer items-center justify-between my-2">
               
                  <div className="flex items-center">
  
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                       </svg>
                     <p className="mr-1 font-bold text-[13px]"> نوع دوره</p>
                  </div>
                     {isSelectCourseType?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={'ml-3 w-5 h-5 rotate-180'}>
                         <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                     </svg>:
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={'ml-3 w-5 h-5'}>
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                 </svg>}
                
             
              </div>
              {isSelectCourseType &&
              <div className="bg-slate-200 dark:bg-gray-800 my-3 h-24 rounded-2xl">
              <ul className="mt-2 mr-2 flex flex-col gap-2">
                
              <li className="flex items-center gap-1"><input type="radio" name="select" value={'free'} onChange={handleFilterDates} /><p className="font-bold text-[13px] opacity-70">رایگان</p></li>
              <li className="flex items-center gap-1"><input type="radio" name="select" value={'notfree'} onChange={handleFilterDates} /><p className="font-bold text-[13px] opacity-70">فقط نقدی</p></li>
              <li className="flex items-center gap-1"><input type="radio" name="select" value={'notfree'} onChange={handleFilterDates} /><p className="font-bold text-[13px] opacity-70">نقدی و اعضای ویژه</p></li>
              </ul>
            </div>}
             
            </div>
            
      </div>
         </div>
          <div className="md:w-3/4 dark:bg-gray-950 ssm:w-full bg-white h-fit">
           <div className=" h-10 flex items-center lg:gap-3 md:gap-2 ssm:gap-0 opacity-70">
            <div className="flex gap-1 items-center w-24 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" w-5 h-5">
                <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path>
              </svg>
              <p className="font-bold text-[13px] w-full">مرتب سازی:</p>
            </div>
            <div className=" rounded-2xl  w-full h-full">
             <select className="h-full bg-slate-200 dark:bg-gray-700 dark:text-gray-300 w-44  rounded-2xl" onChange={(e:any)=>{handleFilterDates(e)}}>
              <option value="defult" className="font-bold text-[11px]">انتخاب کنید</option>
              <option value="free" className="font-bold text-[11px]">رایگان</option>
              <option value="notfree" className="font-bold text-[11px]">غیر رایگان</option>
              <option value="oldest" className="font-bold text-[11px]">قدیمی ترین</option>
              <option value="new" className="font-bold text-[11px]">جدید ترین</option>
             </select>
            </div>
           </div>
          
           <div className=" my-4 justify-center items-center ssm:gap-28 ssm:mb-24 sa:gap-8 ssm:grid-cols-1 md:gap-5 lg:grid-cols-3 md:grid-cols-2 grid w-full h-full  sa:grid-cols-2 ">
           {courses?.map((course : any)=>
            <CourseBox key={course._id} {...course} />
            )}
           </div>
          
  
          </div>
        </div>
       
      </div>
      
      
        
         
           
      <FooterBottom />
      </>
    )
  })

export default series
