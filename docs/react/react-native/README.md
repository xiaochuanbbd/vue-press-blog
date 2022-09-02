## 下载
https://www.react-native.cn/docs/environment-setup
运行项目报错
注意事项：
下载 react native 时候会有报错的情况需要注意必须使用代理安装 cocopcode,下载第三方包 比如 boost 会需要很久很久。。

## Expo Go

仅仅创建一个 js 项目的文件夹，使用 expo 自带的工具去操作
下载 expo cli 1.手机端下载 expogo 2. 使用 expo cli 创建项目
创建： expo init xxx
启动： expo ios 

### expo app.json配置
```js
{
  "expo": {
    "name": "tanhua",
    "slug": "tanhua",
    "version": "1.0.0",
    "orientation": "portrait", //屏幕旋转  values: default（默认）, portrait（纵向）, landscape（横向）
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```
### 发布到expo 随处可测试
1. 终端 expo publish 
2.  localhost: 19002链接中 点击发布 

##  react-native组件
视图：
### SafeAreaView
安全视图，不包括刘海的地区

## 标签
### View 
* 类似div
* 不支持设置字体大小哦 字体颜色
* 不能放文本内容 
* 不能绑定事件
### text
不能包裹jsx
*   numberOflines 设置文本行数，超出省略号
onPress  点击时间
### TouchableOpacity
* 支持 onPress
* 块级容器
### Image
```js
   <Image source={require('./assets/icon.png')}></Image>
   <Image source={ {uri:'https://picsum.photos/200/300'}}></Image>
```
引入图片：
* 本地： source={require('../../../xxx)}
* 外链： source={ { uri:'https://picsum.photos/200/300'}} **必须加宽高 style={width:100,height:100}**
   source:
   * require('./assets/icon.png')引入本地图片
   * uri: 图片的路径
   * width,height
   * loadingIndicatorSource 懒加载图片

### ImageBackground 
* div+ 背景图片
* 需要手动➕宽高
* 里面可以自己加内容

### TextInput
* onChange
### 可触摸组件
```js
     <TouchableWithoutFeedback>
      <Image  fadeDuration={1000} source={{
        width:200,
        height:300,
        uri:'https://picsum.photos/200/300'}}></Image>
      </TouchableWithoutFeedback>
```
* TouchableWithoutFeedback
* TouchableHighlight
* TouchableOpacity

### button
```js
      <Button  title='click me ' onPress={()=>{alert('button tapped')}}/> 
```

### alert
```js
 onPress={()=>{alert('button tapped')  

```
#### Alert 方法
参数： 标题，信息， 按钮文案
#### Alert.alert
```js
Alert.alert('my Title','my message',[
        {text:'yes',onPress:()=>{console.log('yes')}},
         {text:'no',onPress:()=>{console.log('no')}}
      ])}
```
#### Alert.prompt（只针对iOS）
```js
      <Button  title='click me ' onPress={()=>{Alert.alert('my Title','my message',text=>{console.log(text)})}}/> 
```
### style css
css读取顺序

### Platform

##  语法
* 插值表达式
直接添加js代码
    <Text>{obj.a}</Text>
* 数组使用map

## 组件
* 函数组件
  简单组件可以使用
  hooks可以使用生命周期
* class组件
 有生命周期
 有自己的状态（state）
 
## 插槽 
```js
父组件：
const Index = ()=><SafeAreaView>
  <Child color="red">
  {/* 向子组件插入内容 */}
  <Text>12331</Text>
  </Child>
</SafeAreaView>
子组件
const  Child = (props)=><View>
    <Text style={{color:props.color}}>子组件
    {/* 子组件接收 */}
    {props.children}</Text>
    </View>
```
父组件：插入html标签
子组件：{props.children}

## 屏幕尺寸
获取设备尺寸api:Dimensions.get('screen')，旋转后无法获得
useDeviceOrientation 获取目前是否旋转屏幕
返回：
Object {
  "fontScale": 1,
  "height": 844,
  "scale": 3,
  "width": 390,
}
横向和纵向的宽度
库：yarn add @react-native-community/hooks
https://www.npmjs.com/package/@react-native-community/hooks

## flex box
父元素：
alignContent:'center"  多行主轴对齐方式
alignItems："center" 单行主轴对齐方式
justifyContent:'center' 单行测轴对其方式
子元素
flexGrow:
flex： 1 占剩余空间的距离 
flexBasis: basis width和height
flexShrink:1 可以收缩 0 不可以

## 定位
position:"relative"
position:"absulute"

## 创建组件
* rsf 创建组件代码片段
* rnss 创建stylesheet代码

## 生命周期
* constructor  组件初始化
* render 组件渲染更新
* componentDidMount 组件挂载完毕
* componentWillUnmount 组件被销毁

## mobx
跨组件的全局数据管理库
下载 "mobx": "^6.6.1","mobx-react": "^7.5.2",
1. 新建 一个mobx 文件夹 和index.js文件

```js
import {observable} from 'mobx'
 class RootStore{
  @observable//装饰器语法ES7 
  name='悟空';
 }
  export default new RootStore()
```
2. 在使用改组件的地方
```js
 
import React, { Component } from 'react'
import RootStore from './mobx/index'//引入全局数据
import {Provider} from 'mobx-react' //引入provider
import Btn from './components/Btn'
export default class Index extends Component {
   
  render() {
    return (
      <SafeAreaView>
       <Provider RootStore={RootStore}>  //注入全局数据
        <Btn></Btn>
       </Provider>
      </SafeAreaView>
    )
  }
}


```
3. 在使用数据的地方
```js
import React, { Component } from 'react'
import { Text,View } from 'react-native'
import {inject} from 'mobx-react'
@inject('RootStore')//引入数据
class Btn extends Component {
  render() {
  console.log(this);//this里面就有数据
    return (
      <View><Text>BtnBtnBtnBtnBtnBtnBtnBtn</Text></View>
    )
  }
}
export default Btn
```

#### 修改全局数据
action 使用mobx
```js
import {observable,action, makeAutoObservable} from 'mobx'
 class RootStore{
  constructor (){
    makeAutoObservable(this) //ps:新版需要如此使用
  }
  @observable
  name='悟空';

  @action.bound //修改组件的行为
  changeName = (name)=>{ 
    this.name = name
  }
 }
  export default new RootStore()
  ```

## react-navigation
### 安装：
1.yarn add @react-navigation/native
2.在expo中管理项目 expo install react-native-screens react-native-safe-area-context
3. yarn add @react-navigation/native-stack
App.js
```js
// In App.js in a new project

import * as React from 'react';
import {Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='go to details' onPress={
      ()=>navigation.navigate('Details')
      }></Button>
    </View>
  );
}
function DetailsScreen(){
  return(
    <View>
      <Text>details</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator(); //创建一个页面栈

function App() {
  return (
    <NavigationContainer> 
    //screenOptions 隐藏导航栏标题
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

### 组件中跳转到新的页面
```js   this.props.navigation.navigate('UserInfo')```

## 轻提示
https://www.npmjs.com/package/react-native-easy-toast

## svg
yarn  add  react-native-svg-uri react-native-svg 
* 需要安装两个安装包
使用：
```js
import SvgUri from 'react-native-svg-uri'
<SvgUri source={require('./img/male.svg')} width='30' height='30'/>

```

## dp 转 px 
```js
import {Dimensions} from 'react-native'
//转换单位
// 设计稿宽度/元素的宽度 = 手机屏幕/手机中元素的宽度
//手机中元素的宽度 = 手机屏幕 * 元素的宽度 / 设计稿的宽度
export const screenWidth = Dimensions.get('window').width //手机屏幕宽度
export const screenHeight = Dimensions.get('window').height

export const pxToDp = (elePx)=> screenWidth * elePx / 375
```
 
## ui框架 React Native Elements
官网地址：https://reactnativeelements.com/docs/installation
下载：
1.下载ui库 yarn add @rneui/themed @rneui/base
2.下载链接icon yarn add react-native-vector-icons




## react-netive-swiper
```js
   <Swiper
              
                       style={bannerStyles.swiper} 
                        height={220}
                        horizontal={true}
                        autoplay={true} //自主动播放
                        loop={true}//循环
                            showsButtons={false}           //为false时不显示控制按钮
                        autoplayTimeout={4}                //每隔4秒切换
                      horizontal={true}              //水平方向，为false
                        showsPagination={true}//展示分页 
                        paginationStyle={{bottom: pxToDp(10)}} //分页器样式
                        dotStyle={{backgroundColor:'#fff',width:pxToDp(6),height:pxToDp(6)}} //普通小圆点
                        activeDotStyle={{backgroundColor:'#ef8b4a',width:pxToDp(16),height:pxToDp(6)}}//active小圆点
                        showsButtons={false}
                      >
                  <Image source={require('./img/jiashi.png')}></Image>
                  <Image source={require('./img/jiguang.png')}></Image>
                  <Image source={require('./img/jiashi.png')}></Image>
                  <Image source={require('./img/tiaowu.png')}></Image>
              </Swiper>
```


## react.usestate
异步更新，不会立即更新状态
从useState获得的setResponse函数是异步的。 
解决方案：
```js
useEffect(() => {
  // This code will only be executed when selectedResponse's value changes
}, [selectedResponse])
```

## panResponder
父子之间手势冲突会被父组件接管
一个 RN 应用中只能存在一个 responder！
一次正常的手势操作的流程如下所示：

是否响应 Touch 或者 move 手势->grant(被激活) ->move->release (结束事件)
onStartShouldSetResponder(event) => true:在用户开始进行触摸操作时(手指刚刚接触屏幕的瞬间),询问是否申请成为触摸事件的响应者，返回 true 为需要成为响应者。

onMoveShouldSetResponder(event) => true:如果绑定的View不是响应者，那么会在用户的触摸点开始移动的时候再次询问是否申请成为触摸时间的响应者，返回true

onResponderGrant:(event) => {}:View 申请成功，并成为了响应者。一般情况下，这时开始，组件进入了激活状态，并进行一些事件处理或者手势识别的初始化。

onResponderReject: (event) =>{}:View 申请失败了，这就意味着有其他的组件正在成为或者已经成为了响应者，并且他不愿意交出这个权利。所以你被拒绝了~

onResponderMove: (event) => 表示触摸手指的移动事件，这个回调在一次完成的手势动作中可能会非常频繁的调用，所以这个回调函数里面的内容需要尽量简单

onResponderRelease: (event) => 表示触摸完成，相当于前面讲的 Touch 里面的 onPressOut 方法，表示用户已经完成了本次的触摸操作，同时会释放响应者这个权利。

onResponderTerminationRequest: (event) => true:如果我们返回的是 true，那就代表当前响应者同意放权，让其他的组件来当响应者，自己回归平淡的生活，同时也会回调一个函数，通知组件事件响应处理被终止了:

onResponderTerminate: (event) => {}:这个回调也会发生在系统直接终止组件的触摸事件处理中，比如用户在进行触摸操作的时候，来电话了，或者意外闪退了。

onStartShouldSetResponderCapture: () => true :在触摸事件开始的时候，RN 容器的组件就会收到这么一个回调函数，询问是否捕获事件成为响应者，如果返回true，表示确认捕获事件

onMoveShouldSetResponderCapture: () =>true :在触摸事件开始移动的时候，再次询问是否捕获事件成为响应者，如果返回 true，表示确认捕获事件
