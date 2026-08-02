import { motion } from "framer-motion";


export default function EducationHeader(){

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

>


<h1 className="text-2xl lg:text-3xl mb-2">
Education
</h1>


<p className="text-muted-foreground text-sm lg:text-base">

Learn more about mental health and maintaining a balanced lifestyle.

</p>


</motion.div>

)

}