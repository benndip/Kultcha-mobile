import { AntDesign, EvilIcons, Feather, Ionicons } from '@expo/vector-icons';

export const HeartIcon = (props: any) => (
  <Ionicons name='heart' size={22} color='#fff' {...props} />
);
export const SettingsIcon = (props: any) => (
  <Feather name='settings' size={24} color='#fff' {...props} />
);
export const ChevronLeftIcon = (props: any) => (
  <Feather name='chevron-left' size={24} color='#fff' {...props} />
);
export const ChevronRightIcon = (props: any) => (
  <Feather name='chevron-right' size={24} color='#fff' {...props} />
);
export const MoreVerticalIcon = (props: any) => (
  <Feather name='more-vertical' size={24} color='#fff' {...props} />
);
export const SearchIcon = (props: any) => (
  <EvilIcons name='search' size={24} color='black' {...props} />
);
export const PlayIcon = (props: any) => (
  <Ionicons name='play' size={24} color='#fff' {...props} />
);
export const CloseFilledIcon = (props: any) => (
  <AntDesign name='closecircle' size={18} color='black' {...props} />
);
