import { useEffect, useState } from "react";
import styles from "./Plans.module.css";
import logo1 from "../../Images/logo2.png";
import logo2 from "../../Images/logo2.png";
import logo3 from "../../Images/logo3.png";

function Plans(props) {
  const [plan, setPlan] = useState("");
  const [changeCharges, setChangeCharges] = useState({ isChecked: false });
  const [charges, setCharges] = useState([
    { id: 1, rate: 9, name: "Arcade", logo: logo1 },
    { id: 2, rate: 12, name: "Advanced", logo: logo2 },
    { id: 3, rate: 15, name: "Pro", logo: logo3 },
  ]);
  const [planData, setPlanData] = useState({});

  function clickChange() {
    setChangeCharges({ ...changeCharges, isChecked: !changeCharges.isChecked });
  }
  function clickPlan(id, name, rate) {
    setPlanData({ id, name, rate });
    setPlan(id);
  }
  function clickNext() {
    props.planInputs(planData);
    props.Steps({ step1: false, step2: false, step3: true });
  }
  function planBack() {
    props.PlanBack({ step1: true, step2: false, step3: false });
  }

  return (
    <div className={styles.container}>
      <div className="row">
        
        <div className="row">
          <div className={styles.heading1}>
            <p>Select your plan</p>
          </div>
        </div>

        <div className="row">
          <div className={styles.heading2}>
            <p>You have the option of monthly or yearly billing</p>
          </div>
        </div>

        <div className="row mt-4">
          {charges.map((data) => {
            return (
              <>
                <div className="col-2">
                  <div
                    className={styles.planContainer}
                    onClick={() => {
                      clickPlan(data.id, data.name, data.rate);
                    }}
                  >
                    
                    <div className="row">
                      <div
                        className={
                          data.id == 1
                            ? styles.logo1
                            : data.id == 2
                            ? styles.logo2
                            : styles.logo3
                        }
                      >
                        <img src={data.logo} />
                      </div>
                    </div>
                   

                    <div className="row">
                      <div className={styles.planNameRate}>
                        <label className={styles.planName}>{data.name}</label>

                        <p className={styles.planRate}>
                          {!changeCharges.isChecked
                            ? data.rate + "Rs/Mo"
                            : data.rate * 2 + "Rs/Yr"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.radioContainer}>
          <div className="row">
            <div className="col-5">
              <p className={styles.monthly}>Monthly</p>
            </div>
            <div className="col-2">
              <label className={styles.switch}>
                <input type="checkbox" onChange={clickChange} />
                <span className={`${styles.slider} ${styles.round}`}></span>
              </label>
            </div>
            <div className="col-5">
              <div className={styles.yearly}>Yearly</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className="row">
            <div className="col-4">
              <button
                onClick={planBack}
                className={`${styles.backButton} ${styles.backButton1}`}
              >
                Go Back
              </button>
            </div>
            <div className="col-6">
              <button
                onClick={clickNext}
                className={`${styles.nextButton} ${styles.nextButton1}`}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
