---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Returns a list with the names of the columns that match the specified types.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Returns a list with the names of the columns from table `table` that match the types specified in `listOfTypes`.


## Examples

### Example #1
Return the names of columns of type Number.Type from the table.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
