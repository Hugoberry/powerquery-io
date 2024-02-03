---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Aplică redenumirile dintr-o listă în forma \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Returnează o înregistrare după redenumirea câmpurilor din datele introduse <code>record</code> în nume de câmpuri noi specificate în lista <code>renames</code>. Pentru mai multe redenumiri, se poate utiliza o listă imbricată (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Redenumiți câmpul „PrețUnitar” în „Preț” din înregistrare.
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
Redenumiți câmpurile „PrețUnitar” în „Preț” și „NumComandă” în „IdComandă” din înregistrare.
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
