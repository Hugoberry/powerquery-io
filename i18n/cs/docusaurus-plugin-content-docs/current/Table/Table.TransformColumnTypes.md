---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Použije transformace typu ve formátu \{ column, type } pomocí konkrétní jazykové verze.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Vrátí tabulku ze vstupu <code>table</code> použitím operace transformace na sloupce zadané v parametru <code>typeTransformations</code> (ve formátu \{ název sloupce, název typu}) pomocí jazykové verze zadané nepovinným parametrem <code>culture</code> (např. en-US).    Pokud sloupec neexistuje, je vyvolána výjimka.


## Examples

### Example #1 
Transformuje v tabulce &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; číselné hodnoty sloupce [a] na textové hodnoty.
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
