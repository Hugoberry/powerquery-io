---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplicates a column with the specified name. Values and type are copied from the source column.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Duplicate the column named <code>columnName</code> to the table <code>table</code>. The values and type for the column <code>newColumnName</code> are copied from coulmn <code>columnName</code>.


## Examples

### Example #1 
Duplicate the column &#34;a&#34; to a column named &#34;copied column&#34; in the table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
