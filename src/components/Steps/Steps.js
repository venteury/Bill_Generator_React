import { useEffect, useState } from "react";
import styles from "./Steps.module.css";

function Steps(props) {
  const [steps, setSteps] = useState({});

  useEffect(() => {
    setSteps(props.stepData);
  }, [props]);

  return (
    <div className={styles.stepsContainer}>
      <div className={styles.steps}>
        
        {/* Step-1 ====================*/}
        <div className="row">
          <div className="col-4">
            <div
              className={
                steps.step1
                  ? `${styles.stepNum} ${styles.stepNumIsActive}`
                  : styles.stepNum
              }
            >
              1
            </div>
          </div>
          <div className="col-8">
            <div className={styles.stepSeq}>STEP 1</div>
            <div className={styles.stepName}>YOUR INFO</div>
          </div>
        </div>

        {/* Step-2 =====================*/}
        <div className="row">
          <div className="col-4">
            <div
              className={
                steps.step2
                  ? `${styles.stepNum} ${styles.stepNumIsActive}`
                  : styles.stepNum
              }
            >
              2
            </div>
          </div>
          <div className="col-8">
            <div className={styles.stepSeq}>STEP 2</div>
            <div className={styles.stepName}>SELECT PLAN</div>
          </div>
        </div>

        {/* Step-3 ======================*/}
        <div className="row">
          <div className="col-4">
            <div
              className={
                steps.step3
                  ? `${styles.stepNum} ${styles.stepNumIsActive}`
                  : styles.stepNum
              }
            >
              3
            </div>
          </div>
          <div className="col-8">
            <div className={styles.stepSeq}>STEP 3</div>
            <div className={styles.stepName}>SUMMARY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
