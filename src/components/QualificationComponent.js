function QualificationComponent() {
  return (
    <div>
      <h1 className="d-flex justify-content-center mb-5">Esperienze</h1>
      <div className="job-section">
        <div className="job-container">
          <div className="job-content one">
            <h5>Full Stack Student</h5>
            <span>Develhope</span>
            <span className="mt-2">23/05/2022 - 19/12/2022</span>
          </div>
          <div className="style-one">
            <span className="job-rounder" />
            <div className="job-line" />
          </div>
          <div className="job-content two">
            <h5>Volontario</h5>
            <span>
              Dipartimento per le politiche <br /> giovanili e del Servizio{" "}
              <br /> Civile Universale
            </span>
            <span className="mt-2">30/04/2021 - 30/04/2022</span>
          </div>
          <div className="style-two">
            <span className="job-rounder" />
            <div className="job-line" />
          </div>
          <div className="job-content three">
            <h5>Porta Lettere</h5>
            <span>Poste Italiane</span>
            <span className="mt-2">01/11/2015 - 31/01/2016</span>
          </div>
          <div className="style-three">
            <span className="job-rounder" />
            <div className="job-line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualificationComponent;
