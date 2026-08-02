import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { activities } from "../../data/activityData";


export default function DurationInput({
  selectedActivities,
  durations,
  setDurations,
}) {


  const handleChange = (activityId, value) => {

    setDurations({
      ...durations,
      [activityId]: Number(value),
    });

  };


  return (

    <motion.div
      initial={{
        opacity: 0,
        height: 0,
      }}
      animate={{
        opacity: 1,
        height: "auto",
      }}
      className="space-y-4 pt-4 border-t border-border"
    >


      <h4 className="text-sm text-muted-foreground">
        Berapa lama untuk setiap aktivitas? (jam)
      </h4>



      {
        selectedActivities.map((activityId)=>{


          const activity = activities.find(
            (item)=>item.id === activityId
          );


          return (

            <div
              key={activityId}
              className="flex items-center justify-between"
            >


              <div className="flex items-center gap-2">


                {
                  activity && (

                    <FontAwesomeIcon
                      icon={activity.icon}
                      className="text-lg"
                    />

                  )
                }


                <span className="text-sm">
                  {activity?.label}
                </span>


              </div>




              <div className="flex items-center gap-2">


                <input
                  type="number"
                  min="0"
                  max="24"
                  step="0.5"

                  value={
                    durations[activityId] || 0
                  }


                  onChange={(e)=>
                    handleChange(
                      activityId,
                      e.target.value
                    )
                  }


                  className="
                  w-20
                  px-3
                  py-2
                  border
                  border-border
                  rounded-lg
                  text-center
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                  "
                />


                <span className="text-sm text-muted-foreground">
                  jam
                </span>


              </div>


            </div>

          );


        })
      }


    </motion.div>

  );

}