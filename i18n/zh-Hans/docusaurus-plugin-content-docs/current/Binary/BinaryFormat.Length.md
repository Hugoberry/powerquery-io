---
title: BinaryFormat.Length
---

# BinaryFormat.Length


返回一个二进制格式，它列出可读取的数据量。


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

返回一个二进制格式，以限制可读取的数据量。<code>BinaryFormat.List</code> 和 <code>BinaryFormat.Binary</code> 都可用于读取到数据末尾。<code>BinaryFormat.Length</code> 可用于限制读取的字节数。<code>binaryFormat</code> 参数指定要限制的二进制格式。<code>length</code> 参数指定要读取的字节数。<code>length</code> 参数可以是数值，也可以是指定出现在要读取的值之前长度值格式的二进制格式值。


## Examples

### Example #1 
在读取字节列表时，将读取字节数限制为 2。
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
在读取字节列表时将读取字节数限制为该列表前面的字节值。
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
