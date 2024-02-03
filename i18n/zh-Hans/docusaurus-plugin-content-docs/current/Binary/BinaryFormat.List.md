---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

返回读取项序列的二进制格式并且返回一个列表。


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

返回读取项序列并返回 <code>列表</code> 的二进制格式。<code>binaryFormat</code> 参数指定每个项的二进制格式。可通过三种方式确定读取的项数: <ul><li>如果未指定 <code>countOrCondition</code>，则将一直读取二进制格式，直到没有任何项为止。</li><li>如果 <code>countOrCondition</code> 是数字，则二进制格式将读取此数量的项。</li><li>如果 <code>countOrCondition</code> 是一个函数，则将为每个读取项调用该函数。该函数返回 true 可继续，返回 false 可停止读取项。最后一项包含在列表中。</li><li>如果 <code>countOrCondition</code> 是二进制格式，则项计数应位于列表前面，并使用指定的格式读取计数。</li></ul>


## Examples

### Example #1 
读取字节，直到到达数据末尾。
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
读取两个字节。
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
读取字节，直到字节值大于或等于 2。
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
