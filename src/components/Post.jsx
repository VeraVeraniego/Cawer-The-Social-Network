import styled from "styled-components";
import palette from "../theme/global-styles";
const PostContainer = styled.section`
  display: grid;
  grid-template:
    "profile title"
    "profile desc";
`;
const PostImage = styled.img`
  grid-area: profile;
  width: 99px;
  height: 99px;
  border-radius: 49.5px;
  background-color: ${palette.gray};
`;
const PostTitle = styled.h3`
  grid-area: title;
  font-size: 24px;
`;
const PostDescription = styled.p`
  grid-area: desc;
`;
export function Post() {
  return (
    <PostContainer>
      <PostImage alt="Profile"></PostImage>
      <PostTitle>this is a post</PostTitle>
      <PostDescription>This is a paragraph</PostDescription>
    </PostContainer>
  );
}
