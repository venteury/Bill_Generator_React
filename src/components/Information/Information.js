import { useState } from "react";
import styles from "./Information.module.css";

function Information(props) {
  const [inputs, setInputes] = useState({ name: "", email: "", phone: "" });
  const [checkInputs, setCheckInputs] = useState({
    isName: false,
    isEmail: false,
    isPhone: false,
    isPhoneLength: false,
  });

  function clickForm(e) {
    e.preventDefault();
    if (inputs.name === "") {
      setCheckInputs({ ...checkInputs, isName: true });
    } else if (inputs.email === "") {
      setCheckInputs({ ...checkInputs, isEmail: true });
    } else if (inputs.phone === "") {
      setCheckInputs({ ...checkInputs, isPhone: true });
    } else if (inputs.phone.length < 10 || inputs.phone.length > 10) {
      setCheckInputs({ ...checkInputs, isPhoneLength: true });
    } else {
      props.FormData({ Data: inputs });
      props.Steps({ step1: false, step2: true, step3: false });
    }
  }

  function inputChange(e) {
    setCheckInputs({
      ...checkInputs,
      isName: false,
      isEmail: false,
      isPhone: false,
      isPhoneLength: false,
    });
    const { name, value } = e.target;
    setInputes({ ...inputs, [name]: value });
  }

  return (
    <div>
      <div className={styles.infoContainer}>
        <div>
          <div className="row">
            <div className="col-8">
              <div className={styles.infoHeading}>Your information</div>
            </div>
          </div>
        </div>
        <form onSubmit={clickForm}>
          <div className={styles.infoInputs}>
            <div className="row">
              <span className={styles.formHeading}>Name:</span>
              <div className="col-8">
                <input
                  onChange={inputChange}
                  name="name"
                  value={inputs.name}
                  type="text"
                  placeholder=" Enter Name"
                />
                <p className={styles.warning}>
                  {checkInputs.isName ? "Please enter name" : ""}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.infoInputs}>
            <div className="row">
              <span className={styles.formHeading}>Email:</span>
              <div className="col-8">
                <input
                  onChange={inputChange}
                  name="email"
                  value={inputs.email}
                  type="email"
                  placeholder=" Enter Email"
                />
                <p className={styles.warning}>
                  {checkInputs.isEmail ? "Please enter email" : ""}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.infoInputs}>
            <div className="row">
              <span className={styles.formHeading}>Phone:</span>
              <div className="col-8">
                <input
                  onChange={inputChange}
                  name="phone"
                  value={inputs.phone}
                  type="number"
                  placeholder=" Enter Mobile No."
                />
                <p className={styles.warning}>
                  {checkInputs.isPhone
                    ? "Please enter phone number !"
                    : checkInputs.isPhoneLength
                    ? "Phone number is not valid !"
                    : ""}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <div className="row">
              <div className="col-6">
                <button
                  className={`${styles.nextButton} ${styles.nextButton1}`}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Information;
