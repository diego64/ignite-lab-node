import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'Suporte Técnico',
    content: new Content('Nova solicitação de chamado técnico!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
