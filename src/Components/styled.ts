import styled from 'styled-components';
import { MarginCss, PaddingCss } from "./layoat";
import { Grid, Typography } from "@material-ui/core";
import { AppTheme } from "../assets/theme";

export const Root: any = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }: any) => align || 'initial'};
  justify-content:  ${({ justify }: any) => justify || 'initial'};
  background-color: #F5F5F5;
  overflow-x: auto;
`;


export const StContainer: any = styled.div`
  ${PaddingCss};
  ${MarginCss};
  flex: ${({ flex }: any) => flex && flex};
  height: ${({ height }: any) => height ? height : 'initial'};
  width: ${({ width }: any) => width ? width : 'initial'};
  display: ${({ display }: any) => display || 'block'};
  position: ${({ position }: any) => position || 'initial'};
  justify-content: ${({ justify }: any) => justify || 'initial'};
  flex-direction: ${({ direction }: any) => direction || 'initial'};
  align-items: ${({ align }: any) => align || 'initial'};
  cursor: ${({ cursor }: any) => cursor || 'initial'};
  background-color: ${({ bgColor }: any) => bgColor && bgColor};
`;

export const StImage: any = styled.img`
  ${PaddingCss};
  ${MarginCss};
  height: ${({ height }: any) => height ? height : 'initial'};
  width: ${({ width }: any) => width ? width : 'initial'};
`;

export const StBaseSvg: any = styled.svg`
  width: ${({ width }: any) => width ? `${width}px` : 'inherit'};
  height: ${({ height }: any) => height ? `${height}px` : 'inherit'};
  transition: width linear 100ms, height linear 100ms;
`;

export const StGrid: any = styled(Grid)`
  ${PaddingCss};
  ${MarginCss};
  flex: ${({ flex }: any) => flex && flex};
  height: ${({ height }: any) => height ? height : 'initial'};
  width: ${({ width }: any) => width ? width : 'initial'};
  display: ${({ display }: any) => display || 'initial'};
  position: ${({ position }: any) => position || 'initial'};
  background-color: ${({ bgColor }: any) => bgColor && bgColor};
  
`;

export const StText: any = styled(Typography)`
  ${PaddingCss};
  ${MarginCss};
  &&{
   color : ${({ textcolor }: any) => textcolor || AppTheme.colors.white};
   font-size: ${({ size }: any) => size || 'inherit'};
   font-weight: ${({ weight }: any) => weight || 'inherit'};
   font-family: ${({ family }: any) => family || 'Montserrat,serif'};
  }
`;

export const StInput: any = styled.input`
  ${PaddingCss};
  ${MarginCss};
  &&{
   color : ${({ textcolor }: any) => textcolor || 'inherit'};
   font-size: ${({ size }: any) => size || 'inherit'};
   font-weight: ${({ weight }: any) => weight || 'inherit'};
   font-family: ${({ family }: any) => family || 'Montserrat,serif'};
   padding: 0.3rem;
   border: solid 1px white;
   border-radius: 5px;
  }
`;
