import { motion } from "framer-motion";
import { Brain, Battery, Moon, Heart } from "lucide-react";


export default function RiskCard({
  prediction,
}) {


  const riskLevel =
    prediction?.risk_level || "Belum Ada";



  const getRiskStyle = () => {


    if (riskLevel === "Tinggi") {

      return {
        text: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
      };

    }



    if (riskLevel === "Sedang") {

      return {
        text: "text-yellow-600",
        bg: "bg-yellow-50",
        border: "border-yellow-200",
      };

    }



    if (riskLevel === "Rendah") {

      return {
        text: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
      };

    }



    return {
      text: "text-gray-600",
      bg: "bg-gray-50",
      border: "border-gray-200",
    };


  };



  const style = getRiskStyle();




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
        delay:.3,
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

        Indikator Risiko Kelelahan

      </h3>




      <div

        className={`
        px-6
        py-3
        rounded-full
        border-2
        text-center
        font-medium
        ${style.text}
        ${style.bg}
        ${style.border}
        `}

      >

        {riskLevel}

      </div>





      <div className="space-y-4">



        <Item

          icon={<Brain className="w-5 h-5" />}

          title="Konsentrasi"

          value={
            riskLevel === "Tinggi"
              ? "Perlu Istirahat"
              : "Cukup Baik"
          }

        />




        <Item

          icon={<Battery className="w-5 h-5" />}

          title="Energi"

          value={
            riskLevel === "Tinggi"
              ? "Rendah"
              : riskLevel === "Sedang"
                ? "Sedang"
                : "Baik"
          }

        />




        <Item

          icon={<Moon className="w-5 h-5" />}

          title="Pola Tidur"

          value={
            riskLevel === "Tinggi"
              ? "Perlu Perhatian"
              : "Cukup"
          }

        />




        <Item

          icon={<Heart className="w-5 h-5" />}

          title="Tingkat Stres"

          value={riskLevel}

        />



      </div>



    </motion.div>


  );


}





function Item({
  icon,
  title,
  value,
}) {


  return (

    <div className="
    flex
    justify-between
    items-center
    ">


      <div className="
      flex
      gap-3
      items-center
      ">

        {icon}


        <span className="text-sm">

          {title}

        </span>


      </div>




      <span className="
      text-sm
      text-muted-foreground
      ">

        {value}

      </span>



    </div>

  );


}