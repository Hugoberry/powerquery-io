---
title: Table.RenameColumns
---

# Table.RenameColumns


Tiek pārdēvēta forma \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Tabulā `table` tiek veikta norādītā kolonnu pārdēvēšana. Aizstāšanas operācijā `renames` ir ietverts saraksts, kurā ir divas vērtības — vecais kolonnas nosaukums un jaunais kolonnas nosaukums. Ja kolonna nepastāv, tiek izraisīta kļūda, ja vien neobligātais parametrs `missingField` nenosaka alternatīvu (piemēram, `MissingField.UseNull` vai `MissingField.Ignore`).


## Examples

### Example #1
Aizvietojiet tabulā kolonnas nosaukumu "CustomerNum" ar "CustomerID".
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
Aizvietojiet tabulā kolonnas nosaukumu "CustomerNum" ar "CustomerID" un "PhoneNum" ar "Phone".
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
Aizstājiet tabulā kolonnas nosaukumu "NewCol" ar "NewColumn" un ignorējiet, ja kolonna nepastāv.
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
