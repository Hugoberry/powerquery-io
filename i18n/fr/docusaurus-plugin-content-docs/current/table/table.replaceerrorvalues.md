---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Remplace les valeurs d'erreur dans les colonnes indiquées par la valeur spécifiée correspondante.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Remplace les valeurs d'erreur dans les colonnes spécifiées par `table` avec les nouvelles valeurs de la liste `errorReplacement`. Le format de la liste est \{\{column1, value1\}, ...\}. Il ne peut y avoir qu'une seule valeur de remplacement par colonne ; spécifier la colonne plus d'une fois entraînera une erreur.


## Examples

### Example #1
Remplace la valeur de l'erreur par le texte « world » dans la table.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
Remplace dans la table la valeur de l'erreur de la colonne A par le texte « hello » et dans la colonne B par le texte « world ».
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
