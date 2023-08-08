import SalesCharts from "@/components/analytics/SalesCharts";
import TransactionCharts from "@/components/analytics/TransactionCharts";
import UserCharts from "@/components/analytics/UserCharts";
import Card from "@/components/home/Card";

const Analytics = () => {
  return (
    <div className=" flex-1 basis-4/5">
      <div className="block pl-5  md:flex">
        <div className="flex-1 mr-5">
          <Card height="">
            <UserCharts />
          </Card>
        </div>
        <div className="flex-1 pr-5 mt-5 md:mt-0">
          <Card height="">
            <TransactionCharts />
          </Card>
        </div>
      </div>
      <div className=" p-5">
        <Card height="">
          <SalesCharts />
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
