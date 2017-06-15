# uuid-buffer
Converts UUID strings to and from buffers.

```javascript
const uuidBuffer = require('uuid-buffer');

> const b = uuidBuffer.toBuffer('1234567-123-123-123-123456781234');
<Buffer 12 34 56 78 12 34 12 34 12 34 12 34 56 78 12 34>

> uuidBuffer.toString(b);
'1234567-123-123-123-123456781234'
```

