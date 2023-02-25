import React, { useState } from "react";

function FullScreenComponent() {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 3000);

  if (!show) {
    return null;
  }

  return (
    <div className="fullScreen-section text-light">
      <div class="position-fixed top-50" style={{ width: "100%" }}>
        <h4 className="text-fullScreen">ANGELO DE ROSA</h4>
        <p className="text-fullScreen">Jr Full Stack Developer</p>
      </div>
    </div>
  );
}

export default FullScreenComponent;
