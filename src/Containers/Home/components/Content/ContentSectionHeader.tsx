import React from 'react';
import { StHeader } from "../../../../Components/DataSection/styled";
import { StContainer, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";
import { StArrow } from "../TopBar/styled";
import { ArrowSvg } from "../../../../assets/svgs/ArrrowSvg";

export const ContentSectionHeader = ({ toggleOpen, open, title }) => {

    return (
        <StHeader display='flex' p={1} align='center'>

            <StContainer mr={1}>
                <StArrow
                    onClick={toggleOpen}
                    open={open}
                    viewBox={'0 0 490.656 490.656'}
                    width={20}
                    height={20}
                >
                    <ArrowSvg fill={AppTheme.colors.blue} />
                </StArrow>
            </StContainer>

            <StText
                ml={1}
                textcolor={AppTheme.colors.blue}
                weight={'bold'}
            >
                {title}
            </StText>


        </StHeader>
    );
};
