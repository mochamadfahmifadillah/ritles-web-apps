import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function InsightCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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

        <div className="bg-white rounded-full p-3">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>


        <div>
          <h3 className="mb-2 text-primary">
            Insight AI untuk Kamu
          </h3>

          <p>
            Aktivitas kamu cukup padat akhir-akhir ini.
            Ada tanda awal kelelahan.
            Yuk luangkan waktu untuk istirahat
            dan kegiatan yang menyenangkan.
          </p>
        </div>

      </div>

    </motion.div>
  );
}