import { motion } from "framer-motion";


export default function SummaryStats({
  assessments = [],
  activities = [],
}) {



const totalAssessment =
  assessments.length;



const avgSleep =
  assessments.length > 0
    ?
      (
        assessments.reduce(
          (total,item)=>
          total + item.sleep_duration,
          0
        )
        /
        assessments.length
      ).toFixed(1)
    :
      0;




const avgStudy =
  assessments.length > 0
    ?
      (
        assessments.reduce(
          (total,item)=>
          total + item.study_duration,
          0
        )
        /
        assessments.length
      ).toFixed(1)
    :
      0;




const avgDevice =
  assessments.length > 0
    ?
      (
        assessments.reduce(
          (total,item)=>
          total + item.device_usage,
          0
        )
        /
        assessments.length
      ).toFixed(1)
    :
      0;




const stats = [


{
title:"Total Assessment",
value:`${totalAssessment}`,
color:"text-indigo-600",
},


{
title:"Rata-rata Tidur",
value:`${avgSleep} jam`,
color:"text-green-600",
},


{
title:"Rata-rata Belajar",
value:`${avgStudy} jam`,
color:"text-indigo-600",
},


{
title:"Device Usage",
value:`${avgDevice} jam`,
color:"text-orange-600",
},


];





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


<p className="
text-sm
text-muted-foreground
mb-2
">

{item.title}

</p>



<p className={`
text-2xl
font-bold
${item.color}
`}>

{item.value}

</p>



</div>


))


}




</motion.div>


);


}