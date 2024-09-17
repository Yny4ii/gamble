import React, { useState } from "react";
import {
  SpinWheelInnerContainer,
  SpinWheelOuterContainer,
  SpinWheelPositionContainer,
} from "@/components/blocks/SpinBlock/SpinWheel/styled";
import SpinButton from "@/components/blocks/SpinBlock/SpinWheel/button";
import SpinArrowIcon from "@/components/blocks/SpinBlock/SpinWheel/icons/SpinArrowIcon";

const SpinWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning) return; // Не позволяем крутить, если уже крутится

    const randomDegrees = Math.floor(Math.random() * 360) + 720; // От 720 до 1080 градусов (2-3 полных оборота)
    setRotation((prevRotation) => prevRotation + randomDegrees); // Увеличиваем угол вращения
    setSpinning(true); // Начинаем вращение

    setTimeout(() => {
      setSpinning(false); // Останавливаем вращение через 5 секунд
    }, 5000); // Длительность анимации
  };

  return (
    <SpinWheelPositionContainer>
      <SpinWheelOuterContainer>
        <SpinArrowIcon />
        <SpinWheelInnerContainer $rotation={rotation} />
        <SpinButton onClick={handleSpin} />
      </SpinWheelOuterContainer>
    </SpinWheelPositionContainer>
  );
};

export default SpinWheel;
