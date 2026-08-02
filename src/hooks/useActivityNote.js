import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function useActivityNote() {

  const navigate = useNavigate();


  // Mood user
  const [mood, setMood] = useState("");


  // Energy level (0-100)
  const [energy, setEnergy] = useState(50);


  // Aktivitas yang dipilih
  const [selectedActivities, setSelectedActivities] = useState([]);


  // Durasi setiap aktivitas
  const [durations, setDurations] = useState({
    belajar: 0,
    organisasi: 0,
    istirahat: 0,
    pengembangan: 0,
  });



  // Pilih / hapus aktivitas
  const toggleActivity = (activityId) => {

    setSelectedActivities((prev) => {

      if (prev.includes(activityId)) {

        return prev.filter(
          (id) => id !== activityId
        );

      }


      return [
        ...prev,
        activityId
      ];

    });

  };



  // Simpan catatan aktivitas
  const handleSubmit = () => {


    const activityData = {

      mood,

      energy,

      activities: selectedActivities,

      durations,

      createdAt: new Date(),

    };


    console.log(
      "Activity Data:",
      activityData
    );


    /*
      Nanti ganti dengan API:

      await api.post(
        "/activities",
        activityData
      );

    */


    navigate("/");

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

  };

}