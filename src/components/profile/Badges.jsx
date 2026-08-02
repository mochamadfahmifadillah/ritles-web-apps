import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faStar,
  faBullseye,
  faDumbbell,
  faAward,
  faTrophy,
  faGift,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const badges = [
  {
    icon: faFire,
    title: "Consistency",
  },
  {
    icon: faStar,
    title: "Achievement",
  },
  {
    icon: faBullseye,
    title: "Focus",
  },
  {
    icon: faDumbbell,
    title: "Discipline",
  },
  {
    icon: faAward,
    title: "Champion",
  },
  {
    icon: faTrophy,
    title: "Winner",
  },
  {
    icon: faGift,
    title: "Special",
  },
  {
    icon: faBolt,
    title: "Energy",
  },
];

function Badges() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            rounded-xl
            bg-primary/10
          "
        >
          <FontAwesomeIcon
            icon={badge.icon}
            className="text-xl"
          />

          <span className="text-xs text-center">
            {badge.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Badges;