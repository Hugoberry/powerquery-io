---
title: Record.FieldCount
---

# Record.FieldCount


## Description

レコード内のフィールドの数を返します。


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

レコード <code>record</code> 内のフィールドの数を返します。


## Examples

### Example #1 
レコード内のフィールドの数を調べます。
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
