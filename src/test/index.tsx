import { useEffect, useState } from 'react'
// import {List} from './list'
// import {Search} from './search'

const api =process.env.REACT_APP_API_URL;
console.log(process.env,'api1')
export const FromTable = () => {
  const [param, setParam] = useState({
    name: '',
    personid: '',
  })
  const [users,setUser] =useState([])
  const [list,setList] =useState([])
  //传递加参数
  useEffect(()=>{
    // 由于param默认为空,这里传参不确定是选择查询为空的数据还是查询所有数据
    // 所以要定义一个工具函数来解决
    fetch(`${api}/list?name=${param.name?param.name:1}&personid=${param.personid?param.personid:1}`).then(async response=>{

      if(response.ok){
         setList(await response.json())
      }
     
    })
  },[param])
  useEffect(()=>{
    fetch(`${api}/users`).then(async response=>{
      if(response.ok){
         setUser(await response.json())
      }
     
    })
  },[])
  return (
    <div>
      {/* <List lists={list} users={users}/>
      <Search  param={param} setParam={setParam} users={users}/> */}
      主页
    </div>
  )
}
