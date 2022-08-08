import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IPost, IPostComponent } from "../interfaces/IPost";
import { IUser } from "../interfaces/IUser";
import palette from "../theme/global-styles";
import { getPostById, getUserById } from "../utils/api";
import { PHOTOS_API } from "../utils/constants";
const FullPostAndAuthorInfoContainer = styled.section`
  display: flex;
  gap: 21px;
  margin-bottom: 22px;
`;
const FullPost = styled.section`
  width: 758px;
  height: 391px;
  border: solid 1px ${palette.gray};
  background-color: ${palette.gray};
  position: relative;
`;
const PostTitle = styled.h2`
  grid-area: title;
  font-size: 24px;
  color: ${palette.green};
  align-self: flex-end;
  position: absolute;
  top: -35px;
`;
const PostDescription = styled.p``;
const PostImage = styled.img`
  width: 756px;
  height: 222px;
`;
const AuthorImage = styled.img`
  width: 99px;
  height: 99px;
  border-radius: 49.5px;
  background-color: ${palette.gray};
  margin-top: 12px;
`;
const AuthorInfo = styled.section`
  font-size: 12px;
  line-height: 15px;
  width: 302px;
  height: 391px;
  border: solid 1px ${palette.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const AuthorName = styled.h3`
  font-size: 24px;
  line-height: 29px;
`;
const AuthorUsername = styled.h3``;
const AuthorPhone = styled.h4`
  align-self: flex-start;
  margin-left: 30px;
`;
const AuthorEmail = styled.h4`
  align-self: flex-start;
  margin-left: 30px;
`;
const AuthorAddress = styled.h4`
  align-self: flex-start;
  margin-left: 30px;
`;
export function PostHeaderAndAuthorInfo() {
  // const user: IUser = JSON.parse(localStorage.getItem("userAuth")!);

  useEffect(() => {
    async function fetchPostById() {
      const postClicked: number = JSON.parse(
        sessionStorage.getItem("postClicked")!
      );
      const dataResponse = await getPostById(postClicked);
      const postInfo = dataResponse.data[0];
      sessionStorage.setItem("postInfo", JSON.stringify(postInfo));
    }

    async function fetchPostAuthor() {
      const postInfo = JSON.parse(sessionStorage.getItem("postInfo")!);
      const authorDataResponse = await getUserById(postInfo.userId);
      const authorInfo = authorDataResponse.data[0];
      sessionStorage.setItem("authorInfo", JSON.stringify(authorInfo));
    }
    fetchPostAuthor();
    fetchPostById();
  }, []);

  const [post, setPost] = useState<IPost>(
    JSON.parse(sessionStorage.getItem("postInfo")!)
  );
  // sessionStorage.removeItem("postInfo");
  const [userData, setUserData] = useState<IUser>(
    JSON.parse(sessionStorage.getItem("authorInfo")!)
  );
  // sessionStorage.removeItem("authorInfo");
  // console.log(post);
  // console.log(userData);

  return (
    <FullPostAndAuthorInfoContainer>
      <FullPost>
        <PostTitle>{`${post?.title}`}</PostTitle>
        <PostImage
          src={PHOTOS_API.PHOTOS(post?.id!)}
          alt={post?.title}
        ></PostImage>
        <PostDescription>{post?.body}</PostDescription>
      </FullPost>
      <AuthorInfo>
        <AuthorImage src={PHOTOS_API.USER_PHOTOS(userData?.id!)} />
        <AuthorName>{userData?.name}</AuthorName>
        <AuthorUsername>@{userData?.username}</AuthorUsername>
        <AuthorPhone>{userData?.phone}</AuthorPhone>
        <AuthorEmail>{userData?.email}</AuthorEmail>
        <AuthorAddress>{`${userData?.address.street} ${userData?.address.suite} - ${userData?.address.city} ${userData?.address.zipcode}`}</AuthorAddress>
      </AuthorInfo>
    </FullPostAndAuthorInfoContainer>
  );
}
