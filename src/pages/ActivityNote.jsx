import MoodSelector from "../components/activity/MoodSelector";
import EnergySlider from "../components/activity/EnergySlider";
import ActivitySelector from "../components/activity/ActivitySelector";
import DurationInput from "../components/activity/DurationInput";
import ActivitySubmit from "../components/activity/ActivitySubmit";

import useActivityNote from "../hooks/useActivityNote";


export default function ActivityNote() {

  const {
    mood,
    setMood,

    energy,
    setEnergy,

    selectedActivities,
    toggleActivity,

    durations,
    setDurations,

    handleSubmit,

    navigate

  } = useActivityNote();


  return (

    <div className="max-w-2xl mx-auto space-y-6">


      <div>

        <h1 className="text-2xl lg:text-3xl mb-2">
          Catat Aktivitas
        </h1>


        <p className="text-muted-foreground">
          Ceritakan bagaimana harimu dalam ≤5 detik
        </p>

      </div>



      {/* Mood */}

      <div className="bg-white rounded-2xl p-6 border">

        <h3 className="mb-4">
          Bagaimana suasana hatimu hari ini?
        </h3>


        <MoodSelector
          mood={mood}
          setMood={setMood}
        />

      </div>




      {/* Energy */}

      <div className="bg-white rounded-2xl p-6 border">

        <h3 className="mb-4">
          Level energi kamu
        </h3>


        <EnergySlider
          energy={energy}
          setEnergy={setEnergy}
        />


      </div>




      {/* Activity */}

      <div className="bg-white rounded-2xl p-6 border">


        <h3 className="mb-4">
          Aktivitas apa saja yang kamu lakukan?
        </h3>



        <ActivitySelector
          selectedActivities={selectedActivities}
          toggleActivity={toggleActivity}
        />



        {
          selectedActivities.length > 0 &&

          <DurationInput

            selectedActivities={selectedActivities}

            durations={durations}

            setDurations={setDurations}

          />

        }


      </div>




      {/* Button */}

      <ActivitySubmit

        handleSubmit={handleSubmit}

        disabled={
          !mood ||
          selectedActivities.length === 0
        }

        onCancel={() => navigate("/")}

      />


    </div>

  );

}