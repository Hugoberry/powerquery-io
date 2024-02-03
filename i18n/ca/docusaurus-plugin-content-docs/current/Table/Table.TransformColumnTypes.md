---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Aplica transformacions de tipus de la forma \{ column, type } mitjançant una cultura específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Retorna una taula a partir de l'entrada <code>table</code>. Per fer-ho, aplica l'operació de transformació a les columnes especificades al paràmetre <code>typeTransformations</code> (en què el format és \{ column name, type name}), mitjançant la referència cultural especificada al paràmetre <code>culture</code> opcional (per exemple, "en-US").    Si no existeix la columna, es produeix una excepció.


## Examples

### Example #1 
Transforma els valors de nombre de la columna [a] en valors de text de la taula &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
