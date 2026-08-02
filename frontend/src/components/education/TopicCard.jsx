import { motion } from "framer-motion";

import {
Brain,
Heart,
Zap,
Moon
} from "lucide-react";


const icons = {
Brain,
Heart,
Zap,
Moon
};



export default function TopicCard({
topic,
index
}){


const Icon = icons[topic.icon];


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
delay:.1+(index*0.1)
}}

className={`
bg-white
rounded-2xl
p-6
border-2
${topic.color}
`}

>


<div className="flex items-start gap-4 mb-4">


<div className="
bg-white
rounded-full
p-3
shadow-sm
">

<Icon className="w-6 h-6"/>

</div>


<h3 className="flex-1">
{topic.title}
</h3>


</div>



<div className="
text-sm
text-foreground/80
whitespace-pre-line
leading-relaxed
">

{topic.content}

</div>


</motion.div>

)

}