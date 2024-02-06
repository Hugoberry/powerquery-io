---
title: BinaryFormat.Record
---

# BinaryFormat.Record


返回读取记录的二进制格式。


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Remarks

返回读取记录的二进制格式。 <code>record</code> 参数指定该记录的格式。 该记录中的各字段可具有不同的二进制格式。 如果某个字段包含的值不是二进制格式值，则不会为该字段读取任何数据，并且该字段值回显到结果。


## Examples

### Example #1 
读取一个记录，该记录包含一个 16 位整数和一个 32 位整数。
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
