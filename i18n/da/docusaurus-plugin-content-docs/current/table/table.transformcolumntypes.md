---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Anvender typetransformationer i formatet \{ column, type } ved hjælp af den angivne kultur.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Returnerer en tabel fra inputtet <code>table</code> ved at anvende transformationshandlingen på de kolonner, der er angivet i parameteren <code>typeTransformations</code> (hvor formatet er \{ column name, type name}), ved hjælp af den angivne kultur i den valgfrie parameter <code>culture</code> (f.eks. "en-US").    Hvis kolonnen ikke findes, udløses der en undtagelse.


## Examples

### Example #1 
Transformér talværdierne i kolonnen [a] til tekstværdier ud fra tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
