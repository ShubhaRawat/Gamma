import React, { useState, useRef, useEffect } from "react";
import { FolderOpen } from "lucide-react";

const CardTemplate = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const cardRef = useRef(null);

  const cardTemplates = [
    {
      id: "blank",
      name: "Blank Card",
      content: <div className="p-4 bg-white border rounded">Blank Card</div>,
    },
    {
      id: "two-column",
      name: "Two Column",
      content: (
        <div className="p-4 bg-white border rounded grid grid-cols-2 gap-2">
          <div className="bg-gray-100 p-2">Column 1</div>
          <div className="bg-gray-100 p-2">Column 2</div>
        </div>
      ),
    },
    {
      id: "three-column",
      name: "Three Column",
      content: (
        <div className="p-4 bg-white border rounded grid grid-cols-3 gap-1">
          <div className="bg-gray-200 p-2"></div>
          <div className="bg-gray-200 p-2"></div>
          <div className="bg-gray-200 p-2"></div>
        </div>
      ),
    },
    {
      id: "text-with-image",
      name: "Text with Image",
      content: (
        <div className="p-4 bg-white border rounded flex items-center gap-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Placeholder"
            className="w-12 h-12 rounded"
          />
          <div>Text with an Image</div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsCardVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group" ref={cardRef}>
      <div
        className={`text-lg text-purple-500 p-2 rounded transition-all duration-300 ${
          isCardVisible ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
        onClick={() => setIsCardVisible((prev) => !prev)}
        onMouseEnter={() => setIsNameVisible(true)}
        onMouseLeave={() => setIsNameVisible(false)}
      >
        <FolderOpen />
      </div>

      {isCardVisible && (
        <div className="absolute whitespace-nowrap right-11 top-0 bg-gray-500 text-black rounded-md p-2 shadow-md w-80 h-96 overflow-auto">
          {/* Container for card templates */}
          <div className="space-y-4">
            {cardTemplates.map((template) => (
              <div
                key={template.id}
                className="border-b pb-2 last:border-b-0 bg-gray-100 rounded transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-2"
              >
                <h4 className="text-sm font-semibold mb-1">{template.name}</h4>
                <div className="h-20 w-full">{template.content}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isNameVisible && (
        <span className="absolute whitespace-nowrap right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold rounded-md px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Card template
        </span>
      )}
    </div>
  );
};

export default CardTemplate;
