// features.js
import { BarChart, Bell, Calendar, Globe } from "lucide-react";

export const features = [
  {
    title: "Personalized Contest Alerts",
    description: "Set up custom notifications for contests that match your interests and skill level.",
    icon: Bell,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Comprehensive Calendar",
    description: "View all upcoming contests in a clean, intuitive calendar interface.",
    icon: Calendar,
    color: "from-cyan-400 to-cyan-600"
  },
  {
    title: "Performance Analytics",
    description: "Track your progress across platforms with detailed performance insights.",
    icon: BarChart,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "Global Community",
    description: "Connect with fellow programmers and participate in exclusive community events.",
    icon: Globe,
    color: "from-purple-400 to-purple-600"
  }
];

// steps.js
export const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and customize your profile with your preferred coding platforms and areas of interest."
  },
  {
    number: "02",
    title: "Set Your Preferences",
    description: "Choose which contests you want to track and how you'd like to be notified about upcoming events."
  },
  {
    number: "03",
    title: "Receive Timely Alerts",
    description: "Get notifications before contests start so you never miss an opportunity to participate."
  },
  {
    number: "04",
    title: "Track Your Progress",
    description: "After each contest, view your performance statistics and see how you're improving over time."
  }
];

// testimonials.js
export const testimonials = [
  {
    quote: "Contesto completely changed how I approach competitive programming. I've improved my rating significantly since I started using it.",
    author: "Alex Chen",
    role: "Software Engineer at Google"
  },
  {
    quote: "I used to miss contests all the time before Contesto. Now I never miss an opportunity to practice and improve my skills.",
    author: "Sophia Rodriguez",
    role: "Computer Science Student"
  },
  {
    quote: "The analytics feature helped me identify my weaknesses and focus my practice more effectively. Highly recommended!",
    author: "Michael Kim",
    role: "Competitive Programmer"
  }
];

// upcomingContests.js
export const upcomingContests = [
  { name: "Google Kickstart Round E", platform: "Google", time: "2h 15m" },
  { name: "LeetCode Weekly Contest", platform: "LeetCode", time: "1d 4h" },
  { name: "Codeforces Round #856", platform: "Codeforces", time: "2d 7h" }
];