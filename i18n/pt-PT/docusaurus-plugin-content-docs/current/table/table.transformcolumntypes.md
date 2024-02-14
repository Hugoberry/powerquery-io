---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Aplica transformações de tipo com o formato \{ column, type } utilizando uma cultura específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Devolve uma tabela a partir da entrada <code>table</code> aplicando a operação de transformação às colunas especificadas no parâmetro <code>typeTransformations</code> (em que o formato é \{ column name, type name}) utilizando a cultura especificada no parâmetro opcional <code>culture</code> (por exemplo, "en-US").    Se a coluna não existir, é emitida uma exceção.


## Examples

### Example #1 
Transformar os valores numéricos existentes na coluna [a] em valores de texto da tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
