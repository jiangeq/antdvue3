import {
  Modal,
  Table,
  Menu,
  Input,
  Form,
  Card,
  Checkbox,
  Radio,
  Col,
  Row,
  Select,
  DatePicker,
} from 'ant-design-vue';
import type { App } from 'vue';
import useModal from '@/hooks/useModal';
import permission from '@/core/permission/';
import 'dayjs/locale/zh-cn';
import { AButton } from '@/components/basic/button';

import 'windi.css';
import '@/styles/index.less';
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/antd.variable.min.css';

export function setupAntd(app: App<Element>) {
  app.component('AButton', AButton);

  app
    .use(Form)
    .use(Input)
    .use(Modal)
    .use(Table)
    .use(Menu)
    .use(Card)
    .use(Checkbox)
    .use(Radio)
    .use(Col)
    .use(Row)
    .use(Select)
    .use(DatePicker);
}

// 引入静态资源
export const setupAssets = () => ({});

// 注册全局方法
export function setupGlobalMethods(app: App) {
  app.use(permission);
  app.use(useModal);
  // 全局挂载Reflect反射对象,以便在vue模板中使用
  app.config.globalProperties.Reflect = Reflect;
}
