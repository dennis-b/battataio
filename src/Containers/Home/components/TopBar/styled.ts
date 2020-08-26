import styled from "styled-components";
import { StBaseSvg } from "../../../../Components";

export const StArrow: any = styled(StBaseSvg)`
  transform: ${({ open }: any) => !open ? 'rotate(0deg)' : 'rotate(180deg)'};
  transition: all ease-in-out 300ms;
  cursor: pointer;
`;
