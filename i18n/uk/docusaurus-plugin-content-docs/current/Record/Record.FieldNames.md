---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Повертає імена полів.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Повертає імена полів у записі <code>record</code> у вигляді тексту.


## Examples

### Example #1 
Знайти назви полів у записі.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
