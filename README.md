# uuid-buffer
Converts UUID strings to and from buffers.

```javascript
const uuidBuffer = require('uuid-buffer');

> const b = uuidBuffer.toBuffer('12345678-1234-1234-1234-123456781234');
<Buffer 12 34 56 78 12 34 12 34 12 34 12 34 56 78 12 34>

> uuidBuffer.toString(b);
'12345678-1234-1234-1234-123456781234'
```

