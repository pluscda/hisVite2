import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
//門急診掛號
const his: AppRouteModule = {
  path: '/his',
  name: 'HisReg',
  component: LAYOUT,
  redirect: '/his/cp1',
  meta: {
    icon: 'ion:git-compare-outline',
    title: t('routes.his.register'),
  },
  children: [
    {
      path: 'cp1',
      name: 'RegDemo',
      component: () => import('/@/views/dashboard/welcome/index.vue'),
      meta: {
        title: t('routes.his.action1'),
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default his;
