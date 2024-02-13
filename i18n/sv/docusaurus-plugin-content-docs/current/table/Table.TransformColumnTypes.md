---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Tillämpar typtransformeringar i formatet \{ column, type } med hjälp av en specifik kultur.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Returnerar en tabell från angivna indata, <code>table</code>, genom att köra transformeringsåtgärden på kolumnerna som anges i parametern <code>typeTransformations</code> (där formatet är \{ column name, type name}) med hjälp av den angivna kulturen i parametern <code>culture</code> (till exempel, "en-US").    Om kolumnen inte finns genereras ett undantag.


## Examples

### Example #1 
Transformera de numeriska värdena i kolumnen [a] till textvärden från tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
