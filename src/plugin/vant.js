// 按需全局引入 vant组件
import Vue from 'vue'
import {Locale,NavBar,Button, List, Cell, Tabbar, TabbarItem} from 'vant'

let components=[Locale,Button,List,Cell,Tabbar,TabbarItem,NavBar]

components.forEach(module=>Vue.use(module))


