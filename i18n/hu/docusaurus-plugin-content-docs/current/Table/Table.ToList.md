---
title: Table.ToList
---

# Table.ToList


## Description

Listára alakít át egy táblát úgy, hogy alkalmazza a megadott egyesítő függvényt a tábla összes értéksorára.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Listára alakít át egy táblát úgy, hogy alkalmazza a megadott egyesítő függvényt a tábla összes értéksorára.


## Examples

### Example #1 
Egyesítse vesszővel az egyes sorok szövegét.
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
