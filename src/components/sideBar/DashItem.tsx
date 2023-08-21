"use client";
import React from "react";
import Link from "next/link";
import { MergeWords } from "@/app/utility/help";

interface Props {
  item: string;
  icon: React.ReactNode;
  active: string;
}

const DashItem: React.FC<Props> = ({ item, icon, active }) => {
  return (
    <div>
      <ul className="p-[5px] cursor-pointer text-sm/[17px] ">
        <li className={`p-[5px]  rounded-md  mb-2 hover:bg-gray-200 ${active}`}>
          <Link
            href={item === "Home" ? "/" : `/${MergeWords(item)}`}
            className="flex items-center"
          >
            <span className="">{icon}</span>

            <p className="ml-2 hidden xl:block">{item}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashItem;
