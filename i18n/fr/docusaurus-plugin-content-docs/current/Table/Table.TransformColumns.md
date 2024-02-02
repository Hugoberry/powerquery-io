---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transformez les valeurs d’une ou plusieurs colonnes.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

Transforme <code>table</code> en appliquant chaque opération de colonne répertoriée dans <code>transformOperations</code> (où le format est \{ column name, transformation } ou \{ column name, transformation, new column type }).    Si un <code>defaultTransformation</code> est spécifié, il est appliqué à toutes les colonnes non répertoriées dans <code>transformOperations</code>.    Si une colonne répertoriée dans <code>transformOperations</code> n’existe pas, une exception est levée, sauf si le paramètre facultatif <code>missingField</code> spécifie une alternative (par exemple, <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Convertissez les valeurs de texte de la colonne [A] en valeurs numériques et les valeurs numériques de la colonne [B] en valeurs de texte.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Convertissez les valeurs numériques de la colonne manquante [X] en valeurs de texte, en ignorant les colonnes qui n’existent pas.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Convertissez les valeurs numériques de la colonne manquante [X] en valeurs de texte, par défaut null sur les colonnes qui n’existent pas.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Incrémentez les valeurs numériques dans la colonne [B] et convertissez-les en valeurs de texte, puis convertissez toutes les autres colonnes en nombres.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
