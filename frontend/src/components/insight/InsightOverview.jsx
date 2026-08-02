import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";


export default function InsightOverview() {

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
        delay: 0.1,
      }}

      className="
        bg-gradient-to-br
        from-indigo-50
        to-purple-50
        rounded-2xl
        p-6
        border
        border-indigo-100
      "
    >

      <div className="flex items-start gap-4">


        <div className="
          bg-white
          rounded-full
          p-3
        ">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>



        <div className="flex-1">

          <h3 className="mb-2 text-primary">
            Well-being Overview
          </h3>


          <p className="text-foreground mb-3">

            Based on your activity patterns over the past
            seven days, our system detected early signs
            of mental fatigue.

            Long study sessions without enough recovery
            time may affect productivity and concentration.

          </p>



          <p className="text-foreground">

            <strong>Recommendation:</strong>{" "}
            Improve your rest schedule and maintain
            a healthier balance between productivity
            and recovery.

          </p>


        </div>


      </div>


    </motion.div>

  );

}