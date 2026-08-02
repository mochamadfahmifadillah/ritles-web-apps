import { motion } from "framer-motion";


export default function EmergencyHelp(){

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
delay:.9
}}

className="
bg-gradient-to-r
from-red-50
to-pink-50
rounded-2xl
p-6
border
border-red-200
"

>


<h3 className="mb-3 text-red-800">
Need Immediate Help?
</h3>


<p className="text-sm text-red-700 mb-4">

If you're experiencing a mental health crisis
or need professional support, don't hesitate
to contact the following services.

</p>



<div className="space-y-2">


<div className="bg-white rounded-lg p-3">

<p className="text-sm">

<span className="font-medium text-red-800">
Sejiwa Counseling Line
</span>

<br/>

119 ext. 8 (24 Hours)

</p>

</div>



<div className="bg-white rounded-lg p-3">

<p className="text-sm">

<span className="font-medium text-red-800">
Into The Light Indonesia
</span>

<br/>

+62 812 9295 1119

</p>

</div>


</div>


</motion.div>

)

}