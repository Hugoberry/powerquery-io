---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Возвращает список значений полей.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Возвращает список значений полей в записи <code>record</code>.


## Examples

### Example #1 
Нахождение значений полей в записи.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
