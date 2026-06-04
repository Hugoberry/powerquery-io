---
title: Record.RenameFields
---

# Record.RenameFields


Tiek veikta pārdēvēšana atbilstoši šāda formāta sarakstam: \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Tiek atgriezts ieraksts, kurā ievades ieraksta `record` laukiem ir piešķirti sarakstā `renames` norādītie jaunie nosaukumi. Lai norādītu vairākus nosaukumus, varat izveidot ligzdotu sarakstu: (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Pārdēvējiet ieraksta lauku "UnitPrice" par "Price".
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
Pārdēvējiet ieraksta lauku "UnitPrice" par "Price" un lauku "OrderNum" par "OrderID".
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
