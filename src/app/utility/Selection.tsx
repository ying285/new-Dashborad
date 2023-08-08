import React,{SelectHTMLAttributes} from "react";
import { Capitalization } from "./help";

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
    title:string,
    name:string,
    id:string,
    value:string,
    value1:string,
    value2:string,
    value3:string

}

const Selection:React.FC<Props> = ({title, name, id, value1, value2, value3,value, onChange}) => {
  return (
    <div className='flex flex-col'>
      <label className="mr-2 mb-1 text-[14px]">{title}</label>
      <select name={name} id={id} className="border p-2 shadow-sm border-slate-300 rounded-md text-[14px]" value={value} onChange={onChange}>
      <option value={value1}>{Capitalization(value1)}</option>
        <option value={value2}>{Capitalization(value2)}</option>
        <option value={value3}>{Capitalization(value3)}</option>
      </select>
    </div>
  );
};

export default Selection;
