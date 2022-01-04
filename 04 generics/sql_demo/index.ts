interface DBI<T> {
  add(data: T): boolean
  delete(id: number): boolean
  update(data: T, id: number): boolean
  get(id: number): boolean
}

class MysqlDB<T> implements DBI<T> {
  add(data: T): boolean {
    console.log('add', data)
    return true
  }
  delete(id: number): boolean {
    console.log('delete', id)
    return true
  }
  update(data: T, id: number): boolean {
    console.log('update', data, id)
    return true
  }
  get(id: number): boolean {
    console.log('get', id)
    return true
  }
}

class MongoDB<T> implements DBI<T> {
  add(data: T): boolean {
    console.log('add', data)
    return true
  }
  delete(id: number): boolean {
    console.log('delete', id)
    return true
  }
  update(data: T, id: number): boolean {
    console.log('update', data, id)
    return true
  }
  get(id: number): boolean {
    console.log('get', id)
    return true
  }
}

class User {
  name: string | undefined
  age: number | undefined
  constructor(n: string, age?: number) {
    this.name = n
    this.age = age
  }
}
const user = new User('joo', 1)

const mysqlDB = new MysqlDB<User>()
mysqlDB.add(user)
