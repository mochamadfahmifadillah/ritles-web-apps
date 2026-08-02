import { motion } from "framer-motion";


export default function ActivityChart({
  activities = [],
}) {


  const chartData = activities.map((item) => ({

    name: item.title,

    value: Math.min(
      Math.round((item.note?.length || 10) / 2),
      100
    ),

  }));



  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
        delay: 0.4,
      }}

      className="
      bg-white
      rounded-2xl
      p-6
      border
      space-y-5
      "

    >


      <h3 className="
      text-lg
      font-semibold
      ">

        Aktivitas Harian

      </h3>




      {
        chartData.length === 0 ? (

          <p className="
          text-sm
          text-muted-foreground
          ">

            Belum ada aktivitas.

          </p>


        ) : (


          chartData.map((activity, index) => (

            <div
              key={index}
              className="
              space-y-2
              "
            >


              <div className="
              flex
              justify-between
              text-sm
              "
              >

                <span>
                  {activity.name}
                </span>


                <span className="
                text-muted-foreground
                ">
                  {activity.value}%
                </span>


              </div>




              <div className="
              h-3
              bg-gray-100
              rounded-full
              overflow-hidden
              ">


                <motion.div

                  initial={{
                    width: 0,
                  }}

                  animate={{
                    width: `${activity.value}%`,
                  }}

                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}

                  className="
                  h-full
                  bg-primary
                  rounded-full
                  "

                />


              </div>


            </div>

          ))

        )
      }


    </motion.div>

  );

}