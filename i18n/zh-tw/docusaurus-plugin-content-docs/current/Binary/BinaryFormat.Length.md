---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

傳回二進位格式，以限制可讀取的資料量。


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

傳回二進位格式，其會限制可讀取的資料量。<code>BinaryFormat.List</code> 和 <code>BinaryFormat.Binary</code> 兩者都可以用來讀取到資料結尾。<code>BinaryFormat.Length</code> 可用來限制讀取的位元組數目。<code>binaryFormat</code> 參數會指定要限制的二進位格式。<code>length</code> 參數會指定要讀取的位元組數。<code>length</code> 參數可以是數值，也可以是二進位格式值，其指定顯示的長度值的格式，放在要讀取的值前面。


## Examples

### Example #1 
讀取位元組清單時，將讀取的位元組數限制為 2。
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
讀取位元組清單時，將讀取的位元組數限制為清單前面的位元組值。
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
