import React from 'react';
import { DataSection } from "../../../../Components/DataSection/DataSection";
import { FolderSvg } from "../../../../assets/svgs/FolderSvg";
import { ContentSection } from "./ContentSection";
import { ContentSectionHeader } from "./ContentSectionHeader";

export const ContentSections = ({ data }) => {

    return (
        data.map(({ id, name, data: sectionData }) => (
            <DataSection
                key={id}
                title={name}
                image={FolderSvg}
                content={() => <ContentSection data={sectionData} sectionId={id} />}
                header={ContentSectionHeader}
                containerStyle={{
                    content: {
                        bgColor: 'transparent',
                        height: 'fit-content',
                    }
                }}
            />
        ))

    );
};
