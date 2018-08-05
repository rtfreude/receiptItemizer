import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

const FieldGroup = ({id, label, help, validationstate,...props}) => {
  return (
    <FormGroup controlId={id} validationState={validationstate}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
      <FormControl.Feedback />
    </FormGroup>
  );
}

export default FieldGroup;
