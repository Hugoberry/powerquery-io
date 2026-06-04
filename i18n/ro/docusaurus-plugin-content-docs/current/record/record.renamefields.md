---
title: Record.RenameFields
---

# Record.RenameFields


Aplică redenumirile dintr-o listă în forma \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnează o înregistrare după redenumirea câmpurilor din datele introduse `record` în numele de câmpuri noi specificate în lista `renames`. Pentru mai multe redenumiri, se poate utiliza o listă imbricată (\{ \{old1, new1\}, \{old2, new2\} \}).


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
