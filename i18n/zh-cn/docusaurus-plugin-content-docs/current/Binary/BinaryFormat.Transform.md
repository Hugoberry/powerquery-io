---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

返回一个二进制格式，该二进制格式将转换由另一个二进制格式读取的值。


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

返回一个二进制格式，该二进制格式将转换由另一个二进制格式读取的值。 参数 <code>binaryFormat</code> 指定将用于读取值的二进制格式。 使用读取的值调用 <code>function</code>，并返回转换后的值。


## Examples

### Example #1 
读取一个字节并向其加 1。
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
