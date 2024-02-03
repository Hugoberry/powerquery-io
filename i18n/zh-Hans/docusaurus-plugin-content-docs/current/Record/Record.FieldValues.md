---
title: Record.FieldValues
---

# Record.FieldValues


## Description

返回字段值的列表。


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

返回记录 <code>record</code> 中的字段值列表。


## Examples

### Example #1 
在记录中查找字段值。
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
