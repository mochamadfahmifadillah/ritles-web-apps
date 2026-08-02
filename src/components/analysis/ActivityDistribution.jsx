import { motion } from "framer-motion";


import {
 BarChart,
 Bar,
 XAxis,
 YAxis,
 CartesianGrid,
 Tooltip,
 Legend,
 ResponsiveContainer
} from "recharts";


import { activityData } from "../../data/analysisData";


export default function ActivityDistribution(){


return (

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:.3
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


<h3 className="font-semibold mb-4">
Activity Distribution (Hours per Day)
</h3>



<ResponsiveContainer
width="100%"
height={300}
>


<BarChart data={activityData}>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis dataKey="day"/>


<YAxis/>


<Tooltip/>


<Legend/>



<Bar

dataKey="study"

stackId="a"

fill="#6366F1"

name="Study"

/>



<Bar

dataKey="organization"

stackId="a"

fill="#A78BFA"

name="Organization"

/>



<Bar

dataKey="rest"

stackId="a"

fill="#10B981"

name="Rest"

/>



<Bar

dataKey="development"

stackId="a"

fill="#F59E0B"

name="Development"

/>



</BarChart>


</ResponsiveContainer>




<div
className="
mt-4
p-4
bg-yellow-50
rounded-xl
border
border-yellow-200
text-sm
text-yellow-800
"
>

⚠️
Energi menurun ketika waktu belajar terlalu tinggi.
Coba tambahkan jeda istirahat.

</div>


</motion.div>


)


}