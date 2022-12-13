import React from "react";
import styled from "styled-components";
import { PlantRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  plantPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PlantPrice: React.FC<Props> = ({ plantPriceUsd }) => {
  return plantPriceUsd ? (
    <PriceLink
      href="https://exchange.plantswap.finance/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <PlantRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${plantPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(PlantPrice);
