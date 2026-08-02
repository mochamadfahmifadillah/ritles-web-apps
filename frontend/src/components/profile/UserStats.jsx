import { motion } from "framer-motion";


const stats=[
{
label:"Active Days",
value:"23 Days"
},
{
label:"Longest Streak",
value:"12 Days"
},
{
label:"Earned Badges",
value:"8 Badges"
},
{
label:"AI Insights",
value:"34 Insights"
}
];


function UserStats(){

return (

<div className="
bg-white 
rounded-2xl 
p-6 
border 
border-border
">


<h3 className="mb-4">
Your Statistics
</h3>



<div className="grid grid-cols-2 gap-4">


{
stats.map((item,index)=>(


<motion.div
key={index}
className="
bg-muted
rounded-xl
p-4
"
>


<p className="
text-2xl
text-primary
">
{item.value}
</p>


<p className="text-sm text-muted-foreground">
{item.label}
</p>


</motion.div>


))
}


</div>


</div>

)

}


export default UserStats;