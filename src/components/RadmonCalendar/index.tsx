import React from 'react';

import { Container } from './styles';
import Heatmap from 'react-calendar-heatmap'
import {subYears} from 'date-fns'


type HeatmapValue =  {
  date: Date,
  count: number
}


const RadmonCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1)
  const endDate = new Date()

  const values: HeatmapValue[] = [

  ]

  values.push({date: new Date(), count: 3})

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={[]}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue)=> {
            let clampedCount = 0

            if(item !== null){
              clampedCount = Math.max(item.count , 0)
              clampedCount= Math.min(item.count , 4)

            }

            return `scale-${clampedCount}`
          }}

          showMonthLabels
        />  

      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  )
}

export default RadmonCalendar;