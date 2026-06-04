---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


返回一个二进制格式，它基于已读取的值选择下一个二进制格式。


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

返回一个二进制格式，它基于已读取的值选择下一个二进制格式。 由此函数生成的二进制格式值的工作方式分为以下几个阶段:

-   使用 `binaryFormat` 参数指定的二进制格式读取一个值。
-   将该值传递到由 `chooseFunction` 参数指定的选择函数。
-   该选择函数检查值并且返回第二个二进制格式。
-   使用该第二个二进制格式读取第二个值。
-   如果指定了合并函数，则第一个值和第二个值将传递到该合并函数，然后返回最终生成的值。
-   如果未指定该合并函数，则返回第二个值。
-   返回第二个值。

可选的 `type` 参数指示选择函数将返回的二进制格式的类型。 或者可以指定 `type any`、`type list` 或 `type binary`。 如果未指定 `type` 参数，则使用 `type any`。 如果使用了 `type list` 或 `type binary`，则系统可能能够返回流式 `binary` 或 `list` 值，而不是缓冲后的值，这可以减少读取该格式所需的内存量。


## Examples

### Example #1
读取字节的列表，其中的元素数目由第一个字节确定。
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
读取字节的列表，其中的元素数目由第一个字节确定，并且保留读取的第一个字节。
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
读取字节的列表，其中的元素数目通过使用流式列表由第一个字节确定。
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
