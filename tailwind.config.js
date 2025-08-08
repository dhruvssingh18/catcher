/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add any other file paths that contain Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        // Custom gripper colors (ensure visibility)
        gripper: {
          blue: "#2563eb",  // More vibrant blue
          red: "#dc2626",   // More vibrant red
          track: "#e5e7eb", // Light gray for track
        },
      },
      height: {
        track: "3rem",      // Standardized track height
      },
      boxShadow: {
        gripper: "0 0 8px 2px rgba(0, 0, 0, 0.3)", // Strong shadow for visibility
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Ensure these core plugins are enabled
    display: true,
    position: true,
    zIndex: true,
    transform: true,
  }
}