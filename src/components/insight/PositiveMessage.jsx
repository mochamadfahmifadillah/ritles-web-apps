import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function PositiveMessage(){

return (

<motion.div

className="
bg-gradient-to-r
from-green-50
to-emerald-50
rounded-2xl
p-6
border
border-green-200
"

>


<div className="flex gap-3">


<FontAwesomeIcon
icon={faStar}
className="text-3xl text-yellow-500"
/>


<div>

<h3 className="text-green-800 mb-2">
Keep Up The Great Work!
</h3>


<ul className="text-sm text-green-700 space-y-2">

<li>
• You have logged activities for 5 consecutive days.
</li>

<li>
• You maintain time for self-development.
</li>

<li>
• You build healthier balance.
</li>


</ul>


</div>


</div>


</motion.div>


)

}