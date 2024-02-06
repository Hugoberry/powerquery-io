---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformeert de waarden van een of meer kolommen.


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

Transformeert <code>table</code> door elke kolombewerking toe te passen die wordt vermeld in <code>transformOperations</code> (waarbij de indeling \{ column name, transformation } of \{ column name, transformation, new column type }) is.    Als een <code>defaultTransformation</code> is opgegeven, wordt deze toegepast op alle kolommen die niet in <code>transformOperations</code> worden vermeld.    Als een kolom in <code>transformOperations</code> niet bestaat, wordt er een uitzondering gegenereerd tenzij de optionele parameter <code>missingField</code> een alternatief opgeeft (bijvoorbeeld <code>MissingField.UseNull</code> of <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Converteer de tekstwaarden in kolom [A] naar getalwaarden en de getalwaarden in kolom [B] naar tekstwaarden.
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
Converteer de getalwaarden in ontbrekende kolom [X] naar tekstwaarden en negeer kolommen die niet bestaan.
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
Converteer de getalwaarden in ontbrekende kolom [X] naar tekstwaarden. Gebruik standaard null voor kolommen die niet bestaan.
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
Verhoog de getalwaarden in kolom [B] en converteer ze naar tekstwaarden, en converteer alle andere kolommen naar getallen.
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
