import ProfileHeader from "../components/profile/ProfileHeader";
import UserCard from "../components/profile/UserCard";
import UserStats from "../components/profile/UserStats";
import Badges from "../components/profile/Badges";
import SettingsMenu from "../components/profile/SettingsMenu";
import LogoutButton from "../components/profile/LogoutButton";
import AppInfo from "../components/profile/AppInfo";

function Profile() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">

      <ProfileHeader />

      <UserCard />

      <UserStats />

      <Badges />

      <SettingsMenu />

      <LogoutButton />

      <AppInfo />

    </div>
  );
}

export default Profile;