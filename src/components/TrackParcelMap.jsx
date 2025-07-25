// src/components/TrackParcelMap.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Props:
 * - agentId: string (deliveryAgent ID from parcel)
 * - deliveryCoordinates: { lat: number, lng: number }
 */
const TrackParcelMap = ({ agentId, deliveryCoordinates }) => {
  const [map, setMap] = useState(null);
  const [agentMarker, setAgentMarker] = useState(null);

  const { data: agentData, } = useQuery({
    queryKey: ["agent-location", agentId],
    queryFn: async () => {
      const res = await axios.get(`/api/user/${agentId}`);
      return res.data.data; // Assumes backend returns agent data including `location`
    },
    refetchInterval: 10000, // Refresh location every 10 seconds
  });

  useEffect(() => {
    if (window.google && agentData?.location) {
      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: deliveryCoordinates,
          zoom: 12,
        }
      );
      setMap(mapInstance);
    }
  }, [agentData]);

  useEffect(() => {
    if (map && agentData?.location) {
      const { lat, lng } = agentData.location;

      if (!agentMarker) {
        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map,
          title: "Agent Location",
          icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        });
        setAgentMarker(marker);
      } else {
        agentMarker.setPosition({ lat, lng });
      }

      map.panTo({ lat, lng });
    }
  }, [agentData?.location, map]);

  return (
    <div>
      <div id="map" className="w-full h-[400px] rounded shadow" />
    </div>
  );
};

export default TrackParcelMap;
