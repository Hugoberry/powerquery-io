---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Returns a binary format that will transform the values read by another binary format.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Returns a binary format that will transform the values read by another binary format.  The <code>binaryFormat</code> parameter specifies the binary format that will be used to read the value.  The <code>function</code> is invoked with the value read, and returns the transformed value.


## Examples

### Example #1 
Read a byte and add one to it.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
