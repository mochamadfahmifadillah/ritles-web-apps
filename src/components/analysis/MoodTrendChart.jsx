import { motion } from "framer-motion";

import {
AreaChart,
Area,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";


import { moodData } from "../../data/analysisData";


export default function MoodTrendChart(){


return (

<motion.div

initial={{opacity:0,y:20}}

animate={{opacity:1,y:0}}

className="
bg-white
rounded-2xl
p-6
border
"

>


<h3 className="font-semibold mb-4">
Mood Trend (This Week)
</h3>



<ResponsiveContainer width="100%" height={250}>


<AreaChart data={moodData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="day"/>


<YAxis/>


<Tooltip/>


<Area

type="monotone"

dataKey="score"

stroke="#6366F1"

fill="#6366F1"

fillOpacity={0.2}

/>


</AreaChart>


</ResponsiveContainer>



<div className="
mt-4
p-4
bg-blue-50
rounded-xl
">

Mood menurun di pertengahan minggu.
Pertimbangkan menambah waktu istirahat.

</div>



</motion.div>

)

}