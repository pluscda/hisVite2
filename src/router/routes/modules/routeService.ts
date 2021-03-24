import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
//門急診掛號
const service: AppRouteModule = {
  path: '/service',
  name: 'DtcService',
  component: LAYOUT,
  redirect: '/service/s1',
  meta: {
    icon: 'ion:git-compare-outline',
    title: t('routes.locHis.service'),
  },
  children: [
    {
      path: 's1',
      name: 'DtcService1',
      component: () => import('/@/views/service/ViewService1.vue'),
      meta: {
        title: t('routes.locHis.service1_1'),
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default service;
