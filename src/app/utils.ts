import { ButtonSize, ButtonVariant } from "./types";

export const getVariantClasses = (variant: ButtonVariant) => {
    switch (variant) {
      case ButtonVariant.SECONDARY:
        return `bg-secondaryGrey200 text-secondaryGrey400
        hover:bg-secondaryGrey300
        focus:bg-secondaryGrey300
        active:bg-secondaryGrey400
        disabled:bg-secondaryGrey100 disabled:cursor-not-allowed`;
      case ButtonVariant.TEXT:
        return `text-mainBlue500 underline
        hover:text-blue-700
        focus:text-blue-700
        active:text-blue-800`;
      case ButtonVariant.DANGER:
        return `bg-semanticError500 text-mainWhite
        hover:bg-semanticError600
        focus:bg-semanticError600
        active:bg-semanticError700
        disabled:bg-semanticError100 disabled:cursor-not-allowed`;
      case ButtonVariant.WARNING:
        return `bg-semanticWarning500 text-mainWhite
        hover:bg-semanticWarning600
        focus:bg-semanticWarning600
        active:bg-semanticWarning700
        disabled:bg-semanticWarning100 disabled:cursor-not-allowed`;
      case ButtonVariant.TEXT_WARNING:
        return `text-semanticWarning500 underline
        hover:text-semanticWarning600
        focus:text-semanticWarning600
        active:text-semanticWarning700`;
      default:
        return `bg-mainBlack900 text-mainWhite
        hover:bg-mainBlue500
        focus:bg-mainBlue500 focus:border-2 focus:border-brandUranus100
        active:bg-mainBlack900
        disabled:bg-mainBlack200 disabled:cursor-not-allowed`;
    }
  };

  export const getSizeClasses = (size: ButtonSize) => {
    switch (size) {
      case ButtonSize.MD:
        return 'text-base px-4 py-2';
      default:
        return 'text-lg px-6 py-3';
    }
  };