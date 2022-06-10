import { faCheckCircle, faExclamationCircle, faInfoCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import Icon from '../atoms/Icon/Icon';
import { CardStyling } from '../organisms/Card/Card/Card';
import { Severity } from '../atoms/Alert/Alert';
interface ButtonTheme {
  text: string;
  bg: string;
  hover: string;
  border?: string;
  disabled?: {
    text?: string;
    bg?: string;
    border?: string;
  };
}

interface ButtonsTheme {
  primary: ButtonTheme;
  secondary: ButtonTheme;
  link: ButtonTheme;
  borderRadius?: string;
  text?: {
    size?: string;
    height?: string;
    weight?: number;
  };
}

type AlertTheme = Record<
  Severity,
  {
    icon: string;
    background: string;
    border: string;
    text: string;
    component: FC;
  }
>;

interface CardInfo {
  headingSize: string;
  textSize: string;
  boxShadowStyle: string;
  borderStyle: string;
  backgroundStyle: string;
}

type CardTheme = Record<CardStyling, CardInfo>;

interface ErrorMessageTheme {
  textColor: string;
  backgroundColor: string;
  padding: string;
  icon: boolean;
}

interface FooterTheme {
  bgColor: string;
  showFooterLinks: boolean;
  showLogoBlock: boolean;
  showSocialBlock: boolean;
  showLegalBlock: boolean;
  isLegalBlockFullWidth: boolean;
}

interface InputTheme {
  color: string;
  placeholderColor: string;
  borderRadius: string;
  boxShadow: string;
  hover: {
    border: string;
    error: string;
    boxShadow: string;
  };
  focus: {
    border: string;
    error: string;
    boxShadow: string;
  };
  disabled: {
    color: string;
    backgroundColor: string;
  };
  borderColorByStatus: {
    error: string;
    valid: string;
    disabled: string;
    default: string;
  };
  iconColor: string;
  iconBackgroundColor: string;
  searchInput: {
    boxShadow: string;
    borderRadius: string;
    borderColor: string;
    customIcon: boolean;
    options: {
      borderRadius: string;
      hover: {
        color: string;
        backgroundColor: string;
      };
    };
  };
  checkBox: {
    defaultColor: string;
    borderRadius: string;
    label: {
      borderRadius: string;
      backgroundColor: string;
    };
    customIcon: boolean;
  };
}

interface LinkTheme {
  color: string;
  weight: number;
  hover: {
    color: string;
  };
  active: {
    color: string;
  };
  disableTargetIcon: boolean;
}

interface NavbarTheme {
  iconContainer: {
    display: string;
  };
  logo: {
    render: boolean;
  };
  mobile: {
    minHeight: string;
    bgColor: string;
  };
}
interface ProgressBarTheme {
  color: string;
}
interface ScrollableAreaTheme {
  scrollBarThumb: {
    borderRadius: string;
    border: string;
    bgColor: string;
  };
  scrollBarTrack: {
    background: string;
    borderRadius: string;
  };
}

interface TypographyTheme {
  primary: string;
  text: {
    color: string;
    sizes: {
      lead: string;
      body: string;
      small: string;
    };
  };
  heading: {
    sizes: {
      display: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
  lineHeight: {
    display: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    lead: string;
    body: string;
    small: string;
  };
  letterSpacingMap: {
    display: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  weights: {
    regular: number;
    semiBold: number;
    bold: number;
    extraBold: number;
  };
}

export interface AppTheme {
  alert: AlertTheme;
  button: ButtonsTheme;
  card: CardTheme;
  errorMessage: ErrorMessageTheme;
  footer: FooterTheme;
  input: InputTheme;
  link: LinkTheme;
  progressBar: ProgressBarTheme;
  navbar: NavbarTheme;
  typography: TypographyTheme;
  scrollableArea: ScrollableAreaTheme;
}

export interface AppThemeProps {
  theme: AppTheme;
}

export const zopaTheme: AppTheme = {
  alert: {
    brand: {
      icon: colors.brand,
      background: colors.brandLight,
      border: 'none',
      text: colors.greyDarkest,
      component: () => <Icon variant={faInfoCircle} />,
    },
    info: {
      icon: colors.grey,
      background: colors.greyLighter,
      border: 'none',
      text: colors.greyDarkest,
      component: () => <Icon variant={faInfoCircle} />,
    },
    alert: {
      icon: colors.alert,
      background: colors.alertLight,
      border: 'none',
      text: colors.alertDark,
      component: () => <Icon variant={faMinusCircle} />,
    },
    warning: {
      icon: colors.warning,
      background: colors.warningLight,
      border: 'none',
      text: colors.warningDark,
      component: () => <Icon variant={faExclamationCircle} />,
    },
    success: {
      icon: colors.success,
      background: colors.successLight,
      border: 'none',
      text: colors.successDark,
      component: () => <Icon variant={faCheckCircle} />,
    },
  },
  button: {
    primary: {
      text: colors.white,
      bg: colors.action,
      hover: `linear-gradient(90deg, #3B46C4 0%, #2732B0 100%)`,
    },
    secondary: {
      text: colors.actionDark,
      bg: colors.actionLight,
      hover: '#EEEFFB',
    },
    link: {
      text: colors.actionDark,
      bg: 'transparent',
      hover: '#EAEBFA',
    },
    borderRadius: `8px`,
  },
  card: {
    primary: {
      headingSize: typography.sizes.heading.h5,
      textSize: typography.sizes.text.body,
      boxShadowStyle: `0 1px 0 0 ${colors.greyLight}`,
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
    },
    secondary: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: `0 1px 0 0 ${colors.greyLight}`,
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
    },
    brand: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.brand}`,
      backgroundStyle: `${colors.brandLight};`,
    },
    action: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.greyLighter}`,
      backgroundStyle: `${colors.white};`,
    },
    info: {
      headingSize: typography.sizes.heading.h6,
      textSize: typography.sizes.text.small,
      boxShadowStyle: 'none',
      borderStyle: `1px solid ${colors.greyLightest}`,
      backgroundStyle: `${colors.greyLightest}`,
    },
  },
  errorMessage: {
    textColor: `${colors.alertDark}`,
    backgroundColor: `${colors.alertLight}`,
    padding: '8px 16px',
    icon: true,
  },
  footer: {
    bgColor: colors.white,
    showFooterLinks: true,
    showLogoBlock: true,
    showSocialBlock: true,
    showLegalBlock: true,
    isLegalBlockFullWidth: false,
  },
  input: {
    color: colors.greyDark,
    placeholderColor: colors.greyLight,
    borderRadius: `8px`,
    boxShadow: `0 0 4px 0 transparent`,
    hover: {
      border: colors.brand,
      error: colors.brand,
      boxShadow: `0 0 4px 0 ${colors.brand}`,
    },
    focus: {
      border: colors.brand,
      error: colors.brand,
      boxShadow: `0 0 4px 0 ${colors.brand}`,
    },
    disabled: {
      color: colors.grey,
      backgroundColor: colors.greyLightest,
    },
    borderColorByStatus: {
      error: colors.alert,
      valid: colors.success,
      disabled: colors.greyLight,
      default: colors.grey,
    },
    iconColor: colors.grey,
    iconBackgroundColor: colors.greyLighter,
    searchInput: {
      boxShadow: `0 0 4px 0 ${colors.brand}`,
      borderRadius: `8px 8px 0 0`,
      borderColor: colors.brand,
      customIcon: false,
      options: {
        borderRadius: `0 0 8px 8px`,
        hover: {
          color: colors.white,
          backgroundColor: colors.brand,
        },
      },
    },
    checkBox: {
      defaultColor: colors.brand,
      borderRadius: '4px',
      label: {
        borderRadius: '8px',
        backgroundColor: colors.brandLight,
      },
      customIcon: false,
    },
  },
  link: {
    color: 'auto',
    weight: typography.weights.semiBold,
    hover: {
      color: 'auto',
    },
    active: {
      color: 'auto',
    },
    disableTargetIcon: false,
  },
  navbar: {
    iconContainer: {
      display: 'flex',
    },
    logo: {
      render: true,
    },
    mobile: {
      minHeight: 'auto',
      bgColor: colors.brand,
    },
  },
  progressBar: {
    color: colors.brand,
  },
  scrollableArea: {
    scrollBarThumb: {
      borderRadius: '4px',
      border: `2px solid ${colors.brand}`,
      bgColor: `${colors.brand}`,
    },
    scrollBarTrack: {
      background: `${colors.greyLighter}`,
      borderRadius: '4px',
    },
  },
  typography: {
    primary: `"Open Sans", Roboto, Helvetica, Arial, sans-serif`,
    text: {
      color: colors.greyDarkest,
      sizes: {
        lead: '18px',
        body: '16px',
        small: '14px',
      },
    },
    heading: {
      sizes: {
        display: '68px',
        h1: '46px',
        h2: '38px',
        h3: '28px',
        h4: '24px',
        h5: '18px',
        h6: '16px',
      },
    },
    lineHeight: {
      display: '76px',
      h1: '54px',
      h2: '46px',
      h3: '36px',
      h4: '32px',
      h5: '26px',
      h6: '24px',
      lead: '26px',
      body: '24px',
      small: '20px',
    },
    letterSpacingMap: {
      display: '-2.86px',
      h1: '-1.25px',
      h2: '-0.85px',
      h3: '-0.45px',
      h4: '-0.25px',
      h5: '-0.02px',
      h6: '-0.01px',
    },
    weights: {
      regular: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
};

const ThemeContext = React.createContext<AppTheme>(zopaTheme);
ThemeContext.displayName = 'ThemeContext';

export const useThemeContext = () => React.useContext(ThemeContext);

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Partial<AppTheme> | undefined;
}) => {
  const mergedTheme = { ...zopaTheme, ...(theme || {}) };
  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};