import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return(
    <td>
      <Sparklines width={120} height={80}  data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </td>
  );
}
