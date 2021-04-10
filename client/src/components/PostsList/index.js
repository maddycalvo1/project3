import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function PostsList() {
  const [state, dispatch] = useStoreContext();


  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {state.posts.length ? (
        <List>
         
        </List>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
      <div className="mt-5">
      </div>
    </div>
  );
}

export default PostsList;
