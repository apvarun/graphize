import React, { useState } from "react";

type EventContextData = {
  zoom: boolean;
  resetZoom: () => void;
};

const EventContext = React.createContext<EventContextData>({
  zoom: false,
  resetZoom: () => null,
});

export default EventContext;

export const EventContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [zoom, setZoom] = useState(false);

  const resetZoom = () => {
    setZoom(!zoom);
  };

  return (
    <EventContext.Provider value={{ zoom, resetZoom }}>
      {children}
    </EventContext.Provider>
  );
};
