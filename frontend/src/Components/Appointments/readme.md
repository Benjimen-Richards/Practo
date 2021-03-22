render_doctor_multipledata = (data) => {
    if (data) {
      return data.map((data) => (
        <div className="Appoint_container">
          <div className="appoint_img">
            <img src={data.patientdata.userImg} alt="/" />
          </div>
          <div className="appoint_text">
            <div className="appoint_text1">
              <p>Doctor details</p>
              <label>
                <strong>Name of doctor:-</strong>
              </label>
              <span>{data.patientdata.doctorname}</span>
            </div>
            <div className="appoint_text1">
              <p>Patient details</p>
              <div className="appoint_blocks">
                <label>
                  <strong>Name of patient:-</strong>
                </label>
                <span>{data.patientdata.username}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Person who is consulting:-</strong>
                </label>
                <span>{data.patientdata.consultingpatient}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>slot time:-</strong>
                </label>
                <span>
                  {data.patientdata.slottime.date} ||
                  {data.patientdata.slottime.time}
                </span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Reason for visit:-</strong>
                </label>
                <span>{data.patientdata.reasonofconsult}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Consulting fee:-</strong>
                </label>
                <span>{data.patientdata.fee}</span>
              </div>
              <div className="Doctor_card_button_appoint">
                <button
                  onClick={() =>
                    this.user_deleteappointment(
                      data.appointid,
                      data.patientdata.doctorid
                    )
                  }
                >
                  Cancel appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };


  render_doctor_singledata = (data) => {
    if (data) {
      return (
        <div className="Appoint_container2">
          <div className="appoint_img">
            <img src={data[0].patientdata.userImg} alt="/" />
          </div>
          <div className="appoint_text">
            <div className="appoint_text1">
              <p>Doctor details</p>
              <label>
                <strong>Name of doctor:-</strong>
              </label>
              <span>{data[0].patientdata.doctorname}</span>
            </div>
            <div className="appoint_text1">
              <p>Patient details</p>
              <div className="appoint_blocks">
                <label>
                  <strong>Name of patient:-</strong>
                </label>
                <span>{data[0].patientdata.username}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Person who is consulting:-</strong>
                </label>
                <span>{data[0].patientdata.consultingpatient}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>slot time:-</strong>
                </label>
                <span>
                  {data[0].patientdata.slottime.date} ||
                  {data[0].patientdata.slottime.time}
                </span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Reason for visit:-</strong>
                </label>
                <span>{data[0].patientdata.reasonofconsult}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Consulting fee:-</strong>
                </label>
                <span>{data[0].patientdata.fee}</span>
              </div>
              <div className="Doctor_card_button_appoint">
                <button
                  onClick={() =>
                    this.user_deleteappointment(
                      data[0].appointid,
                      data[0].patientdata.doctorid
                    )
                  }
                >
                  Cancel appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };