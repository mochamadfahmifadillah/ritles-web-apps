import {
  TrendingDown,
  Clock,
  Calendar,
} from "lucide-react";

import {
  faBed,
  faSpa,
  faCalendarDays,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";


export const patterns = [

{
icon: TrendingDown,
title:"Insufficient Rest Pattern",
description:
"You have not had enough rest during the last 3 days.",
severity:"high",
color:
"text-red-600 bg-red-50 border-red-200"
},


{
icon: Clock,
title:"Irregular Sleep Schedule",
description:
"Your bedtime varies by more than two hours each night.",
severity:"medium",
color:
"text-yellow-600 bg-yellow-50 border-yellow-200"
},


{
icon: Calendar,
title:"High Study Workload",
description:
"You studied more than 6 hours a day for 4 consecutive days.",
severity:"medium",
color:
"text-yellow-600 bg-yellow-50 border-yellow-200"
}

];




export const recommendations = [

{
icon:faBed,
title:"Take Active Breaks",
description:
"Spend 15–30 minutes resting between study sessions. Walking or stretching can help refresh your mind.",
category:"Rest",
color:
"bg-green-50 border-green-200",
iconColor:
"text-green-600"
},


{
icon:faSpa,
title:"5-Minute Mindfulness",
description:
"Practice breathing exercises or short meditation before bed to improve sleep quality.",
category:"Relaxation",
color:
"bg-purple-50 border-purple-200",
iconColor:
"text-purple-600"
},


{
icon:faCalendarDays,
title:"Organize Your Study Schedule",
description:
"Divide study sessions into 45–60 minute blocks followed by breaks using Pomodoro technique.",
category:"Productivity",
color:
"bg-blue-50 border-blue-200",
iconColor:
"text-blue-600"
},


{
icon:faPalette,
title:"Enjoy Leisure Activities",
description:
"Spend at least one hour every day doing hobbies or activities that make you happy.",
category:"Personal Growth",
color:
"bg-orange-50 border-orange-200",
iconColor:
"text-orange-600"
}

];