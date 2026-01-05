import { useState } from "react";
import {Cake} from "lucide-react";

const DataInput = () => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [info, setInfo] = useState({ displayName: '', displayAge: 0 });

    const handleCalculate = () => {
        if (!birthDate) return;

        const today = new Date();
        const birth = new Date(birthDate);

        let age = today.getFullYear() - birth.getFullYear();

        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age = age - 1;
        }

        setInfo({
            displayName: name || "Stranger",
            displayAge: age >= 0 ? age : 0
        });
    };

    return (
        <div className="flex flex-col items-center mt-10 space-y-6">
            <p className="text-md"> Please insert your name and date of birth. </p>
            <div className="flex flex-col gap-3 w-60">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-blue-300 p-2 rounded"
                />
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="border border-blue-300 p-2 rounded"
                />
                <button
                    onClick={handleCalculate}
                    className="bg-my-blue text-white p-2 rounded hover:bg-my-blue-dark disabled:bg-my-blue-grey shadow-md shadow-my-blue-grey font-bold"
                    disabled={!name.trim() || !birthDate}
                >
                    Calculate
                </button>
            </div>

            <div className="h-12 text-center">
                {info.displayName && (
                    <h1 className="text-2xl text-my-blue-darker font-semibold flex items-center gap-2">
                        Hello {info.displayName}! You are {info.displayAge} years old!
                        <Cake size={36} color="#004543" />
                    </h1>
                )}
            </div>
        </div>
    );
};

export default DataInput;