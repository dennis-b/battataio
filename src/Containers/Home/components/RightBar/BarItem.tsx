import React from "react";
import { StContainer, StImage } from "../../../../Components";

export const BarItem = ({ index, image }) => (
    <StContainer mt={index === 0 ? 1.5 : 3} cursor='pointer'>
        <StImage src={image} width='20px' height='20px' />
    </StContainer>
)
