---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Tillämpar namnbyten i formatet \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Genomför angivna namnbyten på kolumnerna i tabellen <code>table</code>. En ersättningsåtgärd, <code>renames</code>, består av en lista med två värden, det gamla kolumnnamnet och det nya kolumnnamnet, som anges i en lista.    Om kolumnen inte finns genereras ett undantag såvida inte den valfria parametern <code>missingField</code> anger ett alternativ (t.ex. <code>MissingField.UseNull</code> eller <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Ersätt kolumnnamnet CustomerNum med CustomerID i tabellen.
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
Ersätt kolumnnamnet CustomerNum med CustomerID och PhoneNum med Phone i tabellen.
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
Ersätt kolumnnamnet NewCol med NewColumn i tabellen och ignorera om kolumnen inte finns.
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
