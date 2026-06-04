---
title: Record.RenameFields
---

# Record.RenameFields


Uporabi preimenovanja iz seznama v obliki \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vrne zapis po preimenovanju polj v vnosu `record` v nova imena polj, navedena na seznamu `renames`. Za več preimenovanj lahko uporabite ugnezdeni seznam (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Preimenujte polje"CenaEnote"v"Cena"v zapisu.
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
Preimenujte polje"CenaEnote"v"Cena"in polje"ŠtNaročila"v"IDNaročila"v zapisu.
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
