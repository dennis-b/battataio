import styled from "styled-components";
import { StContainer } from "../styled";

export const Root: any = styled(StContainer)`
  ;
  transition: ease-in-out all 300ms;
  border-bottom: 1px solid white;
  border-radius: ${({ open }: any) => open && '10px'};
  overflow: hidden;
`;

export const StHeader: any = styled(StContainer)`
  border-radius: 10px;
`;
