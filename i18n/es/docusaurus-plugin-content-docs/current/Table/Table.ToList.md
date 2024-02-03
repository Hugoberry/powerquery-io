---
title: Table.ToList
---

# Table.ToList


## Description

Convierte una tabla en una lista aplicando la función de combinación especificada a cada fila de valores de la tabla.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Convierte una tabla en una lista aplicando la función de combinación especificada a cada fila de valores de la tabla.


## Examples

### Example #1 
Combinar el texto de cada fila con una coma.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
