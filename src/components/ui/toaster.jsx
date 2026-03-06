import React from "react";

export function Toaster() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {/* Toast notifications will appear here */}
    </div>
  );
}