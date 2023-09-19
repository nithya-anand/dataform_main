
   function sample(table, dimensions) {
    return `
        select
        ${dimensions.map(field => `${field} as ${field}`).join(",")}
        from ${table}
      `;
  }

 module.exports = { sample };