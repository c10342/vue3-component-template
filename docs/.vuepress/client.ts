import { defineClientConfig } from '@vuepress/client'
import linViewUi from '../../packages/index'
import '../../packages/theme-chalk/index.scss'
import './styles/common.scss'

export default defineClientConfig({
  enhance({app}) {
    app.use(linViewUi)
  },
})