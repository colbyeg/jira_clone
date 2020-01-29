import styled from 'styled-components';

import { issueColorColors } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const ColorIcon = styled(Icon)`
  color: ${props => issueColorColors[props.color]};
`;
