import { motion } from "framer-motion";


const stats = [

{
title:"Average Mood",
value:"68/100",
color:"text-indigo-600"
},


{
title:"Average Energy",
value:"69%",
color:"text-green-600"
},


{
title:"Total Study",
value:"34 hrs",
color:"text-indigo-600"
},


{
title:"Total Rest",
value:"20 hrs",
color:"text-green-600"
}

];



export default function SummaryStats(){


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
delay:.4
}}

className="
grid
grid-cols-2
lg:grid-cols-4
gap-4
"

>


{
stats.map((item)=>(


<div

key={item.title}

className="
bg-white
rounded-xl
p-4
border
border-gray-200
shadow-sm
"

>


<p className="text-sm text-gray-500 mb-1">
{item.title}
</p>



<p
className={`
text-2xl
font-bold
${item.color}
`}
>

{item.value}

</p>


</div>


))

}



</motion.div>


)


}