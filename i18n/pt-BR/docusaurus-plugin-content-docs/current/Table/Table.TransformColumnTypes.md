---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Aplica transformações de tipo no formato \{ column, type } usando uma cultura específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Retorna uma tabela com base na entrada <code>table</code> aplicando a operação de transformação às colunas especificadas no parâmetro <code>typeTransformations</code> (cujo formato é \{ column name, type name}) usando a cultura especificada no parâmetro opcional <code>culture</code> (por exemplo, "en-US").    Se a coluna não existir, uma exceção será lançada.


## Examples

### Example #1 
Transforme os valores numéricos da coluna [a] em valores de texto a partir da tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
