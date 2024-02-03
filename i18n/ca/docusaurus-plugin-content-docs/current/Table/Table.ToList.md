---
title: Table.ToList
---

# Table.ToList


## Description

Converteix una taula en una llista amb l&#39;aplicació de la funció de combinació especificada a cada fila de valors de la taula.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Converteix una taula en una llista amb l'aplicació de la funció de combinació especificada a cada fila de valors de la taula.


## Examples

### Example #1 
Combina el text de cada fila amb una coma.
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
