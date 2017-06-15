
export function toBuffer(uuid:string):Buffer {
  const hexStr = uuid.replace(/-/g, '');
  if (uuid.length != 36 || hexStr.length != 32) throw new Error(`Invalid UUID string: ${uuid}`); 
  return Buffer.from(hexStr, 'hex');
}

export function toString(buffer:Buffer):string {
  if (buffer.length != 16) throw new Error(`Invalid buffer length for uuid: ${buffer.length}`);
  const str = buffer.toString('hex');
  return `${str.slice(0, 7)}-${str.slice(8, 11)}-${str.slice(12, 15)}-${str.slice(16, 19)}-${str.slice(20)}`;
}

