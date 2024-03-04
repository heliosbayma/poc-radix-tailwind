// eslint-disable-next-line deprecate/import
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material'
import { FC, MouseEventHandler, forwardRef } from 'react'

import { Icon, LightIconName } from '@shared/Icon'
import { LoadingDots } from '@shared/Loading/LoadingDots'
import { colors } from '@shared/Theme'

/**
 * =========================
 * NOTES TO DEVS
 * =========================
 * This component is a wrapper around the MUI Button component, it is styled mostly in the theme.
 * Try to adjust the theme instead of styling the button directly
 * It also supports most MUI props (variants, colors, sizes, etc..) try to stay as close as the MUI implementation as
 * possible to avoid confusion
 * When modifying the Button component, make sure all possible iterations are still looking fine,
 * see the bottom of this file for a list of examples
 */
export type ButtonProps = Omit<MUIButtonProps, 'startIcon' | 'endIcon'> & {
  isLoading?: boolean
} & ( // Normal button has the option of having a start and end icon
    | {
        startIcon?: LightIconName
        endIcon?: LightIconName
        endIconOnClick?: MouseEventHandler
        icon?: never
        children: MUIButtonProps['children']
        borderType?: never
        /** Truncate the text with an ellipsis if it's too long */
        ellipsis?: boolean
      }
    // Icon button has only an icon, without children
    | {
        startIcon?: never
        endIcon?: never
        endIconOnClick?: never
        icon: LightIconName
        children?: never
        borderType?: 'round'
        ellipsis?: never
      }
  ) &
  // Either of
  // - type button with an onClick
  // - (default) type submit (or empty which default to submit) without an onClick event
  // - a link (href without onClick or submit behavior)
  (| {
        type: 'button'
        onClick: MUIButtonProps['onClick']
        href?: never
        target?: never
      }
    | {
        type?: 'submit'
        onClick?: never
        href?: never
        target?: never
      }
    | { type?: never; onClick?: never; href: string; target?: string }
  )

/**
 * @param isLoading - If true, the button will show a loading indicator
 * @param startIcon - If passed, the button will have an icon at the start
 * @param endIcon - If passed, the button will have an icon at the end
 * @param variant - MUI variants (contained, outlined, text)
 * @param size - MUI sizes (small, medium, large)
 * @param color - MUI colors (primary, secondary, warning, error, success, info, inherit)
 * @param icon - If passed, the button will be an icon only button. Default variant is "outlined" for icon buttons
 * @param borderType - If 'round' is passed, the button will have a round border
 * All other MUI Button props are passed through and supported
 * A button is either of type "button" with an onClick, or type submit without an onClick event. "Submit" is the default behavior (native HTML behavior)
 * If the button is has the "icon" prop. startIcon, endIcon and children are not supported
 */
export const Button: FC<React.PropsWithChildren<ButtonProps>> = forwardRef((props, ref) => {
  const { borderType, disabled, ellipsis, icon, isLoading, startIcon, endIcon, endIconOnClick, children, sx, ...rest } =
    props

  // We should probably split "icon only" buttons into a separate component, like MUI does with IconButton
  if (icon) {
    // Default style for icon buttons is outlined
    const variant = props.variant || 'outlined'

    // Make border round if borderType='round' is passed
    const buttonSx =
      borderType === 'round'
        ? [
            {
              alignItems: 'center',
              borderRadius: '50%',
              minWidth: 0,
              padding: 0,
              height: mapRoundIconButtonSize(props.size),
              width: mapRoundIconButtonSize(props.size),
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]
        : [
            {
              p: mapIconPaddingSize(props.size),
              minWidth: 0,
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]

    return (
      <MUIButton variant={variant} disabled={disabled || isLoading} ref={ref} sx={buttonSx} {...rest}>
        <Icon name={icon} color='currentColor' size={props.size} />
      </MUIButton>
    )
  }

  return (
    <MUIButton
      variant='contained'
      disabled={disabled || isLoading}
      ref={ref}
      // Do not use custom styling here, modify the button items in the theme instead
      // sx={} // <-- Don't
      sx={[
        ellipsis ? { display: 'inline-block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' } : {},
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...(!isLoading &&
        startIcon && {
          startIcon: <Icon name={startIcon} color='currentColor' size={props.size} />,
        })}
      {...(!isLoading &&
        endIcon && {
          endIcon: <Icon name={endIcon} color='currentColor' size={props.size} onClick={endIconOnClick} />,
        })}
      {...rest}
    >
      {isLoading ? <LoadingDots color={colors.white} /> : children}
    </MUIButton>
  )
})

function mapRoundIconButtonSize(size: MUIButtonProps['size']) {
  switch (size) {
    case 'small':
      return '25px'
    case 'medium':
      return '30px'
    case 'large':
      return '40px'
    default:
      return '40px'
  }
}

function mapIconPaddingSize(size: MUIButtonProps['size']) {
  switch (size) {
    case 'small':
      return '10px'
    case 'medium':
      return '12px'
    case 'large':
      return '13px'
    default:
      return '13px'
  }
}