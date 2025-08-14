# vue 内置组件

## slot实现原理

### slot是什么

插槽，是vue中一个非常重要的概念，它允许父组件向子组件中指定位置插入html代码，vue中的组件的插槽分为默认插槽，具名插槽，作用域插槽。

### slot的原理

vue中组件的插槽是通过编译阶段实现的，编译阶段会将template中的代码转换成render函数，在render函数中会根据插槽的位置插入相应的html代码。

### slot的用法

1. 默认插槽

```html
<!-- 父组件 -->
<template>
  <div>
    <child>
      <div>我是默认插槽</div>
    </child>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

2. 具名插槽

```html
<!-- 父组件 -->
<template>
  <div>
    <child>
      <template v-slot:header>
        <div>我是具名插槽</div>
      </template>
    </child>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <slot name="header"></slot>
  </div>
</template>
```

3. 作用域插槽

```html
<!-- 父组件 -->
<template>
  <div>
    <child>
      <template v-slot:default="slotProps">
        <div>{{ slotProps.text }}</div>
      </template>
    </child>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <slot :text="text"></slot>
  </div>
</template>
```

### slot的注意事项

1. slot只能在组件的template中使用，不能在组件的render函数中使用。
2. slot的name属性可以不写，默认为default。
3. slot的name属性可以重复，但是不能在同一个组件中使用相同的name属性。

## component 内置组件

vue中的组件是通过vue.component方法注册的，注册的组件可以在template中使用。

### component的用法

```html
<!-- 父组件 -->
<template>
  <div>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

export default {
  data() {
    return {
      currentComponent: 'Child1'
    }
  },
  components: {
    Child1,
    Child2
  }
}
</script>
```

### component的注意事项

1. component的is属性可以动态绑定，可以根据不同的条件渲染不同的组件。
2. is属性的值可以是组件的名称，也可以是组件的实例。组件的实例可以通过vue.component方法注册。
3. is可以传递jsx函数，jsx返回的是真实dom，vue会将其渲染成组件。
4. is可以传递字符串,vue会将其渲染成组件。

### component的原理

vue在渲染组件时，会根据is属性的值来决定渲染哪个组件。如果is属性的值是一个组件的名称，vue会去components选项中查找对应的组件，如果找不到，会报错。如果is属性的值是一个组件的实例，vue会直接渲染该组件。

### component的优缺点

优点：可以动态渲染组件，可以根据不同的条件渲染不同的组件。

缺点：需要提前注册组件，如果组件没有注册，会报错。

## keep-alive 内置组件

vue中的keep-alive组件可以缓存组件的状态，当组件切换时，不会销毁组件，而是将组件缓存起来，当再次切换回该组件时，可以直接从缓存中获取组件的状态，而不需要重新渲染组件。

### keep-alive的用法

```html
<!-- 父组件 -->
<template>
  <div>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Child1 from './Child1.vue'

