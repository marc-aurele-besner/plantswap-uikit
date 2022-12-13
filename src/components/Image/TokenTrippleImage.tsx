import React from "react";
import { TokenTrippleImageProps, variants } from "./types";
import { StyledPrimaryImage, StyledSecondaryImage, StyledThirdImage } from "./styles";
import Wrapper from "./Wrapper";

const TokenTrippleImage: React.FC<TokenTrippleImageProps> = ({
  primarySrc,
  secondarySrc,
  thirdSrc,
  width,
  height,
  variant = variants.DEFAULT,
  primaryImageProps = {},
  secondaryImageProps = {},
  thirdImageProps = {},
  ...props
}) => {
  const secondaryImageSize = Math.floor(width / 2);
  const thirdImageSize = Math.floor(width / 2);

  return (
    <Wrapper position="relative" width={width} height={height} {...props}>
      <StyledPrimaryImage variant={variant} src={primarySrc} width={width} height={height} {...primaryImageProps} />
      <StyledSecondaryImage
        variant={variant}
        src={secondarySrc}
        width={secondaryImageSize}
        height={secondaryImageSize}
        {...secondaryImageProps}
      />
      <StyledThirdImage
        variant={variant}
        src={thirdSrc}
        width={thirdImageSize}
        height={thirdImageSize}
        {...thirdImageProps}
      />
    </Wrapper>
  );
};

export default TokenTrippleImage;
