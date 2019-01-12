import React from 'react'

const MakeList = (props) => {
  return (
      <ul>
      {props.data.map((listItem)=>{
        return (
            <li title={`State: ${listItem.State}`}  key={listItem.Id}>{listItem.Name}</li>
        )
        })}
      </ul>
  )  
}

export default class CategoriesList extends React.Component
{
    
   constructor(props)
   {
      super(props)
   }
   
   render()
   {
          return(
              <MakeList data={this.props.listData} />
              )
   }

}
