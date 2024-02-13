---
title: Table.TransformColumns
---

# Table.TransformColumns


Transforma os valores de uma ou mais colunas.


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

Transforma <code>table</code> aplicando cada operação de coluna listada em <code>transformOperations</code> (em que o formato é \{ column name, transformation } ou \{ column name, transformation, new column type }).    Se um <code>defaultTransformation</code> for especificado, ele será aplicado a todas as colunas não listas em <code>transformOperations</code>.     Se uma coluna listada em <code>transformOperations</code> não existe, uma exceção será lançada, a menos que o parâmetro opcional <code>missingField</code> especifique uma alternativa (por exemplo, <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Converta os valores de texto da coluna [A] em valores numéricos e os valores numéricos na coluna [B]~em valores de texto.
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
Converta os valores numéricos da coluna ausente [X] em valores de texto, ignorando colunas inexistentes.
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
Converte os valores numéricos da coluna ausente [X] em valores de texto, usando nulo como padrão em colunas inexistentes.
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
Incremente os valores numéricos da coluna [B], converta-os em valores de texto e converta todas as outras colunas em números.
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
