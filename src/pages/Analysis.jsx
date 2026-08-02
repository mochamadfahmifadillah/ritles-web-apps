import AnalysisHeader from "../components/analysis/AnalysisHeader";
import MoodTrendChart from "../components/analysis/MoodTrendChart";
import EnergyChart from "../components/analysis/EnergyChart";
import ActivityDistribution from "../components/analysis/ActivityDistribution";
import SummaryStats from "../components/analysis/SummaryStats";


export default function Analysis(){

return (

<div className="space-y-6">


<AnalysisHeader/>


<MoodTrendChart/>


<EnergyChart/>


<ActivityDistribution/>


<SummaryStats/>


</div>

)

}