---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

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


## Details

Transforma <code>table</code> ao aplicar cada operação de coluna listada em <code>transformOperations</code> (em que o formato é \{ nome da coluna, transformação } ou \{ nome da coluna, transformação, novo tipo de coluna }).    Se for especificado um <code>defaultTransformation</code>, será aplicado a todas as colunas não listadas no <code>transformOperations</code>.    Se uma coluna listada no <code>transformOperations</code> não existir, será acionada uma exceção, a menos que o parâmetro opcional <code>missingField</code> especifique uma alternativa (por exemplo, <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Converte os valores de texto na coluna [A] em valores de números e os valores de números na coluna [B] em valores de texto.
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
Converte valores numéricos na coluna [X] em falta em valores de texto, ignorando as colunas que não existem.
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
Converte valores numéricos na coluna [X] em falta em valores de texto; o valor assumido por predefinição nas colunas que não existem é nulo.
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
Incrementa os valores de número na coluna [B] e converte-os em valores de texto, convertendo as restantes colunas em números.
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
