/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "almost-white": "#FAFAFA",
        "light-coral": "#FA795DBF",
        coral: "#FA795D",
        "dark-coral": "#FB6848",
        "dark-green": "#233329",
      },
      fontFamily: {
        outfit: ['Outfit_400Regular'],
        'outfit-thin': ['Outfit_100Thin'],
        'outfit-light': ['Outfit_300Light'],
        'outfit-medium': ['Outfit_500Medium'],
        'outfit-semibold': ['Outfit_600SemiBold'],
        'outfit-bold': ['Outfit_700Bold'],
        'outfit-extrabold': ['Outfit_800ExtraBold'],
        'outfit-black': ['Outfit_900Black'],
      },
    },
  },
  plugins: [],
};
