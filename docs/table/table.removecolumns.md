---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Removes the specified columns.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Removes the specified <code>columns</code> from the <code>table</code> provided.    If the specified column doesn't exist, an error is raised unless the optional parameter <code>missingField</code> specifies an alternative behavior (for example, <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Remove column [Phone] from the table.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
Try to remove a non-existent column from the table.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
