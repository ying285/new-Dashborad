import FeaturedInfo from "@/components/home/FeaturedInfo";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Charts from "../../app/utility/Charts";
import WidgetSm from "@/components/home/WidgetSm";
import WidgetLg from "@/components/home/WidgetLg";
import { getChartsData, getUsersData,getProductsData } from "../../app/utility/data";
import { TotalTransaction, TotalUser,TotalSales } from "../../app/utility/help";

import Card from "./Card";

const Home = async () => {
  const data = await getChartsData();
  const userData = await getUsersData();
  const productData = await getProductsData();
  const trans = TotalTransaction(userData?.users);
  const users=TotalUser(data.charts)
  const sales=TotalSales(productData.products)
  
  

  return (
    <div className="basis-4/5 ">
      
      <div className=" block w-100 md:flex w-100 justify-around">
        <div className='px-4 w-50'>
          <FeaturedInfo
         
          title="Transaction"
          mainNumber={trans}
          subNumber="-11.4"
          icon={<ArrowDownwardIcon className="text-red-500 text-base" />}
        />
        </div>
        
        <div className='mt-5 px-4 md:mt-0'>
          <FeaturedInfo
          title="Sales"
          mainNumber={sales}
          subNumber="-1.4"
          icon={<ArrowDownwardIcon className="text-red-500 text-base" />}
        />
        </div>
        
      <div className='mt-5 px-4 md:mt-0'>
         <FeaturedInfo
          title='Users'
          mainNumber={users}
          subNumber="+2.1"
          icon={<ArrowUpwardIcon className="text-emerald-500 text-base" />}
        />
      </div>
       
      </div>
      <div className="mt-5 px-4 md:px-4">
        <Card height=''>
          <Charts
          title="User Analytics"
          userData={data?.charts}
          dataKey="ActiveUser"
         
        />
        </Card>
        
      </div>

      <div className="block md:flex  mt-5 px-4 mb-5">
        <div className="w-100 mr-8 mb-5 flex-1 w-full md:basis-2/5 ">
          <WidgetSm />
        </div>
       <div className='w-100  flex-1  md:basis-3/5'>
        <WidgetLg />
       </div>
        
      </div>
    </div>
  );
};

export default Home;
