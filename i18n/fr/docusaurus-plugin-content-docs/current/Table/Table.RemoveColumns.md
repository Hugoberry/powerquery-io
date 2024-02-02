---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Supprime les colonnes spécifiées.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Supprime le <code>columns</code> spécifié de la <code>table</code> fournie.Si la colonne spécifiée n’existe pas, une erreur est générée, sauf si le paramètre facultatif <code>missingField</code> spécifie un autre comportement (par exemple, <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Supprime la colonne [Phone] de la table.
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
Essayez de supprimer une colonne inexistante de la table.
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
