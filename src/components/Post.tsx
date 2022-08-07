import styled from "styled-components";
import { IPost } from "../interfaces/IPost";
import { IPostComponent } from "../interfaces/IPost";
import palette from "../theme/global-styles";
const PostContainer = styled.section`
  width: 1000px;
  display: grid;
  border: solid 1px #e1e1e1;
  grid-template:
    "profile title"
    "profile desc";
  /* align-items: center; */
  justify-content: left;
  gap: 18px;
`;
const PostImage = styled.img`
  grid-area: profile;
  width: 99px;
  height: 99px;
  border-radius: 49.5px;
  background-color: ${palette.gray};
  margin: 30px;
`;
const PostTitle = styled.h3`
  grid-area: title;
  font-size: 24px;
  color: ${palette.green};
  align-self: flex-end;
`;
const PostDescription = styled.p`
  align-self: flex-start;
  grid-area: desc;
  color: ${palette.green};
`;
export function Post({ title, body, img }: IPostComponent) {
  return (
    <PostContainer>
      <PostImage alt="Profile" src={img}></PostImage>
      <PostTitle>{title}</PostTitle>
      <PostDescription>{body}</PostDescription>
    </PostContainer>
  );
}
