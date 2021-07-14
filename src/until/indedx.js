//判断值为0的时候不是false状态
export const isFaily = (value) => (value === 0 ? false : !value)
//定义一个清除第一次传参没有值的方法
export const clearObject = (object) => {
  //定义一个result来存储复制的objiect数组
  const result = { ...object }
  //遍历对象
  Object.keys(result).forEach((key) => {
    console.log(key, 'key')
    const value = result[key]
    if (isFaily(value)) {
      //不为0则删除
      delete result[key]
    }
  })
  return result
}
