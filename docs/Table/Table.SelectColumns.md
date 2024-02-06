---
title: Table.SelectColumns
---

# Table.SelectColumns


Returns a table with only the specified columns.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Returns the <code>table</code> with only the specified <code>columns</code>.    <ul>       <li><code>table</code>: The provided table.</li>       <li><code>columns</code>: The list of columns from the table <code>table</code> to return. Columns in the returned table are in the order listed in <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Optional)</i> What to do if the column does not exist.  Example: <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Only include column [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
Only include columns [CustomerID] and [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
If the included column does not exist, the default result is an error.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
If the included column does not exist, option &lt;code&gt;MissingField.UseNull&lt;/code&gt; creates a column of null values.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
