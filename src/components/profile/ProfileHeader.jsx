import { motion } from "framer-motion";


function ProfileHeader() {

  return (
    <motion.div
      initial={{
        opacity:0,
        y:20
      }}
      animate={{
        opacity:1,
        y:0
      }}
    >

      <h1 className="text-2xl lg:text-3xl mb-2">
        Profile
      </h1>


      <p className="text-muted-foreground text-sm">
        Manage your account and application preferences.
      </p>


    </motion.div>
  );
}


export default ProfileHeader;