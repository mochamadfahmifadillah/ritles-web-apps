import {
Bell,
Shield,
HelpCircle,
ChevronRight
}
from "lucide-react";


const menu=[
{
icon:Bell,
title:"Notifications",
desc:"Manage reminders and notifications"
},
{
icon:Shield,
title:"Privacy & Security",
desc:"Manage your personal data"
},
{
icon:HelpCircle,
title:"Help & Support",
desc:"Frequently Asked Questions"
}
];


function SettingsMenu(){


return (

<div className="
bg-white
rounded-2xl
border
border-border
overflow-hidden
">


{
menu.map((item,index)=>{

const Icon=item.icon;


return (

<button
key={index}
className="
w-full
flex
items-center
gap-4
p-4
hover:bg-muted
border-b
last:border-none
"
>


<Icon className="w-5 h-5 text-primary"/>


<div className="flex-1 text-left">

<h4>
{item.title}
</h4>

<p className="text-xs text-muted-foreground">
{item.desc}
</p>

</div>


<ChevronRight/>

</button>

)

})
}


</div>

)

}


export default SettingsMenu;