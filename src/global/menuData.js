import HelloWorld from '@/components/HelloWorld'
import Child from '@/components/Child'

export default [
  {
    name: 'index',
    menuName: '首页',
    link: '',
    children: [
      {
        name: 'child1',
        menuName: '一级子菜单',
        link: '',
        children: [
          {
            name: 'subChild1',
            menuName: '二级子菜单',
            link: ''
          }
        ]
      }
    ]
  }
]