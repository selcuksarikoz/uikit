import { ButtonSize } from "@Enum";
import React from "react";

export namespace IButton {
  export interface IButtonProps {
    loading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    size?: ButtonSize
  }
}