import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function RecommendationCard({
recommendations
}){


return (

<div>


<h2 className="mb-4">
Personalized Recommendations
</h2>


<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-4
">


{
recommendations.map((item,index)=>(


<motion.div

key={index}

className={`
bg-white
rounded-xl
p-5
border-2
${item.color}
`}

>


<div className="flex gap-3 mb-3">


<FontAwesomeIcon

icon={item.icon}

className={`
text-3xl
${item.iconColor}
`}

/>


<div>


<h4>
{item.title}
</h4>


<span className="
text-xs
bg-white/60
px-2
py-1
rounded-full
">

{item.category}

</span>


</div>


</div>


<p className="text-sm">

{item.description}

</p>


</motion.div>


))

}


</div>


</div>

)

}