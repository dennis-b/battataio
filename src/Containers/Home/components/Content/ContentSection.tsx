import React from 'react';
import { StGrid } from "../../../../Components";
import { ContentSectionItem } from "./ContentSectionItem";

export const ContentSection = ({ data, sectionId }) => {

    return (
        <StGrid container spacing={4} p={1}>
            {data.map((item) => <ContentSectionItem item={item} key={item.id} parentId={sectionId} />)}
        </StGrid>
    );
};
