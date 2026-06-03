---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Retourne une table contenant des colonnes dans l'ordre spécifié.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Retourne une table à partir de l'entrée `table`, avec les colonnes dans l'ordre spécifié par `columnOrder`. Les colonnes qui ne sont pas spécifiées dans la liste ne seront pas réorganisées. Si la colonne n’existe pas, une erreur est levée à moins que le paramètre facultatif `missingField` ne spécifie une autre solution (c’est-à-dire `MissingField.UseNull` ou `MissingField.Ignore`).


## Examples

### Example #1
Inverse l'ordre des colonnes \[Phone\] et \[Name\] dans la table.
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
Inverse l'ordre des colonnes \[Phone\] et \[Address\] de la table, ou utilise « MissingField.Ignore ». Ne change pas la table si la colonne \[Address\] n'existe pas.
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
