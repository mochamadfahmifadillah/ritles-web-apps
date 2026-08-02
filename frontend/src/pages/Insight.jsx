import InsightHeader from "../components/insight/InsightHeader";
import InsightOverview from "../components/insight/InsightOverview";
import PatternCard from "../components/insight/PatternCard";
import RecommendationCard from "../components/insight/RecommendationCard";
import PositiveMessage from "../components/insight/PositiveMessage";

import {
patterns,
recommendations
} from "../data/insightData";


export default function Insight(){


return (

<div className="space-y-6">


<InsightHeader/>


<InsightOverview/>


<PatternCard
patterns={patterns}
/>


<RecommendationCard
recommendations={recommendations}
/>


<PositiveMessage/>


</div>

)

}