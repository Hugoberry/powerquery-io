---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Uporabi pretvorbe vrste v obliki \{ column, type } z določeno kulturo.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Vrne tabelo iz vnosa <code>table</code> tako, da uporabi postopek pretvorbe za stolpce, navedene v parametru <code>typeTransformations</code> (v obliki zapisa \{ column name, type name}), z določeno kulturo v izbirnem parametru <code>culture</code> (na primer "sl-SI").    Če stolpec ne obstaja, pride do izjeme.


## Examples

### Example #1 
Pretvorite številske vrednosti v stolpcu [a] v besedilne vrednosti iz tabele &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
