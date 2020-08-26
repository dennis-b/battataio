import React from "react";

import { Root, StGrid } from "../../Components";
import { LeftBar, RightBar, TopBar } from "./components";
import { Content } from "./components/Content";

export function HomeContainer() {

    return (
        <Root>
            <TopBar />
            <LeftBar />
            <StGrid container height='100%'>
                <StGrid item xs={10}>
                    <Content />
                </StGrid>
                <StGrid item xs={2}>
                    <RightBar />
                </StGrid>
            </StGrid>
        </Root>
    )

}
