import { GlobalStyle } from "../theme/global-styles";
import styled from "styled-components";
// import palette from "../theme/global-styles";
// import { Link } from "react-router-dom";
import { Post } from "../components/Post";
import { getAllPosts, getUserPosts } from "../utils/api";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { IPost } from "../interfaces/IPost";
import { IPhotos } from "../interfaces/IPhotos";
import { JSONPLACEHOLDERS_API } from "../utils/constants";

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

export function Home({ path }: { path: "home" | "feed" }) {
  const [user] = useState<IUser>(JSON.parse(localStorage.getItem("userAuth")!));
  const [posts, setPosts] = useState<IPost[]>();
  // const [photos, setPhotos] = useState<IPhotos[]>();

  const id = user.id;

  useEffect(() => {
    async function getData() {
      const postsData = await getUserPosts(id);
      const allPostsData = await getAllPosts();
      if (path === "home") {
        console.log("home");
        setPosts(await postsData.data);
      }
      if (path === "feed") {
        console.log("feed");

        setPosts(await allPostsData.data);
      }
      console.log(posts);
      // setPhotos(photosData.data);
    }
    getData();
  }, [path]);

  return (
    <PageContainer>
      <GlobalStyle />
      <PostsContainer>
        {posts?.map((ele) => {
          return (
            <Post
              key={ele.id}
              title={ele.title}
              body={ele.body}
              // img={JSONPLACEHOLDERS_API.PHOTOS}
              // since photos api won't work for me I'm using 14 images I downloaded from internet and loop them
              img={`./imgs/${ele.id > 14 ? ele.id % 14 : ele.id}.jpg`}
            />
          );
        })}
      </PostsContainer>
    </PageContainer>
  );
}
