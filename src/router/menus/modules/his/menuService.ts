import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 20,
  menu: {
    name: t('routes.locHis.service'),
    path: '/service',
    children: [
      {
        path: 's1',
        name: t('routes.locHis.service1_1'),
      },
    ],
  },
};

export default menu;
