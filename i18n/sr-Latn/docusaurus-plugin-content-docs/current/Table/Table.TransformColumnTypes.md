---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Primenjuje transformacije tipa u obliku \{ column, type } pomoću određene kulture.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Vraća tabelu iz unosa <code>table</code> primenom operacije transformacije na kolone navedene u parametru <code>typeTransformations</code> (pri čemu je format \{ column name, type name}), pomoću navedene kulture u opcionalnom parametru <code>culture</code> (na primer, „en-US“).    Ako kolona ne postoji, vraća se izuzetak.


## Examples

### Example #1 
Transformacija brojčanih vrednosti iz kolone [a] u tekstualne vrednosti iz tabele &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
