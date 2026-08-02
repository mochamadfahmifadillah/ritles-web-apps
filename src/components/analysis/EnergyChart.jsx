import { motion } from "framer-motion";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



export default function EnergyChart({
  data = [],
}) {



const chartData = data.map((item,index)=>({


  name: `Test ${index + 1}`,


  tidur: item.sleep_duration,


  belajar: item.study_duration,


  device: item.device_usage,


  tugas: item.task_load,


}));




return (


<motion.div


initial={{
opacity:0,
y:20,
}}


animate={{
opacity:1,
y:0,
}}


transition={{
duration:0.5,
delay:0.2,
}}


className="
bg-white
rounded-2xl
p-6
border
border-gray-200
shadow-sm
"


>


<h3 className="
font-semibold
mb-4
">

Lifestyle Analysis

</h3>




<ResponsiveContainer
width="100%"
height={250}
>


<AreaChart
data={chartData}
>


<CartesianGrid
strokeDasharray="3 3"
/>



<XAxis
dataKey="name"
/>



<YAxis />



<Tooltip />



<Area

type="monotone"

dataKey="tidur"

stroke="#6366F1"

fill="#6366F1"

fillOpacity={0.2}

name="Tidur (jam)"

/>



<Area

type="monotone"

dataKey="belajar"

stroke="#10B981"

fill="#10B981"

fillOpacity={0.2}

name="Belajar (jam)"

/>



<Area

type="monotone"

dataKey="device"

stroke="#F59E0B"

fill="#F59E0B"

fillOpacity={0.2}

name="Device (jam)"

/>



</AreaChart>


</ResponsiveContainer>





<div
className="
mt-4
p-4
bg-indigo-50
rounded-xl
border
border-indigo-200
text-sm
text-indigo-800
"
>


Analisis berdasarkan pola tidur,
belajar, penggunaan device,
dan beban tugas dari assessment kamu.


</div>




</motion.div>


);


}