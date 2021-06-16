// import add from './add'
import debounce from './debounce'

// console.log(add(1, 2))

// 翻译 debounce 函数注释说明
function test() {
  console.log('debounce')
}

const fn = debounce(test, 1000)
fn()
