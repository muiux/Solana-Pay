import Icon from '../../Icon';

import {
  NotificationWrapper,
  NotificationInner
} from './styles';

interface IProps {
  success: boolean;
  error: boolean;
  title: string;
  subtitle: string;
  onClose?: () => void;
  linkText?: string;
  linkUrl?: string;
  icon?: string;
}

const NotificationBanner = ({ success, error, title, subtitle, onClose, linkText = '', linkUrl = '', icon }: IProps) => {
  return (
    <NotificationWrapper>
      <NotificationInner className={`
        ${success ? 'success' : ''} ${error ? 'error' : ''}
      `}>
        {icon ? <Icon name={icon} /> : null}
        {title && title !== '' &&
          <h3>{title}</h3>
        }
        {subtitle && subtitle !== '' &&
          <p>{subtitle}</p>
        }
        {linkText && linkText !== '' && linkUrl && linkUrl !== '' &&
          <a href={linkUrl}>
            {linkText}
            <Icon name='CaretRightIcon' />
          </a>
        }
        <button type='button' onClick={onClose}>
          <Icon name='ModalClose' />
        </button>
      </NotificationInner>
    </NotificationWrapper>
  );
};

export default NotificationBanner;
