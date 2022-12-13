import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import ProgressSproutWrapper from "./ProgressSproutWrapper";
import { ProgressSprout } from "../Svg";
import { ProgressProps, variants, scales } from "./types";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({
  variant = variants.ROUND,
  scale = scales.MD,
  primaryStep = 0,
  secondaryStep = null,
  showProgressSprout = false,
}) => {
  return (
    <StyledProgress variant={variant} scale={scale}>
      {showProgressSprout && (
        <ProgressSproutWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
          <ProgressSprout />
        </ProgressSproutWrapper>
      )}
      <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
      {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
    </StyledProgress>
  );
};

export default Progress;
