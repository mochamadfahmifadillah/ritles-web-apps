import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Moon,
  BookOpen,
  Smartphone,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import { predictMentalFatigue } from "../services/predictionService";


export default function Assessment() {


const navigate = useNavigate();



const [form, setForm] = useState({

sleep_duration: "",

study_duration: "",

device_usage: "",

task_load: "",

});



const [result, setResult] = useState(null);

const [loading, setLoading] = useState(false);





function handleChange(e){

setForm({

...form,

[e.target.name]: e.target.value,

});

}





async function handleSubmit(e){

e.preventDefault();


try{


setLoading(true);



const data = {

sleep_duration: Number(form.sleep_duration),

study_duration: Number(form.study_duration),

device_usage: Number(form.device_usage),

task_load: Number(form.task_load),

};




const response = await predictMentalFatigue(data);



setResult(response);




// kembali dashboard setelah hasil tampil

setTimeout(()=>{

navigate("/");

},2000);



}


catch(error){


console.error(

"Prediction error:",

error

);


}

finally{


setLoading(false);


}


}






const fields = [


{
name:"sleep_duration",
label:"Durasi Tidur",
placeholder:"Contoh: 7 jam",
icon:Moon,
},


{
name:"study_duration",
label:"Durasi Belajar",
placeholder:"Contoh: 6 jam",
icon:BookOpen,
},


{
name:"device_usage",
label:"Penggunaan Device",
placeholder:"Contoh: 8 jam",
icon:Smartphone,
},


{
name:"task_load",
label:"Beban Tugas",
placeholder:"Contoh: 7",
icon:ClipboardList,
},


];






return (


<div className="space-y-6">





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
duration:.5
}}

>


<h1 className="
text-2xl
font-bold
">

Assessment Fatigue

</h1>


<p className="
text-muted-foreground
">

Ukur tingkat kelelahan mental berdasarkan aktivitas harian kamu.

</p>


</motion.div>









<motion.form


onSubmit={handleSubmit}


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
delay:.1
}}


className="
bg-white
rounded-2xl
p-6
border
space-y-5
"


>



<h2 className="
text-lg
font-semibold
">

Data Aktivitas

</h2>






<div className="
grid
grid-cols-1
md:grid-cols-2
gap-5
">



{

fields.map((field)=>{


const Icon = field.icon;



return (


<div key={field.name}>


<label className="
text-sm
font-medium
block
mb-2
">

{field.label}

</label>




<div className="
relative
">


<Icon

className="
absolute
left-3
top-3
w-5
h-5
text-muted-foreground
"

/>




<input


type="number"


name={field.name}


value={form[field.name]}


onChange={handleChange}


placeholder={field.placeholder}


className="
w-full
border
rounded-xl
p-3
pl-11
focus:outline-none
focus:ring-2
focus:ring-primary/30
"

/>


</div>


</div>


);


})


}



</div>






<button


disabled={loading}


className="
w-full
bg-primary
text-white
rounded-xl
py-3
font-medium
hover:opacity-90
transition
"


>


{

loading

?

"Sedang Menganalisis..."

:

"Analisis Sekarang"

}



</button>



</motion.form>









{

result && (



<motion.div


initial={{
opacity:0,
scale:.95
}}

animate={{
opacity:1,
scale:1
}}


className="
bg-gradient-to-br
from-indigo-50
to-purple-50
rounded-2xl
p-6
border
border-indigo-100
space-y-5
"


>




<div className="
flex
items-center
gap-3
">


<div className="
bg-white
rounded-full
p-3
">


<Sparkles

className="
text-primary
w-6
h-6
"

/>


</div>




<div>


<h2 className="
font-semibold
text-primary
">

Hasil Prediksi AI

</h2>


<p className="
text-sm
text-muted-foreground
">

Analisis kondisi fatigue kamu

</p>


</div>


</div>








<div className="
grid
grid-cols-1
md:grid-cols-2
gap-4
">



<div className="
bg-white
rounded-xl
p-4
border
">


<p className="
text-sm
text-muted-foreground
">

Fatigue Score

</p>


<p className="
text-3xl
font-bold
">

{result.fatigue_score}

</p>


</div>





<div className="
bg-white
rounded-xl
p-4
border
">


<p className="
text-sm
text-muted-foreground
">

Risk Level

</p>


<p className="
text-xl
font-bold
">

{result.risk_level}

</p>


</div>


</div>







<p className="
bg-white
rounded-xl
p-4
border
text-sm
">

{result.recommendation}

</p>



<p className="
text-sm
text-center
text-muted-foreground
">

Mengalihkan ke dashboard...

</p>




</motion.div>



)


}




</div>


);


}