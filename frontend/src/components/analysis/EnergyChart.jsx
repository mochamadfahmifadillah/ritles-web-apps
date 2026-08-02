import { motion } from "framer-motion";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { energyData } from "../../data/analysisData";


export default function EnergyChart() {

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
        delay: 0.2,
      }}

      className="
      bg-white
      rounded-2xl
      p-6
      border
      border-gray-200
      shadow-sm
      "
    >


      <h3 className="font-semibold mb-4">
        Energy Level (This Week)
      </h3>



      <ResponsiveContainer width="100%" height={250}>

        <AreaChart data={energyData}>


          <CartesianGrid
            strokeDasharray="3 3"
          />


          <XAxis dataKey="day"/>


          <YAxis/>


          <Tooltip/>


          <Area

            type="monotone"

            dataKey="energy"

            stroke="#10B981"

            fill="#10B981"

            fillOpacity={0.2}

          />


        </AreaChart>


      </ResponsiveContainer>




      <div
        className="
        mt-4
        p-4
        bg-green-50
        rounded-xl
        border
        border-green-200
        text-sm
        text-green-800
        "
      >

        Energi kamu meningkat saat akhir pekan.
        Pola istirahat terlihat cukup baik.

      </div>



    </motion.div>

  );

}