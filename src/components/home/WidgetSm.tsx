'use client'

import React from "react";
import Card from "./Card";
import UserItem from "./UserItem";

const WidgetSm = () => {
  return (
    <Card height=''>
      <div >
        <div className="text-center">
          <h3 className=" font-bold  ">New Join Members</h3>
        </div>

        <ul className="text-xs mt-3">
          <UserItem
            image="https://i.postimg.cc/SN5CPtC9/person3.png"
            name="John Doe"
            username="Doe123"
          />
          <UserItem
            image="https://i.postimg.cc/SN5CPtC9/person3.png"
            name="John Doe"
            username="Doe123"
          />
          <UserItem
            image="https://i.postimg.cc/SN5CPtC9/person3.png"
            name="John Doe"
            username="Doe123"
          />
       
        </ul>
      </div>
    </Card>
  );
};

export default WidgetSm;
