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

返回一个二进制格式，它基于已读取的值选择下一个二进制格式。 由此函数生成的二进制格式值的工作方式分为以下几个阶段:<ul><li>使用 <code>binaryFormat</code> 参数指定的二进制格式读取一个值。</li><li>将该值传递到由 <code>chooseFunction</code> 参数指定的选择函数。</li><li>该选择函数检查值并且返回第二个二进制格式。</li><li>使用该第二个二进制格式读取第二个值。</li><li>如果指定了合并函数，则第一个值和第二个值将传递到该合并函数，然后返回最终生成的值。</li><li>如果未指定该合并函数，则返回第二个值。</li><li>返回第二个值。</li></ul>可选的 <code>type</code> 参数指示选择函数将返回的二进制格式的类型。 或者可以指定 <code>type any</code>、<code>type list</code> 或 <code>type binary</code>。 如果未指定 <code>type</code> 参数，则使用 <code>type any</code>。  如果使用了 <code>type list</code> 或 <code>type binary</code>，则系统可能能够返回流式 <code>binary</code> 或 <code>list</code> 值，而不是缓冲后的值，这可以减少读取该格式所需的内存量。


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
