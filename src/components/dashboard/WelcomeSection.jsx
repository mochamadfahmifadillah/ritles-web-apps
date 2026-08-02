import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";


export default function WelcomeSection({
  user,
}) {


return (

<motion.div

initial={{
  opacity: 0,
  y: 20,
}}

animate={{
  opacity: 1,
  y: 0,
}}

transition={{
  duration: 0.5,
}}

>


<div className="flex items-center gap-2">

<h2 className="text-xl font-semibold">

Halo, {user?.full_name || "Pengguna"}!

</h2>


<FontAwesomeIcon
  icon={faHandPeace}
  className="text-yellow-500"
/>


</div>



<p className="text-muted-foreground text-sm lg:text-base">

{new Date().toLocaleDateString(
  "id-ID",
  {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
)}

</p>



</motion.div>

);

}