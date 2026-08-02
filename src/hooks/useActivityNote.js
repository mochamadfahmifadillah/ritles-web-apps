import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createActivityNote } from "../services/activityService";


export default function useActivityNote() {


const navigate = useNavigate();


// ======================
// Mood User
// ======================

const [mood, setMood] = useState("");



// ======================
// Energy Level
// ======================

const [energy, setEnergy] = useState(50);



// ======================
// Selected Activities
// ======================

const [selectedActivities, setSelectedActivities] = useState([]);



// ======================
// Duration
// ======================

const [durations, setDurations] = useState({

belajar: 0,

organisasi: 0,

istirahat: 0,

pengembangan: 0,

});



const [loading, setLoading] = useState(false);




// ======================
// Toggle Activity
// ======================

const toggleActivity = (activityId)=>{


setSelectedActivities((prev)=>{


if(prev.includes(activityId)){


return prev.filter(
(id)=>id !== activityId
);


}


return [
...prev,
activityId
];


});


};





// ======================
// Submit Activity
// ======================

const handleSubmit = async ()=>{


try{


setLoading(true);



// Judul aktivitas

const title =
selectedActivities.join(", ");




// Isi catatan

const note = `
Mood: ${mood}

Energy: ${energy}

Aktivitas:

${selectedActivities
.map(
(activity)=> 
`${activity}: ${durations[activity] || 0} jam`
)
.join("\n")}

`;





await createActivityNote({

title,

note,

});




// kembali dashboard

navigate("/", {
replace:true
});



}


catch(error){


console.error(
"Activity Note Error:",
error
);


alert(
"Gagal menyimpan aktivitas"
);


}


finally{


setLoading(false);


}



};




return {


mood,

setMood,


energy,

setEnergy,


selectedActivities,

toggleActivity,


durations,

setDurations,


handleSubmit,


navigate,


loading,


};


}