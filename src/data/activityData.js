import {
  faSmile,
  faMeh,
  faBed,
  faFaceFrownOpen,
  faBook,
  faUsers,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";


export const moods = [
  {
    icon: faSmile,
    label: "Senang",
    value: "senang",
    color: "text-green-600",
  },
  {
    icon: faMeh,
    label: "Biasa",
    value: "biasa",
    color: "text-gray-600",
  },
  {
    icon: faBed,
    label: "Lelah",
    value: "lelah",
    color: "text-blue-600",
  },
  {
    icon: faFaceFrownOpen,
    label: "Stres",
    value: "stres",
    color: "text-red-600",
  },
];


export const activities = [
  {
    id: "belajar",
    label: "Belajar",
    icon: faBook,
    color:
      "bg-indigo-50 border-indigo-200 text-indigo-700",
  },
  {
    id: "organisasi",
    label: "Organisasi",
    icon: faUsers,
    color:
      "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    id: "istirahat",
    label: "Istirahat",
    icon: faBed,
    color:
      "bg-green-50 border-green-200 text-green-700",
  },
  {
    id: "pengembangan",
    label: "Pengembangan Diri",
    icon: faBullseye,
    color:
      "bg-orange-50 border-orange-200 text-orange-700",
  },
];