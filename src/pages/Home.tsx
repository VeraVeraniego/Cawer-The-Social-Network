import { GlobalStyle } from "../theme/global-styles";
import styled from "styled-components";
import { Post } from "../components/Post";
import { getAllPosts, getUserPosts } from "../utils/api";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { IPost } from "../interfaces/IPost";
import { Link } from "react-router-dom";
import { PHOTOS_API } from "../utils/constants";

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

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const id = user.id;
      const postsData = await getUserPosts(id);
      const allPostsData = await getAllPosts();
      setIsLoading(false);
      if (path === "home") {
        setPosts(postsData.data);
      }
      if (path === "feed") {
        setPosts(allPostsData.data);
      }
    }
    getData();
  }, [user.id, path]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <PageContainer>
      <GlobalStyle />
      <PostsContainer>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          posts?.map((ele) => {
            return (
              <PostLink
                key={ele.id}
                to={`/post/${ele.id}`}
                onClick={() =>
                  sessionStorage.setItem("postClicked", JSON.stringify(ele.id))
                }
              >
                <Post
                  key={ele.id}
                  title={ele.title}
                  body={ele.body}
                  img={PHOTOS_API.USER_PHOTOS(ele.userId)}
                />
              </PostLink>
            );
          })
        )}
      </PostsContainer>
    </PageContainer>
  );
}
