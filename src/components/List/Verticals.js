import React from 'react'

const MakeList = (props) => {
  return (
      <ul>
      {props.data.map((listItem)=>{
        return (
            <li title={`${listItem.Name}`} key={listItem.Id}>{listItem.Name}</li>
        )
        })}
      </ul>
  )  
}

export default class VerticalsList extends React.Component
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
