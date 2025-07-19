import React, { useState } from "react";

function Rankings() {
    const [gender, setGender] = useState("men");
    const [format, setFormat] = useState("one-day");
    const [type, setType] = useState("player");

    const referenceData = {
        player: {
            men: {
                "one-day": {
                    batsman: [
                        { name: "Virat Kohli", points: 892 },
                        { name: "Babar Azam", points: 879 },
                        { name: "Steve Smith", points: 861 },
                        { name: "David Warner", points: 852 },
                        { name: "Shubman Gill", points: 840 },
                        { name: "Joe Root", points: 829 },
                        { name: "Rohit Sharma", points: 818 },
                        { name: "Fakhar Zaman", points: 807 },
                        { name: "KL Rahul", points: 799 },
                        { name: "Rassie van der Dussen", points: 785 },
                    ],
                    bowler: [
                        { name: "Jasprit Bumrah", points: 851 },
                        { name: "Trent Boult", points: 836 },
                        { name: "Shaheen Afridi", points: 824 },
                        { name: "Mitchell Starc", points: 813 },
                        { name: "Kagiso Rabada", points: 808 },
                        { name: "Josh Hazlewood", points: 800 },
                        { name: "Mohammed Siraj", points: 795 },
                        { name: "Pat Cummins", points: 788 },
                        { name: "Mark Wood", points: 780 },
                        { name: "Ravindra Jadeja", points: 775 },
                    ],
                    allrounder: [
                        { name: "Ben Stokes", points: 425 },
                        { name: "Shakib Al Hasan", points: 420 },
                        { name: "Hardik Pandya", points: 417 },
                        { name: "Glenn Maxwell", points: 411 },
                        { name: "Mohammad Nabi", points: 407 },
                        { name: "Marcus Stoinis", points: 404 },
                        { name: "Ravindra Jadeja", points: 401 },
                        { name: "Mitchell Marsh", points: 398 },
                        { name: "Wanindu Hasaranga", points: 395 },
                        { name: "Sam Curran", points: 390 },
                    ],
                },
                t20: {},
                test: {},
            },
            women: {
                "one-day": {
                    batwoman: [
                        { name: "Smriti Mandhana", points: 810 },
                        { name: "Alyssa Healy", points: 805 },
                        { name: "Meg Lanning", points: 800 },
                        { name: "Harmanpreet Kaur", points: 790 },
                        { name: "Chamari Athapaththu", points: 780 },
                        { name: "Mithali Raj", points: 770 },
                        { name: "Suzie Bates", points: 765 },
                        { name: "Beth Mooney", points: 760 },
                        { name: "Sophie Devine", points: 755 },
                        { name: "Laura Wolvaardt", points: 750 },
                    ],
                    bowler: [
                        { name: "Jhulan Goswami", points: 755 },
                        { name: "Shabnim Ismail", points: 748 },
                        { name: "Megan Schutt", points: 740 },
                        { name: "Anya Shrubsole", points: 735 },
                        { name: "Katherine Brunt", points: 730 },
                        { name: "Rajeshwari Gayakwad", points: 725 },
                        { name: "Sophie Ecclestone", points: 720 },
                        { name: "Radha Yadav", points: 715 },
                        { name: "Sarah Glenn", points: 710 },
                        { name: "Poonam Yadav", points: 705 },
                    ],
                    allrounder: [
                        { name: "Ellyse Perry", points: 460 },
                        { name: "Deepti Sharma", points: 455 },
                        { name: "Natalie Sciver", points: 450 },
                        { name: "Amelia Kerr", points: 445 },
                        { name: "Ashleigh Gardner", points: 440 },
                        { name: "Sneh Rana", points: 435 },
                        { name: "Nida Dar", points: 430 },
                        { name: "Marizanne Kapp", points: 425 },
                        { name: "Harmanpreet Kaur", points: 420 },
                        { name: "Heather Knight", points: 415 },
                    ],
                },
                t20: {},
                test: {},
            },
        },
        team: {
            men: {
                "one-day": [
                    { name: "India", points: 125 },
                    { name: "Australia", points: 119 },
                    { name: "England", points: 114 },
                ],
                t20: [],
                test: [],
            },
            women: {
                "one-day": [
                    { name: "Australia Women", points: 132 },
                    { name: "England Women", points: 128 },
                    { name: "India Women", points: 122 },
                ],
                t20: [],
                test: [],
            },
        },
    };

    const isPlayer = type === "player";
    const label = gender === "men" ? (isPlayer ? "Batsman" : "Team") : isPlayer ? "Batwoman" : "Team";
    const currentData = referenceData[type][gender][format];

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto">
            <div className="flex gap-6 mb-4 border-b justify-center border-gray-200 text-lg sm:text-base">
                {["Team", "Player"].map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setType(tab.toLowerCase())}
                        className={`cursor-pointer pb-2 ${type === tab.toLowerCase()
                                ? "border-b-2 border-blue-800 text-blue-800 font-semibold"
                                : "text-gray-600 hover:text-blue-800"
                            }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 md:gap-4 mb-3 md:mb-4">
                {["men", "women"].map((g) => (
                    <button
                        key={g}
                        onClick={() => {
                            setGender(g);
                            setFormat("one-day");
                        }}
                        className={`px-3 py-1 md:px-3 md:py-1 rounded-full text-white text-sm md:text-base font-semibold transition duration-300 shadow-md ${gender === g ? "bg-blue-800" : "bg-gray-400 hover:bg-gray-500"
                            }`}
                    >
                        {g === "men" ? "Men's" : "Women's"}
                    </button>
                ))}
            </div>

            <div className="flex justify-center gap-2 md:gap-4 mb-5 md:mb-6">
                {["one-day", "t20", "test"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFormat(f)}
                        className={`px-2 py-1 md:px-2 md:py-1 rounded-md border text-sm md:text-base font-medium transition ${format === f
                                ? "bg-blue-800 text-white border-blue-800"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {f.toUpperCase()}
                    </button>
                ))}
            </div>

            {isPlayer ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {[{ key: gender === "men" ? "batsman" : "batwoman", label: `${label}s` }, { key: "bowler", label: "Bowlers" }, { key: "allrounder", label: "All-Rounders" }].map(({ key, label }) => (
                        <div key={key} className="bg-white p-3 md:p-4 shadow rounded-lg ">
                            <h2 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-left">{label}</h2>
                            <div className="flex text-[10px] md:text-xs font-bold text-gray-600  pb-1 mb-2">
                                <div className="w-1/5 text-left">Rank</div>
                                <div className="w-3/5 text-left">Player</div>
                                <div className="w-1/5 text-right">Points</div>
                            </div>
                            {(currentData[key] || []).map((player, idx) => (
                                <div key={idx} className="flex text-[11px] md:text-sm py-1 border-b last:border-b-0">
                                    <div className="w-1/5 text-left text-gray-500">{idx + 1}</div>
                                    <div className="w-3/5 text-left">{player.name}</div>
                                    <div className="w-1/5 text-right font-medium text-gray-700">{player.points}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white p-4 shadow rounded-lg ">
                    <h2 className="text-base font-semibold mb-3 text-left">{label} Rankings</h2>
                    <div className="flex text-sm font-bold text-gray-600 border-b pb-1 mb-2">
                        <div className="w-1/5 text-left">Rank</div>
                        <div className="w-3/5 text-left">Team</div>
                        <div className="w-1/5 text-right">Points</div>
                    </div>
                    {(currentData || []).map((team, idx) => (
                        <div key={idx} className="flex text-sm py-1 border-b last:border-b-0">
                            <div className="w-1/5 text-left text-gray-500">{idx + 1}</div>
                            <div className="w-3/5 text-left">{team.name}</div>
                            <div className="w-1/5 text-right font-medium text-gray-700">{team.points}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Rankings;
