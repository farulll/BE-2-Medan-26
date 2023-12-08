const express = require('express');
const app = express();
const PORT = 3003;

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