export default {
  data() {
    return {
      currentComponent: 'Child1'
    }
  },
  components: {
    Child1
  }
}
</script>
```

### keep-alive的注意事项

1. keep-alive只能包裹组件，不能包裹普通元素。
2. keep-alive的include和exclude属性可以指定哪些组件需要缓存，哪些组件不需要缓存。
3. keep-alive的include和exclude属性可以传递字符串，也可以传递正则表达式，也可以传递数组。
4. keep-alive的include和exclude属性可以传递组件的名称，也可以传递组件的实例。

### keep-alive的原理

vue在渲染组件时，会先判断该组件是否需要缓存，如果需要缓存，会将组件的状态保存起来，当再次切换回该组件时，会直接从缓存中获取组件的状态，而不需要重新渲染组件。如果不需要缓存，会将组件销毁。

### keep-alive的优缺点

优点：可以缓存组件的状态，提高性能。

缺点：会增加内存占用，因为组件的状态会被保存起来。

---

## transition 内置组件

vue中的transition组件可以给元素或组件添加过渡效果，当元素或组件的显示状态发生变化时，会自动触发过渡效果。

### transition的用法

```html
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">Hello World</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
```

### transition的属性

- name：过渡效果的名称，默认为"v"。
- appear：是否在初次渲染时也触发过渡效果，默认为false。
- mode：过渡效果的模式，可选值为"in-out"和"out-in"，默认为"out-in"。
- enter-class：过渡进入时的类名，默认为"v-enter"。
- enter-active-class：过渡进入时的活动类名，默认为"v-enter-active"。
- enter-to-class：过渡进入完成时的类名，默认为"v-enter-to"。
- leave-class：过渡离开时的类名，默认为"v-leave"。

### transition的事件

- before-enter：过渡进入之前触发。
- enter：过渡进入时触发。
- after-enter：过渡进入之后触发。
- enter-cancelled：过渡进入被取消时触发。
- before-leave：过渡离开之前触发。
- leave：过渡离开时触发。
- after-leave：过渡离开之后触发。
- leave-cancelled：过渡离开被取消时触发。

### transition的钩子函数

- beforeEnter：过渡进入之前触发。
- enter：过渡进入时触发。
- afterEnter：过渡进入之后触发。
- enterCancelled：过渡进入被取消时触发。
- beforeLeave：过渡离开之前触发。
- leave：过渡离开时触发。
- afterLeave：过渡离开之后触发。
- leaveCancelled：过渡离开被取消时触发。

### transition的使用场景
（1）与 v-if 和 v-show 一起使用 <transition> 会自动触发过渡效果。
（2）与自定义组件一起使用 <transition> 会自动触发过渡效果。<component is="my-component"></component>
（3）与 v-for 一起使用 <transition-group> 会自动触发过渡效果。 列表渲染、条件渲染、动态组件渲染等场景。

### transition的注意事项
（1）transition 只能应用于单个元素或组件，不能应用于多个元素或组件。
（2）transition 的过渡效果只会在元素或组件的插入、更新和移除时触发。
（3）transition 的过渡效果可以通过 CSS 类名或 JavaScript 钩子函数来定义。
（4）transition 的过渡效果可以通过 duration 属性来控制过渡的时长。
（5）transition 的过渡效果可以通过 mode 属性来控制过渡的顺序。

## transition 底层原理
transition 底层原理是通过 CSS3 的 transition 属性来实现过渡效果的。当元素或组件的插入、更新和移除时，transition 会自动添加和移除相应的 CSS 类名，从而触发过渡效果。
Q：如何自动添加和移除相应的 CSS 类名？
A：vue源码中，当元素或组件的插入、更新和移除时，会自动添加和移除相应的 CSS 类名，从而触发过渡效果。

---

## teleport 组件

### teleport 的作用
teleport 是 Vue 3 中新增的一个内置组件，用于将子组件渲染到指定的 DOM 节点中。它可以将组件渲染到父组件之外的其他 DOM 节点中，从而实现一些特殊的效果，比如模态框、通知等。

### teleport 的使用场景
（1）模态框：将模态框渲染到 body 节点中，从而避免样式冲突。
（2）通知：将通知渲染到 body 节点中，从而避免样式冲突。
（3）广告：将广告渲染到 body 节点中，从而避免样式冲突。

### teleport 的使用方法
```html
<template>
  <teleport to="body">
    <div class="modal">
      <h2>Modal Title</h2>
      <p>Modal Content</p>
    </div>
  </teleport>
</template>
```
在上面的代码中，我们使用了 teleport 组件，并将模态框渲染到 body 节点中。

### teleport 的注意事项
（1）teleport 只能应用于单个元素或组件，不能应用于多个元素或组件。
（2）teleport 的 to 属性指定了要将子组件渲染到的 DOM 节点。
（3）teleport 的子组件可以访问父组件的数据和方法，但无法访问父组件的 DOM 元素。

## teleport 底层原理
teleport 底层原理是通过 JavaScript 的 DOM 操作来实现将子组件渲染到指定的 DOM 节点中。当 teleport 组件被渲染时，vue 会自动将子组件的 DOM 元素插入到指定的 DOM 节点中，从而实现将子组件渲染到父组件之外的效果。

## teleport 底层原理源码
```javascript
function Teleport(props) {
  const { to } = props;
  const teleportRef = ref(null);

  onMounted(() => {
    const target = document.querySelector(to);
    if (target) {
      target.appendChild(teleportRef.value);
    }
  });

  onUnmounted(() => {
    const target = document.querySelector(to);
    if (target) {
      target.removeChild(teleportRef.value);
    }
  });

  return h('div', { ref: teleportRef }, props.children);
}
```

## vue单文件组件到真实dom流程

1. 由@vue/compiler-sfc​ 解析单文件组件，将模板、脚本和样式分别解析成对应的 AST（抽象语法树）。

2. 将 AST 转换为 render 函数，render 函数是一个函数，用于生成虚拟 DOM。
```javascript
// 结构如下
const __sfc__ = {  };
import { renderSlot as _renderSlot, createCommentVNode as _createCommentVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { class: "fancy-btn" }
function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("button", _hoisted_1, [
    _renderSlot(_ctx.$slots, "default"),
    _createCommentVNode(" slot outlet ")
  ]))
}
__sfc__.render = render
__sfc__.__file = "src/FancyButton.vue"
export default __sfc__
```
3. 将 render 函数转换为虚拟 DOM，虚拟 DOM 是一个 JavaScript 对象，用于描述真实 DOM 的结构。