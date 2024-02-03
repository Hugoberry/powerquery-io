---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Stosuje operacje zmiany nazwy określone na liście mającej formę \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Zwraca rekord po zmianie nazw pól w rekordzie wejściowym <code>record</code> na nowe nazwy pól określone na liście <code>renames</code>. W przypadku wielu operacji zmiany nazwy można użyć listy zagnieżdżonej (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Zmień nazwę pola „UnitPrice” na „Price” w rekordzie.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2 
Zmień nazwę pola „UnitPrice” na „Price” i pola „OrderNum” na „OrderID” w rekordzie.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
