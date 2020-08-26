import React from 'react';
import { StImage } from "../../../../Components";
import { AppImages } from "../../../../assets";
import { StActionContainer } from "./styled";

export const Actions = ({ onSave, editMode, onCancel, toggleEditMode }) => {
    return (
        <StActionContainer
            ml='auto'
            position='absolute'
            display='flex'
            width='50px'
            justify='space-around'
        >
            {
                !editMode && (
                    <StImage
                        onClick={toggleEditMode}
                        src={AppImages.Edit}
                        width={15}
                        height={15}
                    />
                )

            }
            {
                editMode && (
                    <>
                        <StImage
                            onClick={onSave}
                            src={AppImages.Done}
                            width={15}
                            height={15}
                        />
                        <StImage
                            onClick={onCancel}
                            src={AppImages.Close}
                            width={15}
                            height={15}
                        />
                    </>

                )
            }

        </StActionContainer>
    );
};
