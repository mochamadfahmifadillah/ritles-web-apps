import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

export default function WelcomeSection() {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold flex items-center gap-2">
        Halo, {user?.full_name || "Pengguna"}!
        <FontAwesomeIcon
          icon={faHandPeace}
          className="text-yellow-500"
        />
      </h1>

      <p className="text-muted-foreground text-sm lg:text-base">
        {new Date().toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </motion.div>
  );
}