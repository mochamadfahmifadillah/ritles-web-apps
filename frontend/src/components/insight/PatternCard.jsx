import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";


export default function PatternCard({
patterns
}){


return (

<div>


<h2 className="mb-4">
Detected Patterns
</h2>


<div className="space-y-3">


{
patterns.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={index}

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

className={`
bg-white
rounded-xl
p-4
border-2
${item.color}
`}

>


<div className="flex gap-3">


<Icon className="w-5 h-5"/>


<div className="flex-1">

<h4>
{item.title}
</h4>


<p className="text-sm opacity-80">

{item.description}

</p>

</div>



{
item.severity==="high" &&
<AlertTriangle className="w-5 h-5"/>
}



</div>


</motion.div>


)

})

}


</div>


</div>

)

}