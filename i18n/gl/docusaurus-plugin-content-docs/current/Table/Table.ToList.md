---
title: Table.ToList
---

# Table.ToList


## Description

Converte unha táboa nunha lista aplicando a función de combinación especificada para cada fila de valores na táboa.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Converte unha táboa nunha lista aplicando a función de combinación especificada para cada fila de valores na táboa.


## Examples

### Example #1 
Combine o texto de cada fila cunha coma.
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
