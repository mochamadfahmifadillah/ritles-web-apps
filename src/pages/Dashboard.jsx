import { useEffect, useState } from "react";

import WelcomeSection from "../components/dashboard/WelcomeSection";
import InsightCard from "../components/dashboard/InsightCard";
import ScoreCard from "../components/dashboard/ScoreCard";
import RiskCard from "../components/dashboard/RiskCard";
import ActivityChart from "../components/dashboard/ActivityChart";
import AchievementCard from "../components/dashboard/AchievementCard";
import ActionButton from "../components/dashboard/ActionButton";

import { getDashboardSummary } from "../services/dashboardService";


export default function Dashboard() {


const [dashboard, setDashboard] = useState(null);

const [loading, setLoading] = useState(true);



useEffect(() => {


async function fetchDashboard(){


try{


const data = await getDashboardSummary();


setDashboard(data);


}

catch(error){


console.error(
"Dashboard error:",
error
);


}


finally{


setLoading(false);


}


}



fetchDashboard();


}, []);





if(loading){


return (

<div className="
flex
justify-center
items-center
min-h-[300px]
text-muted-foreground
">

Loading dashboard...

</div>

);


}




if(!dashboard){


return (

<div className="
flex
justify-center
items-center
min-h-[300px]
text-muted-foreground
">

Dashboard tidak tersedia

</div>

);


}





return (

<div className="space-y-6">



<WelcomeSection

user={
dashboard.user
}

/>




<InsightCard

recommendation={
dashboard.latest_recommendation
}

/>





<div

className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
"

>



<ScoreCard

prediction={
dashboard.latest_prediction
}

/>




<RiskCard

prediction={
dashboard.latest_prediction
}

/>



</div>




<ActivityChart

activities={
dashboard.activity_notes
}

/>





<AchievementCard />





<ActionButton />




</div>


);


}