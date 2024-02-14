---
title: Table.TransformColumns
---

# Table.TransformColumns


Trasforma i valori di una o più colonne.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Trasforma <code>table</code> applicando ogni operazione di colonna elencata in <code>transformOperations</code> (dove il formato è \{ column name, transformation } o \{ column name, transformation, new column type }).    Se viene specificato un <code>defaultTransformation</code>, verrà applicato a tutte le colonne non elencate in <code>transformOperations</code>.    Se una colonna elencata in <code>transformOperations</code> non esiste, viene generata un'eccezione, a meno che il parametro facoltativo <code>missingField</code> non specifichi un'alternativa (ad esempio <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Converte i valori di testo nella colonna [A] in valori numerici e i valori numerici nella colonna [B] in valori di testo.
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
Consente di trasformare i valori numerici nella colonna mancante [X] in valori di testo, ignorando le colonne che non esistono.
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
Converte i valori numerici nelle colonne mancanti [X] in valori di testo. Per le colonne che non esistono, verrà usato il valore predefinito Null.
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
Incrementa i valori numerici nella colonna [B], li converte in valori di testo e converte tutte le altre colonne in numeri.
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
