import React from 'react'

interface props{
  users:any,
  lists:any
}
export const List:React.FC<props> = ({users,lists}) => {

  return <table>
         <thead>
         <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr> 
         </thead>
          
         <tbody>
         {
            lists.map((item:any)=>{
              return(
               <tr key={item.id}>
                  <td>{item.name}</td>
                  <td key={users.id}>{users.find(user=>user.id===item.id)?.name||'未知'}</td>
               </tr>
              )
            })
          } 
         </tbody>
          
  </table>
}
