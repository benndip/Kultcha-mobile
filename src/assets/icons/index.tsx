import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

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
  <Feather name='chevron-right' size={22} color='#fff' {...props} />
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
export const MapMarker = (props: any) => (
  <MaterialCommunityIcons
    name='map-marker-outline'
    size={24}
    color='black'
    {...props}
  />
);
export const MoonOulineIcon = (props: any) => (
  <Ionicons name='moon-outline' size={20} color='#fff' {...props} />
);
export const BellIcon = (props: any) => (
  <Feather name='bell' size={20} color='#fff' {...props} />
);
export const LanguageIcon = (props: any) => (
  <Entypo name='language' size={20} color='#fff' {...props} />
);
export const ShieldIcon = (props: any) => (
  <MaterialIcons name='security' size={20} color='#fff' {...props} />
);
export const PersonIcon = (props: any) => (
  <Ionicons name='person-outline' size={20} color='#fff' {...props} />
);
export const HelpIcon = (props: any) => (
  <Ionicons name='help-outline' size={20} color='#fff' {...props} />
);
export const AboutUsIcon = (props: any) => (
<MaterialIcons name="groups" size={20} color="#fff" {...props} />);
