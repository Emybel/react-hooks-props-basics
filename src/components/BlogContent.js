import React from "react";

function BlogContent(props) {
  console.log(props);
  if (!props.isPublished){
    // Hide unpublished content
    // Return null means : " don't desplay any DOM elements here"
    return null;
  } 
  else{
  // Show published content
    return (
      <div id="blog-content">
        <h1> {props.articleText} </h1>
        <p>{props.minutesToRead} minutes to read </p>
      </div>
    );
  }

}

export default BlogContent;
