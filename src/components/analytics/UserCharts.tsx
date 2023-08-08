import React from 'react'
import Charts from '@/app/utility/Charts';
import {getChartsData} from '../../app/utility/data'
import {userChartData} from '../../app/utility/help'


const UserCharts = async() => {
  const data = await getChartsData();
  
  const product=userChartData(data.charts)
    
  return (
    <div className='pb-[4.4rem]'>
      <Charts
        title="User analytics"
        userData={product}
        dataKey="ActiveUser"
        
      />
    </div>
  )
}

export default UserCharts