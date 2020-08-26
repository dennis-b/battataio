import React from 'react';
import { PrevImage, StButton, StNavigationContainer } from "./styled";
import { StContainer, StImage, StText } from "../../../../Components";
import { AppImages } from "../../../../assets";

export const Navigation = () => {
    return (
        <StNavigationContainer position="fixed">
            <StButton>
                <StContainer display='flex' align='center'>
                    <PrevImage src={AppImages.ArrowRight} width={'10px'} height={'10px'} />
                    <StText ml={0.5}>Previous</StText>
                </StContainer>
            </StButton>

            <StButton>
                <StContainer display='flex' align='center'>
                    <StText mr={0.5}>Next</StText>
                    <StImage src={AppImages.ArrowRight} width={'10px'} height={'10px'} />
                </StContainer>
            </StButton>

        </StNavigationContainer>
    );
};
