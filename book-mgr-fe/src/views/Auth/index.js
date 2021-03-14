import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { auth } from '../../service/index';

export default defineComponent({
  // 注册组件
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
  setup() {
    // 响应式数据
    const regForm = reactive({
      username: '',
      password: '',
    });

    // 方法
    const register = () => {
      console.log(regForm);
      auth.register(regForm.username, regForm.password);
    };

    return {
      regForm,
      register,
    };
  },
});
