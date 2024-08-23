import { useState } from "react";

const Form = () => {
  const [formType, setFormType] = useState("athlete");
  const [athleteFormData, setAthleteFormData] = useState({
    athleteName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    district: "",
    pin: "",
    mob: "",
    email: "",
    adharNumber: "",
    panNumber: "",
    photo: null,
    address: "",
    academyName: "",
    coachName: "",
    certificate: null,
  });

  const [coachFormData, setCoachFormData] = useState({
    playerName: "",
    dob: "",
    gender: "",
    adharNumber: "",
    photo: null,
  });

  const districts = [
    "Srinagar",
    "Jammu",
    "Anantnag",
    "Baramulla",
    "Budgam",
    "Kupwara",
    "Pulwama",
    "Kulgam",
    "Bandipora",
    "Shopian",
    "Rajouri",
    "Poonch",
    "Udhampur",
    "Reasi",
    "Kathua",
    "Doda",
    "Kishtwar",
    "Ramban",
    "Samba",
    "Ganderbal",
  ];

  const handleAthleteChange = (e) => {
    const { name, value, files } = e.target;
    setAthleteFormData({
      ...athleteFormData,
      [name]: files ? files[0] : value,
    });
  };

  const handleCoachChange = (e) => {
    const { name, value, files } = e.target;
    setCoachFormData({
      ...coachFormData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "athlete") {
      console.log("Athlete Data:", athleteFormData);
    } else {
      console.log("Coach Data:", coachFormData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-[#F1A208] via-[#D5C67A] to-[#06A77D] shadow-lg rounded-lg">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setFormType("athlete")}
          className={`${
            formType === "athlete" ? "bg-[#005377]" : "bg-[#D5C67A]"
          } text-white font-semibold py-2 px-4 rounded-md transition duration-300 shadow-md hover:bg-[#005377]`}
        >
          Athlete Registration
        </button>
        <button
          onClick={() => setFormType("coach")}
          className={`${
            formType === "coach" ? "bg-[#005377]" : "bg-[#D5C67A]"
          } text-white font-semibold py-2 px-4 rounded-md transition duration-300 shadow-md hover:bg-[#005377]`}
        >
          Coach Registration
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[#005377]">
        {formType === "athlete"
          ? "Athlete Registration Form"
          : "Coach Registration Form"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {formType === "athlete" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="athleteName"
              placeholder="Name of the Athlete"
              value={athleteFormData.athleteName}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              value={athleteFormData.fatherName}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="text"
              name="motherName"
              placeholder="Mother's Name"
              value={athleteFormData.motherName}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="date"
              name="dob"
              value={athleteFormData.dob}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <select
              name="gender"
              value={athleteFormData.gender}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="district"
              value={athleteFormData.district}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="pin"
              placeholder="PIN"
              value={athleteFormData.pin}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="tel"
              name="mob"
              placeholder="Mobile Number"
              value={athleteFormData.mob}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={athleteFormData.email}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="text"
              name="adharNumber"
              placeholder="Aadhar Number"
              value={athleteFormData.adharNumber}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="text"
              name="panNumber"
              placeholder="PAN Number (Optional)"
              value={athleteFormData.panNumber}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={athleteFormData.address}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="text"
              name="academyName"
              placeholder="Academy Name"
              value={athleteFormData.academyName}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="text"
              name="coachName"
              placeholder="Coach Name"
              value={athleteFormData.coachName}
              onChange={handleAthleteChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Athlete Photo
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleAthleteChange}
                className="border-none"
                required
              />
            </div>
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Birth or Resident Certificate
              </label>
              <input
                type="file"
                name="certificate"
                onChange={handleAthleteChange}
                className="border-none"
                required
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="playerName"
              placeholder="Name of the Player"
              value={coachFormData.playerName}
              onChange={handleCoachChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <input
              type="date"
              name="dob"
              value={coachFormData.dob}
              onChange={handleCoachChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <select
              name="gender"
              value={coachFormData.gender}
              onChange={handleCoachChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="adharNumber"
              placeholder="Aadhar Number"
              value={coachFormData.adharNumber}
              onChange={handleCoachChange}
              className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              required
            />
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Photo
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleCoachChange}
                className="border-none"
                required
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="bg-[#005377] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#052F5F] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
