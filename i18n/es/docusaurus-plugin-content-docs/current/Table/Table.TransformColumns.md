---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transforma los valores de una o varias columnas.


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

Transforma <code>table</code> aplicando cada operación de columna enumerada en <code>transformOperations</code> (donde el formato es \{ column name, transformation } o \{ column name, transformation, new column type }). Si un <code>defaultTransformation</code> se especifica, se aplicará a todas las columnas que no aparezcan en <code>transformOperations</code>. Si no existe una columna enumerada en <code>transformOperations</code>, se produce una excepción a menos que el parámetro opcional <code>missingField</code> especifica una alternativa (por ejemplo, <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Convierte los valores de texto de la columna [A] en valores numéricos, y los valores numéricos de la columna [B] en valores de texto.
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
Convierte los valores numéricos de la columna que falta [X] en valores de texto, omitiendo las columnas que no existen.
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
Convierte los valores numéricos de la columna que falta [X] en valores de texto, y los convierte de forma predeterminada a null en las columnas que no existen.
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
Incrementa los valores numéricos de la columna [B] y los convierte en valores de texto, y convierte todas las demás columnas en números.
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
