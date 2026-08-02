import { Check } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activities } from "../../data/activityData";


export default function ActivitySelector({
selectedActivities,
toggleActivity
}){


return (

<div className="grid grid-cols-2 gap-3">

{activities.map(activity=>(

<button
key={activity.id}
onClick={()=>toggleActivity(activity.id)}
className={`
relative flex items-center gap-3 p-4 rounded-xl border-2
${
selectedActivities.includes(activity.id)
?
activity.color+" scale-105"
:
"border-border"
}
`}
>

{
selectedActivities.includes(activity.id)
&&
<div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">

<Check className="w-3 h-3"/>

</div>
}


<FontAwesomeIcon icon={activity.icon}/>

<span>
{activity.label}
</span>


</button>

))}

</div>

)

}