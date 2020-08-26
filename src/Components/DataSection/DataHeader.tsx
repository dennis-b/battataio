import React from 'react';
import { StBaseSvg, StContainer, StText } from "../styled";
import { StArrow } from "../../Containers/Home/components/TopBar/styled";
import { ArrowSvg } from "../../assets/svgs/ArrrowSvg";
import { StHeader } from "./styled";
import { AppTheme } from "../../assets/theme";

export const DataHeader = ({ toggleOpen, title, open, image: SvgImage }) => {
    const color = open ? AppTheme.colors.blue : AppTheme.colors.white;

    return (
        <StHeader display='flex' p={1} align='center'>
            <StBaseSvg viewBox={'0 0 512 512'} width={20} height={20}>
                <SvgImage fill={color} />
            </StBaseSvg>

            <StText
                ml={1}
                textcolor={color}
                weight={open ? 'bold' : 'normal'}
            >
                {title}
            </StText>

            <StContainer ml={'auto'} mr={1}>
                <StArrow
                    onClick={toggleOpen}
                    open={open}
                    viewBox={'0 0 490.656 490.656'}
                    width={20}
                    height={20}
                >
                    <ArrowSvg fill={color} />
                </StArrow>
            </StContainer>
        </StHeader>
    );
};
