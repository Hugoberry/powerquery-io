---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Tar bort de angivna kolumnerna.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Tar bort den angivna `columns` från den angivna `table`. Om den angivna kolumnen inte finns utlöses ett fel om inte den valfria parametern `missingField` anger ett alternativt beteende (till exempel `MissingField.UseNull` eller `MissingField.Ignore`).


## Examples

### Example #1
Ta bort kolumnen \[Phone\] från tabellen.
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
Försök att ta bort en kolumn som inte finns från tabellen.
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
