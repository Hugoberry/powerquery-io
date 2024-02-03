---
title: Table.ToList
---

# Table.ToList


## Description

Konvertuje tabuľku na zoznam použitím zadanej funkcie kombinovania na každý riadok hodnôt v tabuľke.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Konvertuje tabuľku na zoznam použitím zadanej funkcie kombinovania na každý riadok hodnôt v tabuľke.


## Examples

### Example #1 
Spojte text v jednotlivých riadkoch čiarkou.
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
