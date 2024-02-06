---
title: Table.RenameColumns
---

# Table.RenameColumns


Applies rename(s) of the form \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Performs the given renames to the columns in table <code>table</code>. A replacement operation <code>renames</code> consists of a list of two values, the old column name and new column name, provided in a list.    If the column doesn't exist, an exception is thrown unless the optional parameter <code>missingField</code> specifies an alternative (eg. <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Replace the column name &#34;CustomerNum&#34; with &#34;CustomerID&#34; in the table.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Replace the column name &#34;CustomerNum&#34; with &#34;CustomerID&#34; and &#34;PhoneNum&#34; with &#34;Phone&#34; in the table.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
Replace the column name &#34;NewCol&#34; with &#34;NewColumn&#34; in the table, and ignore if the column doesn&#39;t exist.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
