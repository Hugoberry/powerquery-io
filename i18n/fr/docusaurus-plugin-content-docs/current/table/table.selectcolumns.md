---
title: Table.SelectColumns
---

# Table.SelectColumns


Retourne une table contenant uniquement les colonnes spécifiées.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Retourne le `table` avec uniquement le `columns`.

-   `table` : la table fournie.
-   `columns` : la liste des colonnes de la table `table` à retourner. Les colonnes de la table retournée sont dans l’ordre répertorié dans `columns`.
-   `missingField` : *(Facultatif)* Que faire si la colonne n’existe pas. Exemple : `missingField.UseNull` ou `MissingField.Ignore`.


## Examples

### Example #1
Incluez uniquement la colonne \[Name\].
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2
Incluez uniquement les colonnes \[CustomerID\] et \[Name\].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3
Si la colonne incluse n'existe pas, le résultat par défaut est une erreur.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4
Si la colonne incluse n'existe pas, l'option `MissingField.UseNull` crée une colonne de valeurs nulles.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
