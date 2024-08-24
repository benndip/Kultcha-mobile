import { ReactNode } from 'react';

export type RootStackParamList = {
  BottomNavigation: undefined;
  Splash: undefined;
  Onboarding: undefined;
  AuthStack: undefined;
};

export interface LayoutProps {
  children: ReactNode | ReactNode[];
  rightIcon?: () => ReactNode;
  leftIcon?: () => ReactNode;
}
export interface TopNavActionsProps {
  rightIcon?: () => ReactNode;
  leftIcon?: () => ReactNode;
}
