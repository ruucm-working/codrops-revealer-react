import { injectGlobal } from 'styled-components'
import normailize from './normailize'
import selectStyle from './selectStyle'
import demo from './demo'
import component from './component'

injectGlobal`
  ${normailize};
  ${selectStyle};
  ${demo};
  ${component};
`
