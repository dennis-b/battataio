import React from 'react';
import { StContainer, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";
import { StButton } from "./styled";

export const ContentHeader = () => {
    return (
        <StContainer display='flex' p={1}>
            <StContainer direction='column' display='flex' align='flex-start'>
                <StText size={AppTheme.fontSizes.large}>
                    Details of Change Order 1234
                </StText>
                <StText textcolor={AppTheme.colors.blueDark} size={AppTheme.fontSizes.medium}>
                    Cim Steel & Kenitics
                </StText>
            </StContainer>

            <StContainer ml='auto' mr={2}>
                <StButton> + New Order</StButton>
            </StContainer>

        </StContainer>
    );
};
