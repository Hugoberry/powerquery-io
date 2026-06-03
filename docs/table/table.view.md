---
title: Table.View
---

# Table.View


Creates or extends a table with user-defined handlers for query and action operations.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Returns a view of `table` where the functions specified in `handlers` are used in lieu of the default behavior of an operation when the operation is applied to the view.

If `table` is provided, all handler functions are optional. If `table` isn't provided, the `GetType` and `GetRows` handler functions are required. If a handler function isn't specified for an operation, the default behavior of the operation is applied to `table` instead (except in the case of `GetExpression`).

Handler functions must return a value that is semantically equivalent to the result of applying the operation against `table` (or the resulting view in the case of `GetExpression`).

If a handler function raises an error, the default behavior of the operation is applied to the view.

`Table.View` can be used to implement folding to a data source – the translation of M queries into source-specific queries (for example, to create T-SQL statements from M queries).

Refer to the published Power Query custom connector documentation for a more complete description of `Table.View`.


## Examples

### Example #1
Create a basic view that doesn't require accessing the rows in order to determine the type or the row count.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
