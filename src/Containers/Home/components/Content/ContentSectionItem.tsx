import React, { useRef, useState } from 'react';
import { StContainer, StGrid, StInput, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";
import { Actions } from "./Actions";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { homeStoreSelector, WithHomeStore } from "../../HomeStore";

interface Props extends WithHomeStore {
    item: any;
    parentId: string
}

export const ContentSectionItemView = ({ item: { id, title, editable, value }, parentId, homeStore }: Props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [val, setVal] = useState(value);
    const beforeChangeVal = useRef();
    const toggleEditMode = () => {
        const newMode = !editMode;
        if (newMode) {
            beforeChangeVal.current = val
        }
        setEditMode(newMode)
    };


    const onChange = (e) => setVal(e.target.value)

    const onSave = () => {
        homeStore.update({ sectionId: parentId, itemId: id, val })
        toggleEditMode();
    }

    const onCancel = () => {
        setVal(beforeChangeVal.current)
        toggleEditMode();
    }

    return (
        <StGrid item xs={4}>
            <StContainer
                height='100px'
                width='100%'
                bgColor={editMode ? AppTheme.colors.blue : AppTheme.colors.white}
                position='relative'
            >

                {
                    editable &&
                    <Actions
                      onCancel={onCancel}
                      onSave={onSave}
                      toggleEditMode={toggleEditMode}
                      editMode={editMode}
                    />
                }

                <StContainer display='flex' direction='column' p={1}>
                    <StText
                        textcolor={editMode ? AppTheme.colors.white : AppTheme.colors.gray}
                        size={'15px'}
                        mr={'auto'}
                    >
                        {title}
                    </StText>
                    {
                        editMode ?
                            <StInput mt={1} value={val} color={AppTheme.colors.white} onChange={onChange} />
                            :
                            <StText size={'18px'} weight={600} mr={'auto'} mt={1} textcolor={AppTheme.colors.blueDark}>
                                {value}
                            </StText>
                    }
                </StContainer>
            </StContainer>
        </StGrid>
    );
};


const enhance = compose(
    inject(homeStoreSelector),
    observer,
);

export const ContentSectionItem = enhance(ContentSectionItemView as any) as any;
