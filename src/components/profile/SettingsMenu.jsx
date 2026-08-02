import {
  Bell,
  Shield,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

const menu = [
  {
    icon: Bell,
    title: "Notifications",
    desc: "Manage reminders and notifications",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    desc: "Manage your personal data",
  },
  {
    icon: HelpCircle,
    title: "Help & Support",
    desc: "Frequently Asked Questions",
  },
];

function SettingsMenu() {
  return (
    <div className="w-full">
      {menu.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={index}
            className="
              w-full
              flex
              items-center
              gap-4
              p-4
              hover:bg-muted
              border-b
              last:border-none
              transition
            "
          >
            <Icon className="w-5 h-5" />

            <div className="flex-1 text-left">
              <p className="font-medium">
                {item.title}
              </p>

              <span className="text-sm text-muted-foreground">
                {item.desc}
              </span>
            </div>

            <ChevronRight className="w-5 h-5" />
          </button>
        );
      })}
    </div>
  );
}

export default SettingsMenu;