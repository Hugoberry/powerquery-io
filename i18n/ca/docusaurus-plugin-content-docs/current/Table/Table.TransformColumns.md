---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transforma els valors d&#39;una o més columnes.


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

Transforma <code>table</code> aplicant cada operació de columna enumera en <code>transformOperations</code> (on el format és \{ column name, transformation } o \{ column name, transformation, new column type }).    Si s'especifica un <code>defaultTransformation</code>, s'aplicarà a totes les columnes que no es mostren a <code>transformOperations</code>.    Si una columna mostrada a <code>transformOperations</code> no existeix, es produeix una excepció tret que el paràmetre opcional <code>missingField</code> especifiqui una alternativa (per exemple, <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Converteix els valors de text de la columna [A] en valors de nombre, i els valors de nombre de la columna [B] en valors de text.
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
Transforma els valors de nombre de la columna que falta [X] en valors de text i ignora les columnes que no existeixen.
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
Converteix els valors de nombre de la columna que falta [X] en valors de text i defineix les columnes que no existeixen com a nul·les per defecte.
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
Incrementa els valors de nombre de la columna [B] i els converteix en valors de text, i converteix totes les altres columnes en nombres.
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
