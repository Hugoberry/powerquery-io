---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Norādītās kolonnas tiek noņemtas.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Noņem norādīto `columns` no norādītā `table`. Ja norādītā kolonna nepastāv, tiek parādīts kļūdas ziņojums, ja vien neobligātais parametrs `missingField` nenorādīs alternatīvu reakciju (piemēram, `MissingField.UseNull` vai `MissingField.Ignore`).


## Examples

### Example #1
Noņemiet kolonnu \[Phone\] no tabulas.
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
Mēģiniet noņemt neesošu kolonnu no tabulas.
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
