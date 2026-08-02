import { motion } from "framer-motion";


const activities = [
  {
    name: "Belajar",
    value: 35,
    color: "#6366F1",
  },
  {
    name: "Organisasi",
    value: 25,
    color: "#A78BFA",
  },
  {
    name: "Istirahat",
    value: 20,
    color: "#10B981",
  },
  {
    name: "Pengembangan Diri",
    value: 20,
    color: "#F59E0B",
  },
];


export default function ActivityChart() {

return (

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{
duration:.5,
delay:.4
}}
className="bg-white rounded-2xl p-6 border"
>


<h3 className="mb-4">
Keseimbangan Aktivitas
</h3>



<div className="space-y-4">

{
activities.map((activity,index)=>(

<div key={activity.name}>


<div className="flex justify-between mb-2">

<span className="text-sm">
{activity.name}
</span>


<span className="text-sm text-muted-foreground">
{activity.value}%
</span>


</div>



<div className="w-full bg-muted rounded-full h-3 overflow-hidden">


<motion.div

initial={{
width:0
}}

animate={{
width:`${activity.value}%`
}}

transition={{
duration:1,
delay:.5+(index*0.1)
}}

className="h-full rounded-full"

style={{
backgroundColor:activity.color
}}

/>


</div>


</div>

))
}


</div>


</motion.div>

)

}