import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";


export default function ResourceCard({
resources
}){


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
delay:.5
}}

className="
bg-white
rounded-2xl
p-6
border
"

>


<div className="flex items-center gap-2 mb-4">

<BookOpen className="w-5 h-5 text-primary"/>

<h3>
Additional Resources
</h3>

</div>



<div className="space-y-3">


{
resources.map((item,index)=>(


<a

key={index}

href={item.link}

className="
block
p-4
bg-muted
rounded-xl
hover:bg-muted/70
transition
"

>


<h4 className="text-primary mb-1">

{item.title}

</h4>


<p className="text-sm text-muted-foreground">

{item.description}

</p>


</a>


))

}


</div>


</motion.div>

)

}