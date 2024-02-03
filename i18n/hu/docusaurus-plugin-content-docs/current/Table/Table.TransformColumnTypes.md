---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Meghatározott kulturális környezet használatával alkalmazza az \{ column, type } jellegű típusátalakításokat.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Visszaad egy táblázatot a bemeneti <code>table</code> táblázatból úgy, hogy alkalmazza a <code>typeTransformations</code> paraméterben megadott oszlopokra az átalakítást (ahol a formátum \{ column name, type name}) a nem kötelező <code>culture</code> paraméterben megadott kulturális környezet használatával (például „en-US”).    Ha az oszlop nem létezik, a rendszer kivételt ad vissza.


## Examples

### Example #1 
Szöveges értékre alakítja át az &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; tábla [a] oszlopának számértékeit.
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
