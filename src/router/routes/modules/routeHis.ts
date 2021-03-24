import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
//門急診掛號
const his: AppRouteModule = {
  path: '/his',
  name: 'DtcHis',
  component: LAYOUT,
  redirect: '/his/cp1',
  meta: {
    icon: 'ion:git-compare-outline',
    title: t('routes.locHis.register'),
  },
  children: [
    {
      path: 'cp1',
      name: 'RegDemo',
      component: () => import('/@/views/his/ViewHis.vue'),
      meta: {
        title: t('routes.locHis.action1'),
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default his;
