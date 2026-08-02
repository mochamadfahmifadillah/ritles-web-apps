import { motion } from "framer-motion";
import { User } from "lucide-react";
import useAuth from "../../hooks/useAuth";

function UserCard() {
  const { user } = useAuth();

  return (
    <motion.div
      className="
      bg-gradient-to-br
      from-primary/10
      to-purple-500/10
      rounded-2xl
      p-6
      border
      border-primary/20
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-4">
        <div
          className="
          w-16
          h-16
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          "
        >
          <User size={30} />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold">
            {user?.full_name ?? "User"}
          </h2>

          <p className="text-muted-foreground">
            {user?.email ?? "-"}
          </p>
        </div>
      </div>

      <button
        className="
        mt-6
        w-full
        bg-primary
        text-white
        rounded-xl
        py-3
        hover:opacity-90
        transition
        "
      >
        Edit Profile
      </button>
    </motion.div>
  );
}

export default UserCard;