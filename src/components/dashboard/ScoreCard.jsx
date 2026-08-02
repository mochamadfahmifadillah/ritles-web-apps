import { motion } from "framer-motion";


export default function ScoreCard({
  prediction,
}) {


  const score =
    prediction?.fatigue_score || 0;



  const radius = 70;

  const circumference =
    2 * Math.PI * radius;



  const offset =
    circumference * (1 - score / 100);




  const getStatus = () => {


    if(score >= 80){
      return "Tinggi";
    }


    if(score >= 50){
      return "Sedang";
    }


    return "Rendah";

  };



  return (


    <motion.div


      initial={{
        opacity:0,
        y:20,
      }}


      animate={{
        opacity:1,
        y:0,
      }}


      transition={{
        duration:.5,
        delay:.2,
      }}


      className="
      bg-white
      rounded-2xl
      p-6
      border
      flex
      flex-col
      items-center
      "

    >



      <h3 className="
      text-lg
      font-semibold
      mb-5
      self-start
      ">

        Fatigue Score

      </h3>




      <div className="
      relative
      w-[160px]
      h-[160px]
      ">



        <svg

          width="160"

          height="160"

          viewBox="0 0 160 160"

          className="-rotate-90"

        >



          <circle

            cx="80"

            cy="80"

            r={radius}

            stroke="currentColor"

            strokeWidth="12"

            fill="transparent"

            className="text-gray-200"

          />





          <circle

            cx="80"

            cy="80"

            r={radius}

            stroke="currentColor"

            strokeWidth="12"

            fill="transparent"

            strokeDasharray={circumference}

            strokeDashoffset={offset}

            className="text-primary"

            strokeLinecap="round"

          />



        </svg>




        <div className="
        absolute
        inset-0
        flex
        flex-col
        items-center
        justify-center
        ">


          <span className="
          text-4xl
          font-bold
          ">

            {score}

          </span>


          <span className="
          text-xs
          text-muted-foreground
          ">

            /100

          </span>


        </div>


      </div>





      <p className="
      mt-5
      text-sm
      text-muted-foreground
      ">

        Tingkat kelelahan saat ini

      </p>



      <span className="
      mt-2
      px-4
      py-1
      rounded-full
      bg-primary/10
      text-primary
      text-sm
      font-medium
      ">

        {getStatus()}

      </span>



    </motion.div>


  );

}