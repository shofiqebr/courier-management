// src/components/AgentLocationUpdater.jsx
import { useEffect } from "react";
import axios from "axios";

const AgentLocationUpdater = () => {
  useEffect(() => {
    const updateLocation = async (lat, lng) => {
      try {
        await axios.put(
          "/api/user/update-location",
          { lat, lng },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust based on your auth setup
            },
          }
        );
      } catch (err) {
        console.error("Failed to update location:", err.message);
      }
    };

    const getLocationAndSend = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude, longitude } = pos.coords;
          updateLocation(latitude, longitude);
        });
      }
    };

    // Update every 10 seconds
    const interval = setInterval(getLocationAndSend, 10000);
    getLocationAndSend(); // Initial call

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default AgentLocationUpdater;
