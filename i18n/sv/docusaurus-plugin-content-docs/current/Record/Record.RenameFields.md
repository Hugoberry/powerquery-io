---
title: Record.RenameFields
---

# Record.RenameFields


Tillämpar namnbyten från en lista i formatet \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnerar en post efter namnbyte av fälten i indataposten <code>record</code> med de nya fältnamnen som anges i listan <code>renames</code>. För flera namnbyten kan en kapslad lista användas (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Byt namn på fältet UnitPrice till Price från posten.
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
Byt namn på fälten UnitPrice till Price och OrderNum till OrderID från posten.
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
