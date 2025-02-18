import { useState } from "react"
import { showSwal } from "../../utils/swal";

const sessionBox = ({session}:any) => {
    const [isDrop,setIsDrop] = useState(false)

  return (
    <>
    <div onClick={()=>{setIsDrop(is=>!is)}} className=" select-none bg-slate-200 dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center cursor-pointer border group rounded-2xl h-11">
              <div className="flex gap-2 mr-3">
                <span className="font-bold text-[12px]">فصل اول</span>
                <p className="font-bold text-[12px] opacity-70 group-hover:opacity-100 ">معرفی</p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" opacity-70 group-hover:opacity-100 ml-4 w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </div>
            </div>
    {isDrop&&
    session.map((ses:any,index:number)=>
      <div key={ses._id} className="w-full flex justify-center h-9 items-center">
    <div className="w-4/5 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-xl border h-full justify-between flex items-center">
        <div className="flex items-center ">
        <p className="font-bold text-[12px] opacity-60 mx-2">{index + 1}</p>
        <span className="font-bold text-[12px] opacity-80">{ses.title}</span>
        </div>
        <div className="flex gap-2 h-full">
            <div className="flex items-center opacity-60">
                <p className="font-bold text-[12px]">{ses.time}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z">
                    </path>
                </svg>
            </div>
            {
              ses.free?<div className="bg-slate-200 dark:bg-gray-700 rounded-xl opacity-70 w-fit flex justify-between h-full hover:text-blue-700 transition-all cursor-pointer items-center px-2">
              <p className="font-bold text-[12px] ">مشاهده</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
              </svg>
          </div>:<div onClick={()=>{
            showSwal({title:'قفل',text:'شما قادر به مشاهده این جلسه نمی باشید',icon:'error'})
          }} className="bg-slate-200 dark:bg-gray-700 rounded-xl opacity-70 w-fit flex justify-between h-full hover:text-red-700 transition-all cursor-pointer items-center px-2">
              <p className="font-bold text-[12px] ">قفل</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
              </svg>
          </div>
            }
        </div>
    </div>
    </div>
    )}
    </>
  )
}

export default sessionBox
