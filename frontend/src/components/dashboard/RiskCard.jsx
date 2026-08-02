import { Brain, Battery, Moon, Heart } from "lucide-react";


export default function RiskCard(){

const riskLevel="Sedang";


return (

<div className="bg-white rounded-2xl p-6 border">


<h3 className="mb-4">
Indikator Risiko Kelelahan
</h3>


<div className="
px-6 py-3 
rounded-full
border-2
text-yellow-600
bg-yellow-50
border-yellow-200
text-center
mb-6
">

{riskLevel}

</div>



<div className="space-y-3">


<Item
icon={<Brain/>}
title="Konsentrasi"
value="Cukup Baik"
/>


<Item
icon={<Battery/>}
title="Energi"
value="Sedang"
/>


<Item
icon={<Moon/>}
title="Pola Tidur"
value="Perlu Perhatian"
/>


<Item
icon={<Heart/>}
title="Tingkat Stres"
value="Sedang"
/>


</div>


</div>

)

}



function Item({icon,title,value}){

return (

<div className="flex justify-between items-center">

<div className="flex gap-2 items-center">

{icon}

<span className="text-sm">
{title}
</span>

</div>


<span className="text-sm text-muted-foreground">
{value}
</span>


</div>

)

}