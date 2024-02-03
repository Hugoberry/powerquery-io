---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

傳回讀取記錄的二進位格式。


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

傳回讀取記錄的二進位格式。<code>record</code> 參數指定記錄的格式。記錄的每個欄位可以具有不同的二進位格式。如果欄位包含的值不是二進位格式值，則不讀取該欄位的資料，直接將欄位值傳到結果。


## Examples

### Example #1 
讀取包含一個 16 位元整數和一個 32 位元整數的記錄。
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
