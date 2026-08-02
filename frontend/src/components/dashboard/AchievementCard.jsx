import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFire,
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

className="bg-white rounded-2xl p-6 border"

>


<h3 className="mb-4">
Pencapaian Kamu
</h3>



<div className="flex items-center gap-3 mb-6">


<FontAwesomeIcon
icon={faFire}
className="text-2xl text-orange-500"
/>


<div>

<p className="text-sm text-muted-foreground">
Streak
</p>


<p>
5 Hari Konsisten
</p>

</div>


</div>




<div className="grid grid-cols-3 gap-4">


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

)

}



function AchievementItem({
icon,
text,
color
}){


const styles={

green:
"bg-green-50 border-green-200 text-green-800",

blue:
"bg-blue-50 border-blue-200 text-blue-800",

orange:
"bg-orange-50 border-orange-200 text-orange-800",

};


return (

<div className={`
text-center
p-4
rounded-xl
border
${styles[color]}
`}>



<div className="text-3xl mb-2">

<FontAwesomeIcon icon={icon}/>

</div>



<p className="text-xs">
{text}
</p>


</div>

)

}