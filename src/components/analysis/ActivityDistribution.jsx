import { motion } from "framer-motion";
import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid,
} from "recharts";



export default function ActivityDistribution({
data = [],
}) {



const activityCount = {};



// ======================
// Hitung jumlah aktivitas
// ======================


data.forEach((item)=>{


const title =
item.title || "Lainnya";



activityCount[title] =
(activityCount[title] || 0) + 1;



});




// ======================
// Format Chart Data
// ======================


const chartData =
Object.keys(activityCount).map((key)=>({

name:key,

total:activityCount[key],

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
duration:.5,
delay:.3,
}}

className="
bg-white
rounded-2xl
p-6
border
border-gray-200
shadow-sm
space-y-5
"

>


<h3 className="
font-semibold
">

Activity Distribution

</h3>




{
chartData.length === 0 ? (


<p className="
text-sm
text-muted-foreground
">

Belum ada aktivitas.


</p>



) : (


<ResponsiveContainer

width="100%"

height={300}

>


<BarChart

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



<Bar

dataKey="total"

fill="#6366F1"

radius={[8,8,0,0]}

name="Jumlah Aktivitas"

/>



</BarChart>


</ResponsiveContainer>



)

}





<div className="
p-4
bg-indigo-50
rounded-xl
border
border-indigo-100
text-sm
text-indigo-800
">


Pantau keseimbangan aktivitas harian.
Terlalu banyak aktivitas tanpa istirahat dapat meningkatkan risiko kelelahan.


</div>




</motion.div>


);


}