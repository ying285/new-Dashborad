import FeaturedInfo from "@/components/home/FeaturedInfo";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Charts from "../../app/utility/Charts";
import WidgetSm from "@/components/home/WidgetSm";
import WidgetLg from "@/components/home/WidgetLg";
import { getChartsData, getUsersData,getProductsData } from "../../app/utility/data";
import { TotalTransaction, TotalUser,TotalSales } from "../../app/utility/help";
import Card from "./Card";




const Home = async() => {

  const data = await getChartsData();
  const userData = await getUsersData();
  const productData = await getProductsData();
  const trans = TotalTransaction(userData?.users);
  const users=TotalUser(data?.charts)
  const sales=TotalSales(productData?.products)
  
  

  return (
    <div className=" px-4 grid gap-y-2 lg:gap-y-4">
      
      
      <div className="grid grid-cols-1 gap-x-2  lg:gap-x-4 sm:grid-cols-3">
       
        <div className=' '>
          <FeaturedInfo
         
          title="Transaction"
          mainNumber={trans}
          subNumber="-11.4"
          icon={<ArrowDownwardIcon className="text-red-500 text-base" />}
        />
        </div>
        
        <div className=' mt-2 sm:mt-0 '>
          <FeaturedInfo
          title="Sales"
          mainNumber={sales}
          subNumber="-1.4"
          icon={<ArrowDownwardIcon className="text-red-500 text-base" />}
        />
        </div>
        
      <div className='mt-2 sm:mt-0'>
         <FeaturedInfo
          title='Users'
          mainNumber={users}
          subNumber="+2.1"
          icon={<ArrowUpwardIcon className="text-emerald-500 text-base" />}
        />
      </div>
       
      </div>
      <div className="grid grid-cols-1">
        <Card height=''>
          <Charts
          title="User Analytics"
          userData={data?.charts}
          dataKey="ActiveUser"
         
        />
        </Card>
        
      </div>

      <div className="grid mb-4 md:grid-cols-[40%_58.95%] md:gap-x-2 lg:gap-x-4 lg:grid-cols-[40%_58.3%]">
        <div className=" ">
          <WidgetSm />
        </div>
       <div className='mt-2 md:mt-0'>
        <WidgetLg />
       </div>
        
      </div>
    </div>
  );
};

export default Home;
