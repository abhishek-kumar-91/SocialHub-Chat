import React, {useState} from 'react';
import style from "./Register.module.css";
import StepPhoneEmail from "../steps/stepPhoneEmail/StepPhoneEmail";
import StepOtp from "../steps/stepOtp/StepOtp";
import StepName from "../steps/stepName/StepName";
import StepAvtar from "../steps/stepAvtar/StepAvatar";
import StepUsername from "../steps/stepUserName/StepUserName";




const steps = {
 1:StepPhoneEmail,
 2:StepOtp,
 3:StepName,
 4: StepAvtar,
 5: StepUsername
}


function Register() {


    const [step, setStep] = useState(1);
    const Step = steps[step]

    function onNext () {
         setStep(step + 1);
    }

  return (
    <div>
        <Step onNext = {onNext} />
        </div>
  )
}

export default Register