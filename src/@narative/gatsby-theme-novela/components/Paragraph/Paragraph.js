import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Paragraph = styled.p`
  line-height: 1.85;
  font-size: 16px;
  color: ${(p) => p.theme.colors.articleText};
  font-family: ${(p) => p.theme.fonts.serif};
  transition: ${(p) => p.theme.colorModeTransition};
  margin: 0 auto 35px;
  width: 100%;
  max-width: 680px;
  b {
    font-weight: 800;
  }
  ${mediaqueries.desktop`
    max-width: 507px;
  `}
  ${mediaqueries.tablet`
    max-width: 486px;
    margin: 0 auto 25px;
  `};
  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

export default Paragraph;
