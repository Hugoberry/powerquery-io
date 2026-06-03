---
title: Table.Unpivot
---

# Table.Unpivot


Converte um conjunto de colunas existentes numa tabela em pares atributo-valor.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Remarks

Converte um conjunto de colunas existentes numa tabela em pares atributo-valor, combinado com o resto dos valores em cada linha.


## Examples

### Example #1
Utilizar as colunas "a", "b" e "c" da tabela `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` e convertê-las em pares atributo-valor.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
