import styled from "styled-components/native";

import { ButtonSize } from "@Enum";
import { IButton } from "@Components/Button/IButton.interface";

export const StyledButton = styled.Button<IButton.IButtonProps>`
  padding: ${props => ButtonSize[props.size] || ButtonSize.md}
`;