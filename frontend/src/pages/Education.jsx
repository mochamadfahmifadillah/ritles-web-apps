import EducationHeader from "../components/education/EducationHeader";
import TopicCard from "../components/education/TopicCard";
import ResourceCard from "../components/education/ResourceCard";
import EmergencyHelp from "../components/education/EmergencyHelp";

import {
topics,
resources
} from "../data/educationData";


export default function Education(){


return (

<div className="space-y-6">


<EducationHeader />


<div className="space-y-4">

{
topics.map((topic,index)=>(

<TopicCard
key={index}
topic={topic}
index={index}
/>

))
}

</div>



<ResourceCard
resources={resources}
/>



<EmergencyHelp />


</div>

)

}