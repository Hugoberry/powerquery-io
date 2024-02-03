---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Primenjuje preimenovanja sa liste u obliku \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vraća zapis nakon preimenovanja polja iz unosa <code>record</code> u nova imena polja navedena na listi <code>renames</code>. Za više preimenovanja se može koristiti ugnežđena lista (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Preimenovanje polja „JediničnaCena“ u „Cena“ iz zapisa.
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
Preimenovanje polja „JediničnaCena“ u „Cena“ i „BrPorudžbine“ u „IDPorudžbine“ iz zapisa.
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
