---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Returns a table with the columns in the specified order.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Returns a table from the input <code>table</code>, with the columns in the order specified by <code>columnOrder</code>. Columns that are not specified in the list will not be reordered.     If the column doesn't exist, an exception is thrown unless the optional parameter <code>missingField</code> specifies an alternative (eg. <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Switch the order of the columns [Phone] and [Name] in the table.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Switch the order of the columns [Phone] and [Address] or use &#34;MissingField.Ignore&#34; in the table. It doesn&#39;t change the table because column [Address] doesn&#39;t exist.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
