const express = require('express');
const app = express();
const port = 3000;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.listen(port, () => {
  console.log(`Express web server started: http://localhost:${port}`);
  console.log(`Serving content from /${sourceDir}/`);
});
