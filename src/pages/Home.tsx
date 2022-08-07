import { GlobalStyle } from "../theme/global-styles";
import styled from "styled-components";
import { Post } from "../components/Post";
import { getAllPosts, getUserPosts } from "../utils/api";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { IPost } from "../interfaces/IPost";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
`;
const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin: 97px 193px 97px 596px;
`;
const PostLink = styled(Link)`
  text-decoration: none;
`;
export function Home({ path }: { path: "home" | "feed" }) {
  const [user] = useState<IUser>(JSON.parse(localStorage.getItem("userAuth")!));
  const [posts, setPosts] = useState<IPost[]>();
  // const [photos, setPhotos] = useState<IPhotos[]>();

  useEffect(() => {
    async function getData() {
      const id = user.id;
      const postsData = await getUserPosts(id);
      const allPostsData = await getAllPosts();
      if (path === "home") {
        setPosts(postsData.data);
      }
      if (path === "feed") {
        setPosts(allPostsData.data);
      }
      // setPhotos(photosData.data);
    }
    getData();
  }, [user.id, path]);

  return (
    <PageContainer>
      <GlobalStyle />
      <PostsContainer>
        {posts?.map((ele) => {
          return (
            <PostLink key={ele.id} to={`/post/${ele.id}`}>
              <Post
                key={ele.id}
                title={ele.title}
                body={ele.body}
                // since photos api blocked me I'm using 14 images I downloaded from internet
                img={`./imgs/${ele.userId}.jpg`}
              />
            </PostLink>
          );
        })}
      </PostsContainer>
    </PageContainer>
  );
}
