import WelcomeSection from "../components/dashboard/WelcomeSection";
import InsightCard from "../components/dashboard/InsightCard";
import ScoreCard from "../components/dashboard/ScoreCard";
import RiskCard from "../components/dashboard/RiskCard";
import ActivityChart from "../components/dashboard/ActivityChart";
import AchievementCard from "../components/dashboard/AchievementCard";
import ActionButton from "../components/dashboard/ActionButton";


export default function Dashboard(){


return (

<div className="space-y-6">


<WelcomeSection />


<InsightCard />



<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
">


<ScoreCard />

<RiskCard />


</div>



<ActivityChart />


<AchievementCard />


<ActionButton />


</div>

)

}