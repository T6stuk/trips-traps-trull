import React, { useState } from 'react';
import './App.css';
import App1 from './App.1';

function App() {
    const [averageIncome, setAverageIncome] = useState(1500);
    const [dailyAllowance, setDailyAllowance] = useState(0);

    const [sickLeave, setSickLeave] = useState(7);
    const [sickLeaveAllowance, setSickLeaveAllowance] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    const [employerDays, setEmployerDays] = useState(0);

    const [insuranceDays, setInsuranceDays] = useState(0);

    const [employerAnswer, setEmployerAnswer] = useState(0);

    const [insuranceAnswer, setInsuranceAnswer] = useState(0);

    const [compensationTotalDays, setCompensationTotalDays] = useState(0);

    const [totalAnswer, setTotalAnswer] = useState(0);


    const calculateAllowance = () => {
        let allowance;
        if (averageIncome >= 1500) {
            allowance = 28.00 + (averageIncome - 1500) * 0.01; // Increase allowance by 1% of the amount over 1500
        } else {
            allowance = averageIncome * 0.01867; // Adjust this calculation as needed
        }
        setDailyAllowance(allowance);

        if (!isChecked) {
            setSickLeaveAllowance(0);
        }
    }


    const calculateEmployerDays = () => {
        const days = Math.round(sickLeave * 0.57);
        setEmployerDays(days);
    };
    
    const calculateEmployerAnswer = () => {
        const answer = dailyAllowance * employerDays;
        setEmployerAnswer(answer);
    };
    
    const calculateInsuranceAnswer = () => {
        const answer2 = sickLeaveAllowance * insuranceDays;
        setInsuranceAnswer(answer2);
    };
    
    const calculateCompensationTotalDays = () => {
        setCompensationTotalDays(sickLeave);
    };



    const calculateTotal = () => {
        const total = (insuranceAnswer) + (employerAnswer);
        setTotalAnswer(total);
    };


    const calculateSickLeaveAllowance = () => {
        if (isChecked) {
            let allowance2;
            if (sickLeave >= 7) {
                allowance2 = 28.00 + (sickLeave - 7) * 0.01; // Increase allowance by 1% of the amount over 1500
            } else {
                allowance2 = sickLeave * 0.01867; // Adjust this calculation as needed
            }
            setSickLeaveAllowance(allowance2);
        }

    };

    const calculateInsuranceDays = () => {
        const days = isChecked ? Math.round(sickLeave * 0.57) : 0;
        setInsuranceDays(days);
    };

    const calculateAll = () => {
        calculateEmployerDays();
        calculateAllowance();
        calculateInsuranceDays();
        calculateSickLeaveAllowance();
        calculateCompensationTotalDays();
    
        calculateEmployerAnswer();
        calculateInsuranceAnswer();
    
        calculateTotal();
    };

    return (
        <App1 
            averageIncome={averageIncome} 
            setAverageIncome={setAverageIncome} 
            calculateAllowance={calculateAllowance} 
            dailyAllowance={dailyAllowance}
            sickLeave={sickLeave}
            setSickLeave={setSickLeave} 
            calculateSickLeaveAllowance={calculateSickLeaveAllowance} 
            sickLeaveAllowance={sickLeaveAllowance}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            employerDays={employerDays}
            insuranceDays={insuranceDays}
            employerAnswer={employerAnswer}
            insuranceAnswer={insuranceAnswer}
            compensationTotalDays={compensationTotalDays}
            totalAnswer={totalAnswer}
            calculateTotal={calculateTotal}
            calculateAll={calculateAll}
        />

    );
}

export default App;