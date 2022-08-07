import React from "react";
import styled from "styled-components";
import palette from "../theme/global-styles";
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
  return (
    <FullPostAndAuthorInfoContainer>
      <FullPost>
        <PostTitle>Post Title</PostTitle>
        <PostImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLXztnfey5NwGn1x1EA1NSlJZ9YS62nGhR4-4ST1Dws3JUvEUWh2dn-pE0qd6LgF7DVs&usqp=CAU"
          alt="standby"
        ></PostImage>
        <PostDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id delectus
          optio, accusamus magni mollitia recusandae facilis quos quas
          laudantium? Deserunt nulla nemo recusandae asperiores? Earum
          consequatur rerum doloribus ipsam error.
        </PostDescription>
      </FullPost>
      <AuthorInfo>
        <AuthorImage />
        <AuthorName>James Webb</AuthorName>
        <AuthorUsername>@WebbJaT</AuthorUsername>
        <AuthorPhone>952543435</AuthorPhone>
        <AuthorEmail>jameswebb@ravn.co</AuthorEmail>
        <AuthorAddress>P Sherman 42 Wallabe Sydney</AuthorAddress>
      </AuthorInfo>
    </FullPostAndAuthorInfoContainer>
  );
}
