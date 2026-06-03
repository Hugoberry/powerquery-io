---
title: Record.FromTable
---

# Record.FromTable


Crée un enregistrement à partir d'une table au format \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Retourne un enregistrement à partir d’une table d’enregistrements `table` contenant les noms des champs et les noms des valeurs `{[Name = name, Value = value]}`. Désolé, une erreur est levée si les noms des champs ne sont pas uniques.


## Examples

### Example #1
Crée un enregistrement à partir de la table, de la forme Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
