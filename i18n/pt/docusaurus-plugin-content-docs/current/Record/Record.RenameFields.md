---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Applies rename(s) from a list in the form \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Returns a record after renaming fields in the input <code>record</code> to the new field names specified in list <code>renames</code>. For multiple renames, a nested list can be used (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Rename the field &#34;UnitPrice&#34; to &#34;Price&#34; from the record.
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
Rename the fields &#34;UnitPrice&#34; to &#34;Price&#34; and &#34;OrderNum&#34; to &#34;OrderID&#34;  from the record.
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
