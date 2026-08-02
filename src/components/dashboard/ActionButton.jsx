import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";


export default function ActionButton(){

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
delay:.6
}}

>


<Link

to="/activityNote"

className="
flex
items-center
justify-center
gap-3
w-full
bg-primary
text-white
rounded-xl
py-4
font-medium
hover:bg-primary/90
transition-colors
shadow-sm
"

>

<TrendingUp
className="
w-5
h-5
"
/>


Mulai Catat Aktivitas


</Link>


</motion.div>

);

}