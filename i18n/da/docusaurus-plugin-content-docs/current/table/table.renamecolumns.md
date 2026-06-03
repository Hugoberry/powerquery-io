---
title: Table.RenameColumns
---

# Table.RenameColumns


Anvender nye navne i formatet \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Udfører de angivne omdøbninger på kolonnerne i tabellen `table`. En erstatningshandling `renames` består af en liste med to værdier, det gamle kolonnenavn og det nye kolonnenavn, som findes på en liste. Hvis kolonnen ikke findes, udløses der en fejl, medmindre den valgfrie parameter `missingField` angiver et alternativ (f.eks. `MissingField.UseNull` eller `MissingField.Ignore`).


## Examples

### Example #1
Erstat kolonnenavnet "CustomerNum" med "CustomerID" i tabellen.
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
Erstat kolonnenavnet "CustomerNum" med "CustomerID" og "PhoneNum" med "Phone" i tabellen.
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
Erstat kolonnenavnet "NewCol" med "NewColumn" i tabellen, og ignorer det, hvis kolonnen ikke findes.
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
