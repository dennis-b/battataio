import React from "react";
import { StContainer } from "../../../../Components";
import { DataSection } from "../../../../Components/DataSection/DataSection";
import { AppTheme } from "../../../../assets/theme";
import { FolderSvg } from "../../../../assets/svgs/FolderSvg";
import { Reference } from "./Reference";
import { Comments } from "./Comments";
import { Pictures } from "./Pictures";
import { Assignments } from "./Assignments";

const rightBarData = [

    { name: 'Reference', }

]


export function RightBar() {
    return (
        <StContainer
            display='flex'
            direction='column'
            height="100%"
            bgColor={AppTheme.colors.blue}
        >

            <DataSection
                title='Reference'
                image={FolderSvg}
                content={Reference}
            />

            <DataSection
                title='Comments'
                image={FolderSvg}
                content={Comments}
            />


            <DataSection
                title='Pictures'
                image={FolderSvg}
                content={Pictures}
            />

            <DataSection
                title='Assignments'
                image={FolderSvg}
                content={Assignments}
            />

        </StContainer>
    )
}
