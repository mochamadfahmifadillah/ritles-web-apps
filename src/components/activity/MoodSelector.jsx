import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { moods } from "../../data/activityData";


export default function MoodSelector({
  mood,
  setMood,
}) {

return (
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

{moods.map((item)=>(

<button
key={item.value}
onClick={()=>setMood(item.value)}
className={`
flex flex-col items-center gap-2 p-4 rounded-xl border-2
transition-all
${
mood===item.value
?
"border-primary bg-primary/5 scale-105"
:
"border-border hover:border-primary/30"
}
`}
>

<FontAwesomeIcon
icon={item.icon}
className={`text-3xl ${item.color}`}
/>

<span>{item.label}</span>

</button>

))}

</div>
)

}