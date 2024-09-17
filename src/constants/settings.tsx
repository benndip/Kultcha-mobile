import {
  AboutUsIcon,
  BellIcon,
  HelpIcon,
  LanguageIcon,
  MoonOulineIcon,
  PersonIcon,
  ShieldIcon,
} from '../assets/icons';
import { CustomNotificationSwitch, CustomSwitch } from '../components';

export const settings = [
  {
    id: 0,
    leftIcon: <MoonOulineIcon />,
    rightIcon: <CustomSwitch />,
    title: 'Light Mode',
  },
  {
    id: 1,
    leftIcon: <BellIcon />,
    rightIcon: <CustomNotificationSwitch />,
    title: 'Notification',
  },
  {
    id: 2,
    leftIcon: <LanguageIcon />,
    title: 'Language',
  },
  {
    id: 3,
    leftIcon: <ShieldIcon />,
    title: 'Security',
  },
  {
    id: 4,
    leftIcon: <PersonIcon />,
    title: 'Account',
  }
];
