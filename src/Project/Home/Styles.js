import styled from 'styled-components';

import { sizes } from 'shared/utils/styles';

// const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 20;

const paddingLeft = 0

  // padding: 25px 32px 50px ${paddingLeft}px;
export const ProjectPage = styled.div`
  padding: '10% 20vw 20% 20vw'

  @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  }
  @media (max-width: 999px) {
    padding-left: ${paddingLeft - 20 - sizes.secondarySideBarWidth}px;
  }
`;