---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transformiert die Werte einer oder mehrerer Spalten.


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

Transformiert <code>table</code> durch Anwenden jedes spaltenbasierten Vorgangs, der in <code>transformOperations</code> aufgeführt ist (wobei das Format \{ column name, transformation } oder \{ column name, transformation, new column type } ist). Wenn eine <code>defaultTransformation</code> angegeben ist, wird sie auf alle Spalten angewendet, die nicht in <code>transformOperations</code> aufgeführt sind. Wenn keine Spalte in <code>transformOperations</code> vorhanden ist, wird eine Ausnahme ausgelöst, es sei denn, der optionale Parameter <code>missingField</code> gibt eine Alternative an (z. B. <code>MissingField.UseNull</code> oder <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Konvertieren Sie die Textwerte in Spalte [A] in Zahlenwerte und die Zahlenwerte in Spalte [B] in Textwerte.
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
Konvertieren Sie die numerischen Werte in der fehlenden Spalte [X] in Textwerte. Dabei werden Spalten ignoriert, die nicht vorhanden sind.
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
Konvertieren Sie die numerischen Werte in der fehlenden Spalte [X] in Textwerte mit dem Standardwert NULL für Spalten, die nicht vorhanden sind.
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
Erhöhen Sie die Zahlenwerte in Spalte [B], konvertieren Sie sie in Textwerte, und konvertieren Sie alle anderen Spalten in Zahlen.
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
