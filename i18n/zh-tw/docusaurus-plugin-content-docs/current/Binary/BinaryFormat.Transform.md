---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

傳回二進位格式，以轉換其他二進位格式讀取的值。


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

傳回二進位格式，以轉換其他二進位格式讀取的值。<code>binaryFormat</code> 參數指定即將用來讀取值的二進位格式。系統會以讀取的值叫用 <code>function</code>，並傳回轉換的值。


## Examples

### Example #1 
讀取位元組，將它加一。
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
