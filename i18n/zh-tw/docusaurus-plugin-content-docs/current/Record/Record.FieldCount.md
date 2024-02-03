---
title: Record.FieldCount
---

# Record.FieldCount


## Description

傳回記錄中的欄位數。


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

傳回記錄 <code>record</code> 中的欄位數。


## Examples

### Example #1 
找出記錄中欄位的數目。
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
