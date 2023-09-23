const scd = require("dataform-scd");

// const { updates, table } =
 scd("asc_tgt003_patient_dimension_scd", {
  // A unique identifier for rows in the table.
  uniqueKey: "patient_dim_dk",
  // A field that stores a timestamp or date of when the row was last changed.
  timestamp: "last_updated",
  hash: "data_hash",
   source: {
      schema: "dataf_pat",
      name: "asc_tgt003_patient_dimension",
  },
  // Any configuration parameters to apply to the incremental table that will be created.
  // incrementalConfig: {
  //   bigquery: {
  //     partitionBy: "last_updated",
  //   },
  // },
});