import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
faFire,
faStar,
faBullseye,
faDumbbell,
faAward,
faTrophy,
faGift,
faBolt
}
from "@fortawesome/free-solid-svg-icons";


const badges=[
faFire,
faStar,
faBullseye,
faDumbbell,
faAward,
faTrophy,
faGift,
faBolt
];


function Badges(){


return (

<div className="
bg-white
rounded-2xl
p-6
border
border-border
">


<h3 className="mb-4">
Latest Badges
</h3>



<div className="
grid
grid-cols-4
gap-3
">


{
badges.map((badge,index)=>(

<div
key={index}
className="
aspect-square
rounded-xl
flex
items-center
justify-center
bg-primary/10
border
border-primary/20
"
>

<FontAwesomeIcon
icon={badge}
className="text-3xl text-yellow-500"
/>


</div>


))
}


</div>


</div>

)

}


export default Badges;