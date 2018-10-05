import React from "react";

export const Card = ({ children }) => (
  <div className="card"
  style={{ padding: 10, textAlign: "center", marginBottom: 15 }}>
    {children}
  </div>
);