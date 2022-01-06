//04 接口的继承
interface ISwin {
  swimming: () => void
}
interface IRun {
  running: () => void
}
interface IAction extends ISwin, IRun {}

const action: IAction = {
  swimming: () => {},
  running: () => {}
}

//05
type MyType = IRun & ISwin
type MyType2 = IRun | ISwin
const obj1: MyType = {
  running() {},
  swimming() {}
}
const obj2: MyType2 = {
  running() {}
}

export {}

//#TODO 07 interface和type的区别

//#TODO 08 字面量赋值
interface IPerson {
  name: string
  age: number
  height: number
}

//ERROR
// const person:IPerson = {
//   name: 'x',
//   age: 1,
//   height: 1,
//   address: 'xxx'
// }

const person = {
  name: 'x',
  age: 1,
  height: 1,
  address: 'xxx'
}
const p: IPerson = person

function print(obj: IPerson) {
  //   console.log(obj)
}
print(person)

//09 enum
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}
// {
//   '0': 'LEFT',
//   '1': 'RIGHT',
//   '2': 'TOP',
//   '3': 'BOTTOM',
//   LEFT: 0,
//   RIGHT: 1,
//   TOP: 2,
//   BOTTOM: 3
// }

function turnDirection(direction: Direction) {
  console.log(direction)
  switch (direction) {
    case Direction.LEFT:
      console.log('改变角色的方向向左')
      break
    case Direction.RIGHT:
      console.log('改变角色的方向向右')
      break
    case Direction.TOP:
      console.log('改变角色的方向向上')
      break
    case Direction.BOTTOM:
      console.log('改变角色的方向向下')
      break
    default:
      const foo: never = direction
      break
  }
}

turnDirection(0)
turnDirection(Direction.LEFT)

enum Direction2 {
  LEFT = 'l',
  RIGHT = 'r',
  TOP = 't',
  BOTTOM = 'b'
}
// { LEFT: 'l', RIGHT: 'r', TOP: 't', BOTTOM: 'b' }

function turnDirection2(direction: Direction2) {
  console.log(direction)
  switch (direction) {
    case Direction2.LEFT:
      console.log('改变角色的方向向左')
      break
    case Direction2.RIGHT:
      console.log('改变角色的方向向右')
      break
    case Direction2.TOP:
      console.log('改变角色的方向向上')
      break
    case Direction2.BOTTOM:
      console.log('改变角色的方向向下')
      break
    default:
      const foo: never = direction
      break
  }
}

// turnDirection2('l') error
turnDirection2(Direction2.LEFT)
