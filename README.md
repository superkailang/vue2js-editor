# 改进版本 vuejs-editor


npm package:

https://www.npmjs.com/package/vue2js-editor/access


源码参考:
> Vue-editor component based on wangeditor2.5.11 wrapper
> wangEditor docs：https://www.kancloud.cn/wangfupeng/wangeditor2/113961
> https://github.com/yimogit/yimo-vue-editor#readme

## Used in vue projects

`npm i vue2js-editor --save`

```
<template>
  <vuejs-editor v-model="text></vuejs-editor>
</template>

import vuejsEditor from 'vuejs-editor'
export default {
  components: {
    vuejsEditor
  }
  data: {
    editConfig:
  }
}
```
