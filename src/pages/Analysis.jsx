import { useEffect, useState } from "react";


import AnalysisHeader from "../components/analysis/AnalysisHeader";
import MoodTrendChart from "../components/analysis/MoodTrendChart";
import EnergyChart from "../components/analysis/EnergyChart";
import ActivityDistribution from "../components/analysis/ActivityDistribution";
import SummaryStats from "../components/analysis/SummaryStats";


import { getAssessmentHistory } from "../services/assessmentService";
import { getActivityNotes } from "../services/activityService";





export default function Analysis(){



const [assessments, setAssessments] = useState([]);

const [activities, setActivities] = useState([]);

const [loading, setLoading] = useState(true);






useEffect(()=>{


async function fetchAnalysis(){


try{



const assessmentData =
await getAssessmentHistory();



let activityData = [];



try{

activityData =
await getActivityNotes();

}
catch(error){

console.warn(
"Activity notes belum tersedia:",
error
);

}





setAssessments(

Array.isArray(assessmentData)

?

assessmentData

:

[]

);





setActivities(

Array.isArray(activityData)

?

activityData

:

[]

);





console.log(
"Assessment:",
assessmentData
);


console.log(
"Activities:",
activityData
);



}


catch(error){


console.error(
"Analysis error:",
error
);



}



finally{


setLoading(false);


}



}




fetchAnalysis();



},[]);








if(loading){


return (

<div className="
text-center
py-10
">

Loading analysis...

</div>

);


}







return (


<div className="space-y-6">





<AnalysisHeader

total={assessments.length}

/>





<MoodTrendChart

data={assessments}

/>





<EnergyChart

data={assessments}

/>





<ActivityDistribution

data={activities}

/>





<SummaryStats

assessments={assessments}

activities={activities}

/>





</div>


);



}