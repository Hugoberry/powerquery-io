---
title: Table.RenameColumns
---

# Table.RenameColumns


Applique les attributions de noms sous la forme \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Effectue les attributions de noms spécifiées sur les colonnes dans la table `table`. Une opération de remplacement `renames` comprend une liste de deux valeurs, l'ancien nom de colonne et le nouveau nom de colonne, fournies dans une liste. Si la colonne n’existe pas, une erreur est levée à moins que le paramètre facultatif `missingField` ne spécifie une autre solution (c’est-à-dire `MissingField.UseNull` ou `MissingField.Ignore`).


## Examples

### Example #1
Remplace le nom de la colonne « CustomerNum » de la table par « CustomerID ».
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
Remplace les noms de colonne de la table « CustomerNum » par « CustomerID » et « PhoneNum » par « Phone ».
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
Remplace le nom de colonne de la table « NewCol » par « NewColumn », et ignore cette requête si la colonne n'existe pas.
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
