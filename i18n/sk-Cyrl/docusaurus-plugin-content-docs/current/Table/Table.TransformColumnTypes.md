---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Použije transformácie typov vo formáte \{ column, type } pomocou špecifickej kultúry.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Vráti tabuľku zo vstupu <code>table</code> použitím operácie transformácie na stĺpce zadané v parametri <code>typeTransformations</code> (kde formát je \{ column name, type name}) pomocou zadanej kultúry vo voliteľnom parametri <code>culture</code> (napríklad en-US).    Ak stĺpec neexistuje, vyvolá sa výnimka.


## Examples

### Example #1 
Transformujte číselné hodnoty v stĺpci [a] na textové hodnoty z tabuľky &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
