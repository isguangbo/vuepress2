// 方式1: 使用时间戳
function throttle1(fn, wait) {
  let time = 0
  return function () {
    let _this = this
    let args = arguments
    let now = Date.now()
    if (now - time > wait) {
      fn.apply(_this, args)
      time = now
    }
  }
}

// 方式2: 使用定时器
function thorttle2(fn, wait) {
  let timer
  return function () {
    let _this = this
    let args = arguments

    if (!timer) {
      timer = setTimeout(function () {
        timer = null
        fn.apply(_this, args)
      }, wait)
    }
  }
}

// 1.封装节流函数（使用定时器） 节流重在加锁 timer=timeout
function throttle(fn, time) {
  //3. 通过闭包保存一个 "节流阀" 默认为false
  let temp = false
  return function () {
    //8.触发事件被调用 判断"节流阀" 是否为true  如果为true就直接trurn出去不做任何操作
    if (temp) {
      return
    } else {
      //4. 如果节流阀为false  立即将节流阀设置为true
      temp = true //节流阀设置为true
      //5.  开启定时器
      setTimeout(() => {
        //6. 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments)
        //7. 最后在setTimeout执行完毕后再把标记'节流阀'为false(关键)  表示可以执行下一次循环了。当定时器没有执行的时候标记永远是true，在开头被return掉
        temp = false
      }, time)
    }
  }
}
function sayHi(e) {
  // 打印当前 document 的宽高
  console.log(e.target.innerWidth, e.target.innerHeight)
}
// 2.绑定事件，绑定时就调用节流函数
// 敲黑板！！！ 这里是重点 绑定是就要调用一下封装的节流函数 触发事件是触发封装函数内部的函数
window.addEventListener('resize', throttle(sayHi, 2000))
