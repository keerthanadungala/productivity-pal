import React, { useState } from "react";
import { BiHappy, BiAngry, BiSad, BiConfused, BiTired } from "react-icons/bi";

const MoodSelector = ({ setMoodQuote }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
    setMoodQuote(getMoodQuote(mood));
  };

  const getMoodQuote = (mood) => {
    switch (mood) {
      case "happy":
        return "Feeling joyful today! Keep spreading positivity!";
      case "angry":
        return "Take a deep breath. Anger fades with time.";
      case "sad":
        return "It's okay to feel sad sometimes. Tomorrow will be better.";
      case "confused":
        return "Feeling puzzled? Take your time, things will become clearer.";
        case "tired":
          return "Feeling exhausted? It's important to take a break and recharge. Remember to prioritize self-care and rest.";
      default:
        return "";
    }
  };

  return (
      <div className= "flex justify-center mt-5">
      <div className="max-w-[700px] text-center">
      <p className="text-lg font-medium">How are you feeling today?</p>
      <div className="flex gap-3">
        <BiHappy onClick={() => handleMoodSelection("happy")} className={`text-4xl cursor-pointer ${selectedMood === "happy" && "text-yellow-500"}`} title = "Happy"/>
        <BiAngry onClick={() => handleMoodSelection("angry")} className={`text-4xl cursor-pointer ${selectedMood === "angry" && "text-red-600"}`} title = "Angry" />
        <BiSad onClick={() => handleMoodSelection("sad")} className={`text-4xl cursor-pointer ${selectedMood === "sad" && "text-blue-500"}`} title = "Sad" />
        <BiConfused onClick={() => handleMoodSelection("confused")} className={`text-4xl cursor-pointer ${selectedMood === "confused" && "text-purple-500"}`} title = "Confused" />
        <BiTired onClick={() => handleMoodSelection("tired")} className={`text-4xl cursor-pointer ${selectedMood === "tired" && "text-gray-500"}`} title = "Tired" />
      </div>
    </div>
    </div>
  );
};

export default MoodSelector;
