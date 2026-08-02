import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheck,
  faBed,
  faBook,
} from "@fortawesome/free-solid-svg-icons";



export default function AchievementCard(){


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
space-y-4
"


>


<h3 className="
text-lg
font-semibold
">

Achievement

</h3>




<div className="
space-y-3
">


<AchievementItem

icon={faCheck}

text="Hari Seimbang"

color="green"

/>




<AchievementItem

icon={faBed}

text="Istirahat Cukup"

color="blue"

/>




<AchievementItem

icon={faBook}

text="Aktif Berkembang"

color="orange"

/>



</div>



</motion.div>


);


}





function AchievementItem({
icon,
text,
color
}) {



const styles = {


green:
"bg-green-50 border-green-200 text-green-800",



blue:
"bg-blue-50 border-blue-200 text-blue-800",



orange:
"bg-orange-50 border-orange-200 text-orange-800",


};




return (


<div

className={`
flex
items-center
gap-3
px-4
py-3
rounded-xl
border
${styles[color]}
`}

>


<div className="
w-8
h-8
rounded-full
bg-white
flex
items-center
justify-center
">


<FontAwesomeIcon

icon={icon}

/>


</div>



<span className="
text-sm
font-medium
">

{text}

</span>



</div>


);


}