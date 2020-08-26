import styled from 'styled-components';
import { StContainer } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";

export const StActionContainer: any = styled(StContainer)`
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const StButton: any = styled.button`
  background: ${AppTheme.colors.blue};
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: white;
  border: solid 1px white;
  border-radius: 5px;
  cursor: pointer;
`;

