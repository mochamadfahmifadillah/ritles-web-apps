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



export default function MoodTrendChart({
  data = [],
}) {



const chartData = data.map((item,index)=>({

  name: `Test ${index + 1}`,

  score:
    item.risk_level === "Tinggi"
      ? 90
      : item.risk_level === "Sedang"
        ? 60
        : 30,

}));





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
duration:.5
}}


className="
bg-white
rounded-2xl
p-6
border
"


>


<h3 className="
text-lg
font-semibold
mb-4
">

Risk Trend

</h3>




<div className="
h-64
">


<ResponsiveContainer
width="100%"
height="100%"
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



<YAxis
domain={[0,100]}
/>



<Tooltip />



<Area

type="monotone"

dataKey="score"

stroke="#6366F1"

fill="#6366F1"

fillOpacity={0.2}

/>



</AreaChart>


</ResponsiveContainer>


</div>





<p className="
mt-4
text-sm
text-muted-foreground
">


{chartData.length > 0

? "Pantau perubahan tingkat risiko kelelahan dari setiap assessment."

: "Belum ada data assessment."
}


</p>



</motion.div>


);


}