import styled from "styled-components";
import { GlobalStyle } from "../theme/global-styles";
import palette from "../theme/global-styles";

const CommentContainer = styled.article`
  width: 1011px;
  height: 132px;
  border: 1px solid ${palette.gray};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  position: relative;
`;
const UserCommentImage = styled.img`
  position: absolute;
  left: 20px;
  width: 99px;
  height: 99px;
  border-radius: 49.5px;
  background-color: ${palette.gray};
`;
const NameAndBodyContainer = styled.div`
  margin-left: 134px;
`;
const Name = styled.h3``;
const Body = styled.p`
  font-size: 14px;
  line-height: 17px;
`;
const Email = styled.p`
  align-self: flex-start;
  font-size: 12px;
  line-height: 15px;
  margin: 20px;
`;
export function Comment() {
  return (
    <CommentContainer>
      <GlobalStyle />
      <UserCommentImage />
      <NameAndBodyContainer>
        <Name>Jose Arturo</Name>
        <Body>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quam
          obcaecati aperiam nulla odit doloremque debitis molestiae dolore
        </Body>
      </NameAndBodyContainer>
      <Email>jefwoief@ravn.co</Email>
    </CommentContainer>
  );
}
