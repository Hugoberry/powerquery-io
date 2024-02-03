---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

傳回二進位格式，以讀取項目序列並傳回清單。


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

傳回二進位格式，以讀取項目序列並傳回 <code>list</code>。<code>countOrCondition</code> 參數指定每個項目的二進位格式。判斷讀取項目數的方法有三: <ul><li>如果未指定 <code>countOrCondition</code>，二進位格式會一直讀取到沒有其他任何項目為止。</li><li>如果 <code>countOrCondition</code> 是數字，二進位格式會讀取該數量的項目。</li><li>如果 <code>binaryFormat</code> 是函數，則針對讀取的每個項目叫用該函數。函數傳回 True 即繼續，傳回 False 則停止讀取項目。最後一個項目包含在清單中。</li><li>如果 <code>countOrCondition</code> 是二進位格式，則項目計數必須列在清單前面，系統會使用指定的格式讀取計數。</li></ul>


## Examples

### Example #1 
讀取位元組直到資料結尾。
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
讀取兩個位元組。
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
讀取位元組，直到位元組值大於或等於二。
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
