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

Returns a view of <code>table</code> where the functions specified in <code>handlers</code> are used in lieu of the default behavior of an operation when the operation is applied to the view.<br />If <code>table</code> is provided, all handler functions are optional. If <code>table</code> isn't provided, the <code>GetType</code> and <code>GetRows</code> handler functions are required. If a handler function isn't specified for an operation, the default behavior of the operation is applied to <code>table</code> instead (except in the case of <code>GetExpression</code>).<br />Handler functions must return a value that is semantically equivalent to the result of applying the operation against <code>table</code> (or the resulting view in the case of <code>GetExpression</code>).<br />If a handler function raises an error, the default behavior of the operation is applied to the view.<br /><code>Table.View</code> can be used to implement folding to a data source – the translation of M queries into source-specific queries (for example, to create T-SQL statements from M queries).<br />Refer to the published Power Query custom connector documentation for a more complete description of <code>Table.View</code>.<br />


## Examples

### Example #1 
Create a basic view that doesn&#39;t require accessing the rows in order to determine the type or the row count.
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
