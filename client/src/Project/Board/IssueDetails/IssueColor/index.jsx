import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { IssueColor, IssueColorCopy } from 'shared/constants/issues';
import { IssueColorIcon, Select } from 'shared/components';

import { SectionTitle } from '../Styles';
import { Color, Label } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsColor = ({ issue, updateIssue }) => (
  <Fragment>
    <SectionTitle>Color</SectionTitle>
    <Select
      variant="empty"
      withClearValue={false}
      dropdownwidth={343}
      name="color"
      value={issue.color}
      options={Object.values(IssueColor).map(color => ({
        value: color,
        label: IssueColorCopy[color],
      }))}
      onChange={color => updateIssue({ color })}
      renderValue={({ value: color }) => renderColorItem(color, true)}
      renderOption={({ value: color }) => renderColorItem(color)}
    />
  </Fragment>
);

const renderColorItem = (color, isValue) => (
  <Color isValue={isValue}>
    <IssueColorIcon color={color} />
    <Label>{IssueColorCopy[color]}</Label>
  </Color>
);

ProjectBoardIssueDetailsColor.propTypes = propTypes;

export default ProjectBoardIssueDetailsColor;
