import { Link, LinkProps } from 'react-router-dom';
import { classNames }  from '../../../lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { FC } from 'react';


export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props 
  return (
    <Link to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}>
      {children}
    </Link>
  );
}