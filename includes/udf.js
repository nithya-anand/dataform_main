function audit(table, dimensions, metrics) {
    return `
        select
        ${dimensions.map(field => `${field} as ${field}`).join(",")},
        ${metrics.map(field => `count(${field}) as total`).join(",\n")}
        from ${table}
        group by ${dimensions.map((field, i) => `${i + 1}`).join(", ")}
      `;
  }

  module.exports = { audit };