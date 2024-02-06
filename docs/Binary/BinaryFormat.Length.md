---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Returns a binary format that limits the amount of data that can be read.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Returns a binary format that limits the amount of data that can be read.  Both <code>BinaryFormat.List</code> and <code>BinaryFormat.Binary</code> can be used to read until end of the data.  <code>BinaryFormat.Length</code> can be used to limit the number of bytes that are read.  The <code>binaryFormat</code> parameter specifes the binary format to limit.  The <code>length</code> parameter specifies the number of bytes to read.  The <code>length</code> parameter may either be a number value, or a binary format value that specifies the format of the length value that appears that precedes the value being read.


## Examples

### Example #1 
Limit the number of bytes read to 2 when reading a list of bytes.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Limit the number of byte read when reading a list of bytes to the byte value preceding the list.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
