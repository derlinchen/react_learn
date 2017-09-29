'use strict';
 import React from 'react';
 import Comment from './Comment';
 
 class CommentList extends React.Component{
 	render(){
 		let commentNodes = this.props.data.map(function(comment,key){
 			return (
 				<Comment key={key} author={ comment.author } date={ comment.date } >{ comment.text }</ Comment>
 			)
 		});
 		return(
			<div>
				{ commentNodes }
   			</div>
 		)
 	}
 }

export { CommentList as default };
