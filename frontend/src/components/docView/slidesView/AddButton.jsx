import React, { useState } from "react";
import CardTemplates from "./CardTemplates.jsx";

const AddButton = ({slidesPreview,setSlidesPreview,after}) => {
  const [popupText, setPopupText] = useState("");
  const [showCardTemplates, setShowCardTemplates] = useState(false);
  const [isPlus, setIsPlus] = useState(true); // Tracks the "+" or "-" state
  const [isVisible, setIsVisible] = useState(true);
  const handleMouseEnter = (text) => {
    // setIsVisible(true);
    setPopupText(text);
  };

  const handleMouseLeave = () => {
    // setIsVisible(false);
    setPopupText("");
  };

  const handlePlusClick = () => {
    // setSlidesPreview([...slidesPreview,{title:"",id:slidesPreview.length+1,number:slidesPreview.length+1,Content:<CardTemplates/>,onclick:()=>setCurrentSlide(slidesPreview.length+1)}])
    setShowCardTemplates(!showCardTemplates); // Toggles card templates visibility
    setIsPlus(!isPlus); // Toggles between "+" and "-"
  };
  {
    if (isVisible) {
      return (
        <div
          id="AddButton"
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "8px",
              padding: "5px",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "18px",
                padding: "8px 12px",
                textAlign: "center",
                cursor: "pointer",
                border: "1px solid #555",
                margin: "0 2px",
                borderRadius: "4px",
                backgroundColor: "#342c4e",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => {
                isPlus
                  ? `${handleMouseEnter("Add Card")}`
                  : `${handleMouseEnter("Remove Card")}`;
              }}
              onMouseLeave={handleMouseLeave}
              onClick={handlePlusClick}
            >
              {isPlus ? "+" : "-"} {/* Toggles between "+" and "-" */}
            </div>
            <div
              style={{
                color: "white",
                fontSize: "18px",
                padding: "8px 12px",
                textAlign: "center",
                cursor: "pointer",
                border: "1px solid #555",
                margin: "0 2px",
                borderRadius: "4px",
                backgroundColor: "#342c4e",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => handleMouseEnter("Add Card with AI")}
              onMouseLeave={handleMouseLeave}
            >
              ✨
            </div>
            <div
              style={{
                color: "white",
                fontSize: "18px",
                padding: "8px 12px",
                textAlign: "center",
                cursor: "pointer",
                border: "1px solid #555",
                margin: "0 2px",
                borderRadius: "4px",
                backgroundColor: "#342c4e",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => handleMouseEnter("Add from Template")}
              onMouseLeave={handleMouseLeave}
            >
              ⬇️
            </div>
          </div>
          {popupText && (
            <div
              style={{
                position: "absolute",
                top: "-35px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#222",
                color: "white",
                padding: "8px 12px",
                fontSize: "14px",
                borderRadius: "4px",
                whiteSpace: "nowrap",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              {popupText}
            </div>
          )}
          {/* Render CardTemplates without changing button appearance */}
          {showCardTemplates && <CardTemplates />}
        </div>
      );
    } else {
      return null;
    }
  }
};

export default AddButton;
