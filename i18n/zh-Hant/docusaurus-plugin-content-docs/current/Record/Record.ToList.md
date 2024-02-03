---
title: Record.ToList
---

# Record.ToList


## Description

傳回值清單，內含輸入記錄的欄位值。


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

根據輸入 <code>record</code> 傳回包含欄位值的值清單。


## Examples

### Example #1 
從記錄中擷取欄位值。
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
