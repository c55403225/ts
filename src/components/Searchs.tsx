import React from 'react'

interface props {
  users:any,
  param:any,
  setParam:Function,
}
export const Search:React.FC<props> = ({users,param,setParam}) => {
  // console.log(users,param)
  return <div>
    <input type="text" value={param.name}  onChange={event=>setParam({
      ...param,
      name:event.target.value
    })}/>
    <select value={param.personid}  onChange={event=>setParam({
      ...param,
      personid:event.target.value
    })}>
      <option value={''}>负责人</option>
      {
        users.map((user) =><option value={user.id}>{user.name}</option>)
      }
    </select>
  </div>
}