  // filename is includes/constants.js
  const PROJECT_ID = "my-clo-proj-nit";
  const SCHEMA_NAME = "patient";
  const RUN_ID="concat(current_datetime(),'cerner')"
  const STEP_ID="concat(current_datetime(),'cerner_step1')"
  module.exports = { PROJECT_ID,SCHEMA_NAME,RUN_ID,STEP_ID };
  