import React from "react";
import { StGrid, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";

export const TopBarItem = ({ text }) => (
    <StGrid item>
        <StText textcolor={AppTheme.colors.blueDark}>{text}</StText>
    </StGrid>
)
