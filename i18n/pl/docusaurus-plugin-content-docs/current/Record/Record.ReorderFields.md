---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Zmienia kolejność określonych pól na nową kolejność.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Zwraca rekord po zmianie kolejności pól w rekordzie <code>record</code> na kolejność pól określoną na liście <code>fieldOrder</code>. Wartości pól są zachowywane, a pola niewymienione na liście <code>fieldOrder</code> pozostają na oryginalnych pozycjach.


## Examples

### Example #1 
Zmień kolejność niektórych pól w rekordzie.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
