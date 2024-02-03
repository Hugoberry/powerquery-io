---
title: BinaryFormat.Binary
---

# BinaryFormat.Binary


## Description

Returns a binary format that reads a binary value.


## Syntax

```powerquery
BinaryFormat.Binary(
    optional length as any
) as function
```


## Details

Returns a binary format that reads a binary value.  If <code>length</code> is specified, the binary value will contain that many bytes.  If <code>length</code> is not specified, the binary value will contain the remaining bytes.  The <code>length</code> can be specified either as a number, or as a binary format of the length that precedes the binary data.



## Category
Binary Formats.Reading binary data
