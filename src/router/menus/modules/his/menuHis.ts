import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 19,
  menu: {
    name: t('routes.locHis.register'),
    path: '/his',
    // tag: {
    //   dot: true,
    // },
    children: [
      {
        path: 'cp1',
        name: t('routes.locHis.action1'),
        tag: {
          content: 'new',
        },
      },
    ],
  },
};

export default menu;
