import { motion } from "framer-motion";


export default function ScoreCard() {

const score = 72;


return (

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{
duration:.5,
delay:.2
}}
className="bg-white rounded-2xl p-6 border"
>


<h3 className="mb-4">
Skor Keseimbangan Hari Ini
</h3>



<div className="flex justify-center mb-4">

<div className="relative w-40 h-40">


<svg className="transform -rotate-90 w-40 h-40">


<circle
cx="80"
cy="80"
r="70"
stroke="currentColor"
strokeWidth="12"
fill="transparent"
className="text-muted"
/>



<circle
cx="80"
cy="80"
r="70"
stroke="currentColor"
strokeWidth="12"
fill="transparent"
strokeDasharray={`${2*Math.PI*70}`}
strokeDashoffset={
2*Math.PI*70*(1-score/100)
}
className="text-primary"
strokeLinecap="round"
/>


</svg>


<div className="absolute inset-0 flex flex-col items-center justify-center">

<span className="text-4xl text-primary">
{score}
</span>

<span className="text-sm text-muted-foreground">
dari 100
</span>

</div>


</div>

</div>


<p className="text-center text-sm text-muted-foreground">
Keseimbangan yang baik!
Tetap jaga pola aktivitasmu.
</p>


</motion.div>

)

}