import React from "react";

import { StyledButton, IButton } from "@Components/Button";
import { ButtonSize } from "@Enum";

export const Button = (props: IButton.IButtonProps) => {
  const { loading, leftIcon, rightIcon, size = ButtonSize.md } = props;
  return (
    <StyledButton size={size}>

    </StyledButton>
  );
};