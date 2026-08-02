import { motion } from "framer-motion";


export default function AnalysisHeader(){

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

>


<h1 className="text-2xl lg:text-3xl font-bold mb-2">
Analysis
</h1>


<p className="text-gray-500">
Monitor your activity patterns and mental well-being
</p>


</motion.div>

)

}