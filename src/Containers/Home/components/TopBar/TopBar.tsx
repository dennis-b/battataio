import React, { useState } from "react";
import { StTopBar } from "../styled";
import { AppImages } from "../../../../assets";
import { StContainer, StGrid, StImage } from "../../../../Components";
import { TopBarItem } from "./BarItem";
import { StArrow } from "./styled";

const topBarData = [
    { id: 'dashboard', text: 'DASHBOARD' },
    { id: 'stakeholders', text: 'STAKEHOLDERS' },
    { id: 'master_contract', text: 'MASTER CONTRACT' },
    { id: 'subcontractors', text: 'SUBCONTRACTORS' },
    { id: 'trades', text: 'TRADES' },
    { id: 'menu', text: 'DASHBOARD' },
];

export function TopBar() {

    const [open, setOpen] = useState<boolean>(false)

    const toggleOpen = () => setOpen(!open)

    return (
        <StTopBar>
            <StGrid container spacing={4} justify="space-around" width="90%">
                {topBarData.map(({ id, text }) => <TopBarItem key={id} text={text} />)}
            </StGrid>
            <StContainer ml='auto' mr={2} display='flex' align='center'>
                <StImage src={AppImages.Avatar} width='30px' height='30px' mr={1} />
                <StArrow
                    onClick={toggleOpen}
                    open={open}
                    src={AppImages.DownArrow}
                    width='20px'
                    height='20px'
                />
            </StContainer>
        </StTopBar>
    )
}
