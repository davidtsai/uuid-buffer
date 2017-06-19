
export function toBuffer(uuid:string):Buffer {
  if (!uuid) {
    return Buffer.alloc(16); // Return empty buffer
  }
  const hexStr = uuid.replace(/-/g, '');
  if (uuid.length != 36 || hexStr.length != 32) throw new Error(`Invalid UUID string: ${uuid}`); 
  return Buffer.from(hexStr, 'hex');
}

export function toString(buffer:Buffer):string {
  if (buffer.length != 16) throw new Error(`Invalid buffer length for uuid: ${buffer.length}`);
  if (buffer.equals(Buffer.alloc(16))) return null; // If buffer is all zeros, return null
  const str = buffer.toString('hex');
  return `${str.slice(0, 8)}-${str.slice(8, 12)}-${str.slice(12, 16)}-${str.slice(16, 20)}-${str.slice(20)}`;
}

