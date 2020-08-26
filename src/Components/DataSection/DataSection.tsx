import React, { useState } from 'react';
import { StContainer } from "../styled";
import { Root } from './styled';
import { DataHeader } from "./DataHeader";

interface DataSectionProps {
    title: string;
    header?: any;
    content: any;
    image?: any
    containerStyle?: any
}

const defaultStyle = {
    content: {
        bgColor: 'white',
        height: 250
    }
}

export const DataSection = (
    {
        image,
        title,
        content: Content,
        header: Header,
        containerStyle: { content: { bgColor, height } } = defaultStyle
    }: DataSectionProps) => {

    const [open, setOpen] = useState<boolean>(false)

    const toggleOpen = () => setOpen(!open)

    return (
        <Root
            display='flex'
            direction='column'
            m={1}
            height={open ? `${height}px` : '60px'}
            bgColor={open && bgColor}
            open={open}
        >

            {Header ?
                <Header
                    toggleOpen={toggleOpen}
                    open={open}
                    title={title}
                />
                :
                <DataHeader
                    title={title}
                    toggleOpen={toggleOpen}
                    open={open}
                    image={image}
                />
            }


            <StContainer>
                <Content />
            </StContainer>


        </Root>
    );
};
