import { ReactNode } from 'react';

export type RootStackParamList = {
  BottomNavigation: undefined;
  Splash: undefined;
  Onboarding: undefined;
  AuthStack: undefined;
  Details: undefined;
  VideoDetails: undefined;
};

export interface LayoutProps {
  children: ReactNode | ReactNode[];
  rightIcon?: () => ReactNode;
  leftIcon?: () => ReactNode;
}
export interface TopNavActionsProps {
  rightIcon?: () => ReactNode;
  leftIcon?: () => ReactNode;
  onBack?: () => void
}

export interface ItemType {
  videoUrl?: string;
  audioUrl?: string;
  bgImage?: string;
  modelUrl?: string;
  title?: string;
  description?: string;
  id: number;
}
