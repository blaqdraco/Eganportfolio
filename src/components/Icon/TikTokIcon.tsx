import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const TikTokIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path d="M64 12.8v34.133c0 0 8.533 0 14.934 2.133v30.934c-9.067-2.134-16.427-7.467-21.866-14.933C53.6 59.467 48 47.733 48 34.133V12.8h16z" fill="currentColor" />
    <path d="M64 12.8c-27.733 0-50.133 22.4-50.133 50.133S36.267 113.066 64 113.066 114.133 90.666 114.133 62.933V56.533h-9.6v6.4c0 21.333-17.6 38.667-40.533 38.667S37.867 84.266 37.867 62.933 55.467 24.266 78.4 24.266V12.8H64z" fill="currentColor" opacity="0.9" />
  </Icon>
));

export default TikTokIcon;
