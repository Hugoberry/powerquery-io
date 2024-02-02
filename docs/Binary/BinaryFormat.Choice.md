---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Returns a binary format that chooses the next binary format based on a value that has already been read.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Returns a binary format that chooses the next binary format based on a value that has already been read.  The binary format value produced by this function works in stages:<ul><li>The binary format specified by the <code>binaryFormat</code> parameter is used to read a value.</li><li>The value is passed to the choice function specified by the <code>chooseFunction</code> parameter.</li><li>The choice function inspects the value and returns a second binary format.</li><li>The second binary format is used to read a second value.</li><li>If the combine function is specified, then the first and second values are passed to the combine function, and the resulting value is returned.</li><li>If the combine function is not specified, the second value is returned.</li><li>The second value is returned.</li></ul>The optional <code>type</code> parameter indicates the type of binary format that will be returned by the choice function.  Either <code>type any</code>, <code>type list</code>, or <code>type binary</code> may be specified.  If the <code>type</code> parameter is not specified, then <code>type any</code> is used.   If <code>type list</code> or <code>type binary</code> is used, then the system may be able to return a streaming <code>binary</code> or <code>list</code> value instead of a buffered one, which may reduce the amount of memory necessary to read the format.


## Examples

### Example #1 
Read a list of bytes where the number of elements is determined by the first byte.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
Read a list of bytes where the number of elements is determined by the first byte, and preserve the first byte read.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
Read a list of bytes where the number of elements is determined by the first byte using a streaming list.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
