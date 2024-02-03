---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Egy \{ old, new } alakú listán megadott átnevezés(eke)t hajt végre.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Egy olyan rekordot ad vissza, amelyben át vannak nevezve a bemeneti <code>record</code> mezői a(z) <code>renames</code> listán megadott új mezőnevekre. Több átnevezéshez beágyazott lista használható: (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Átnevezi a UnitPrice mezőt Price-ra a rekordban.
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
Átnevezi a UnitPrice mezőt Price-ra és az OrderNum mezőt OrderID-re a rekordban.
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
