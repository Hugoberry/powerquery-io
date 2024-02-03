---
title: Record.FieldValues
---

# Record.FieldValues


## Description

フィールド値のリストを返します。


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

レコード <code>record</code> 内のフィールド値のリストを返します。


## Examples

### Example #1 
レコード内のフィールド値を調べます。
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
