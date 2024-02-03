---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

レコードを読み取るバイナリ形式を返します。


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

レコードを読み取るバイナリ形式を返します。<code>record</code> パラメーターは、レコードの形式を指定します。レコードの各フィールドは、異なるバイナリ形式にすることができます。フィールドにバイナリ形式値でない値が含まれている場合、そのフィールドからはデータが読み取られず、フィールド値は結果にエコーされます。


## Examples

### Example #1 
1 つの 16 ビット整数と 1 つの 32 ビット整数を含むレコードを読み取ります。
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
