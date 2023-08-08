import React,{InputHTMLAttributes} from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    title:string,
    type:string,
    placeholder:string,
    width:string, 
    name:string
   
    
}

const InputItem:React.FC<Props> = ({title, placeholder, type, width,name, onChange}) => {
  return (
    <div className='flex flex-col mt-3'>
      <label className='text-[14px] mb-1'>{title}</label>
      <input type={type} placeholder={placeholder} className={`px-4 py-2 shadow-sm focus:outline-none border border-slate-300 rounded-md focus:ring-sky-500 focus:border-sky-500 placeholder: text-[13px] w-${width}`} name={name}onChange={onChange} />
    </div>
  );
};

export default InputItem;
