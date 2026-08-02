import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";


export default function InsightCard({
  recommendation,
}) {


  const message =
    recommendation?.message ||
    "Belum ada rekomendasi tersedia.";




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
      flex
      gap-4
      items-start
      "


    >


      <div
        className="
        bg-white
        rounded-full
        p-3
        shadow-sm
        "
      >

        <Sparkles
          className="
          w-6
          h-6
          text-primary
          "
        />

      </div>




      <div>


        <h3
          className="
          mb-2
          text-primary
          font-semibold
          "
        >

          Insight AI untuk Kamu

        </h3>



        <p
          className="
          text-sm
          text-muted-foreground
          leading-relaxed
          "
        >

          {message}

        </p>


      </div>



    </motion.div>


  );


}