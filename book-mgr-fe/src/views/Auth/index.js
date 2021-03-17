import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { handleResult } from '../../helpers/utils';
import { auth } from '../../service';

export default defineComponent({
  // 注册组件
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
  setup() {
    // 响应式数据
    // 注册表单数据
    const regForm = reactive({
      username: '',
      password: '',
      inviteCode: '',
    });

    // 登录表单数据
    const logForm = reactive({
      username: '',
      password: '',
    });

    // 方法
    // 注册逻辑
    const register = async () => {
      // 校验表单用户名和密码
      if (regForm.username === '') {
        return message.warning('请输入用户名');
      }
      if (regForm.password === '') {
        return message.warning('请输入密码');
      }
      const response = await auth.register(regForm.username, regForm.password, regForm.inviteCode);
      return handleResult(response).success((data) => {
        message.success(data.msg);
      });
    };

    // 登录逻辑
    const login = async () => {
      // 校验表单用户名和密码
      if (logForm.username === '') {
        return message.warning('请输入用户名');
      }
      if (logForm.password === '') {
        return message.warning('请输入密码');
      }
      const response = await auth.login(logForm.username, logForm.password);
      return handleResult(response).success((data) => {
        message.success(data.msg);
      });
    };

    return {
      // 注册数据和方法
      regForm,
      register,
      // 登录数据和方法
      logForm,
      login,
    };
  },
});
