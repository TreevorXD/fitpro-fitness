export const navItems = [
  { name: "Home", href: "#" },
  { name: "Programs", href: "#" },
  { name: "About", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

export const programs = [
  {
    title: "Strength Training",
    description:
      "Build muscle and increase your power with our comprehensive strength training programs.",
    image: "/strength.jpg",
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Improve your flexibility, balance, and mindfulness through guided yoga sessions.",
    image: "/yoga.jpg",
  },
  {
    title: "Cardio Workouts",
    description:
      "Boost your cardiovascular health with high-energy cardio training sessions.",
    image: "/cardio.jpg",
  },
  {
    title: "Nutrition Guidance",
    description:
      "Get personalized nutrition plans to fuel your body and achieve your fitness goals.",
    image: "/nutrition.jpg",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    story: "I lost 20lbs in 3 months with this program!",
    details:
      "The personalized training and nutrition plan made all the difference. I feel stronger and more confident than ever.",
    image: "/sarah.jpg",
    rating: 5,
  },
  {
    name: "John D.",
    story: "The trainers push me beyond my limits in a healthy way.",
    details:
      "Professional, motivating, and results-driven. I've gained muscle and improved my overall fitness significantly.",
    image: "/john.jpg",
    rating: 4,
  },
  {
    name: "Emily R.",
    story: "Flexible scheduling made it possible to stay consistent.",
    details:
      "As a busy mom, the online sessions and flexible timing helped me maintain my fitness routine without stress.",
    image: "/emily.jpg",
    rating: 5,
  },
];

export const plans = [
  {
    name: "Basic",
    price: 29,
    period: "month",
    description: "Perfect for getting started with fitness",
    features: [
      "Gym Access",
      "Basic Equipment Usage",
      "Locker Room Access",
      "Mobile App Access",
      "Progress Tracking",
    ],
    cta: "Join Now",
    popular: false,
  },
  {
    name: "Pro",
    price: 59,
    period: "month",
    description: "Most popular choice for serious fitness enthusiasts",
    features: [
      "Everything in Basic",
      "4 Personal Training Sessions",
      "Group Classes",
      "Nutrition Consultation",
      "Priority Support",
      "Custom Workout Plans",
    ],
    cta: "Join Now",
    popular: true,
  },
  {
    name: "Elite",
    price: 99,
    period: "month",
    description: "Complete fitness transformation package",
    features: [
      "Everything in Pro",
      "Unlimited Training Sessions",
      "Personal Nutrition Coach",
      "Online Classes Access",
      "24/7 Gym Access",
      "Recovery & Wellness Sessions",
      "VIP Member Benefits",
    ],
    cta: "Join Now",
    popular: false,
  },
];
