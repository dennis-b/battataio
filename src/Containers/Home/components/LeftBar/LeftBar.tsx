import React from "react";
import { StLeftBar } from "../styled";
import { AppImages } from "../../../../assets";
import { BarItem } from "./BarItem";

const leftBarData = [
    { id: 'menu', image: AppImages.Menu },
    { id: 'database', image: AppImages.Database },
    { id: 'key', image: AppImages.Key },
    { id: 'browser', image: AppImages.Browser },
    { id: 'paper', image: AppImages.Paper },
    { id: 'mail', image: AppImages.Mail }
];


export function LeftBar() {
    return (
        <StLeftBar>
            {leftBarData.map(({ id, image }, index) =>
                <BarItem
                    key={id}
                    image={image}
                    index={index}
                />
            )}
        </StLeftBar>
    )
}
