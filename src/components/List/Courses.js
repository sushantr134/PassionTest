import React from 'react'

const MakeList = (props) => {
  return (
      <ul>
      {props.data.map((listItem)=>{
        return (
            <li title={`Author: ${listItem.Author}`} key={listItem.Id}>{listItem.Name}</li>
        )
        })}
      </ul>
  )  
}

export default class CoursesList extends React.Component
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
