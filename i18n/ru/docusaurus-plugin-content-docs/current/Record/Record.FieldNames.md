---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Возвращает имена полей.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Возвращает имена полей в записи <code>record</code> в виде текста.


## Examples

### Example #1 
Нахождение имен полей в записи.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
