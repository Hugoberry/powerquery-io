---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transforma os valores dunha ou máis columnas.


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

Transforma <code>table</code> aplicando cada operación de columna indicada en <code>transformOperations</code> (onde o formato é \{ column name, transformation } ou \{ column name, transformation, new column type }).    Se se especifica unha <code>defaultTransformation</code>, aplicarase a todas as columnas non listadas en <code>transformOperations</code>.    Se non existe unha columna listada en <code>transformOperations</code>, lánzase unha excepción a menos que o parámetro opcional <code>missingField</code> especifique unha alternativa (por exemplo, <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Converte os valores de texto da columna [A] en valores numéricos e os valores numéricos da columna [B] en valores de texto.
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
Converte os valores numéricos da columna [X] que falta en valores de texto, ignorando as columnas que non existen.
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
Converte os valores numéricos da columna [X] que falta en valores de texto, sendo nulo por defecto nas columnas que non existen.
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
Incrementa os valores numéricos da columna [B] e convérteos en valores de texto e converte as demais columnas en números.
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
