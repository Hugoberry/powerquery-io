---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Returns a table where the columns have all been prefixed with the given text.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Returns a table where all the column names from the <code>table</code> provided are prefixed with the given text, <code>prefix</code>, plus a period in the form <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Prefix the columns with &#34;MyTable&#34; in the table.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
