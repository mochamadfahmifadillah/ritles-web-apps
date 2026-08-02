import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
return (
<div
className="
min-h-screen
grid
lg:grid-cols-2
bg-background
"
>


{/* LEFT SIDE BRAND */}

<div
className="
hidden
lg:flex
flex-col
justify-center
px-16
bg-gradient-to-br
from-indigo-600
to-purple-600
text-white
"
>


<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}

>


<div
className="
w-14
h-14
rounded-2xl
bg-white/20
flex
items-center
justify-center
mb-6
backdrop-blur
"
>

<Brain
className="
w-8
h-8
"
/>

</div>



<h1
className="
text-5xl
font-bold
tracking-tight
mb-4
"
>
Ritles
</h1>



<p
className="
text-xl
text-white/80
max-w-md
leading-relaxed
"
>

Understand your mental health,
balance your activities,
and build healthier daily habits.

</p>



<div
className="
mt-10
flex
items-center
gap-3
text-sm
text-white/80
"
>

<Sparkles
className="
w-5
h-5
"
/>

AI-powered mental fatigue analysis


</div>


</motion.div>


</div>




{/* RIGHT SIDE LOGIN */}


<div
className="
flex
items-center
justify-center
px-6
"
>


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
duration:0.5
}}

className="
w-full
max-w-md
"

>



{/* Mobile Logo */}

<div
className="
lg:hidden
text-center
mb-8
"
>


<div
className="
mx-auto
w-14
h-14
rounded-2xl
bg-primary
flex
items-center
justify-center
text-white
mb-3
"
>

<Brain/>

</div>



<h1
className="
text-3xl
font-bold
"
>
Ritles
</h1>


</div>





<div
className="
bg-card
border
rounded-2xl
shadow-sm
p-8
"
>


<div
className="
mb-6
"
>


<h2
className="
text-2xl
font-semibold
"
>
Welcome back
</h2>


<p
className="
text-sm
text-muted-foreground
mt-2
"
>
Login to continue your wellness journey.
</p>


</div>



<LoginForm />


</div>




<p
className="
text-center
text-sm
text-muted-foreground
mt-6
"
>

© 2026 Ritles. Balance Your Mind.

</p>



</motion.div>


</div>


</div>
);
}