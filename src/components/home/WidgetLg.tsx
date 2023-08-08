"use client";

import React from "react";
import Card from "./Card";
import CustomerItem from "./CustomerItem";


const WidgetLg = () => {
  return (
    <Card height=''>
      <div className=" ">
        <h3 className='pb-4 font-bold text-center'>Latest transactions</h3>
        <table className="table-auto">
        <tbody >
          <tr className=''> 
            <th className='text-left pl-5 pb-3 text-[14px]'>Customer</th>
            <th className='text-left pb-3 text-[14px]'>Tel</th>
            <th className='text-left pb-3 text-[14px]'>Amount</th>
            <th className='text-left pb-3 text-[14px]'>Status</th>
          </tr>
           
            <CustomerItem
            name="Susan99"
            image="https://i.postimg.cc/tJCkySqj/person2.png"
            tel='+46834568394'
            amount="$223"
            type="Inactive"
            bgColor="bg-[#e59a9a]"
          />
            <CustomerItem
            name="Susan99"
            image="https://i.postimg.cc/tJCkySqj/person2.png"
            tel='+46834568394'
            amount="$223"
            type="Inactive"
            bgColor="bg-[#e59a9a]"
          />
             <CustomerItem
            name="Susan99"
            image="https://i.postimg.cc/tJCkySqj/person2.png"
            tel='+46834568394'
            amount="$223"
            type="Active"
            bgColor="bg-[#92d6f1]"
          />   
         </tbody>
        </table>
      </div>
    </Card>
  );
};

export default WidgetLg;
