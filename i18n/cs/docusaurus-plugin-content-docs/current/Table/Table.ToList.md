---
title: Table.ToList
---

# Table.ToList


## Description

Převede tabulku na seznam použitím zadané kombinační funkce na každý řádek hodnot tabulky.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Převede tabulku na seznam použitím zadané kombinační funkce na každý řádek hodnot tabulky.


## Examples

### Example #1 
Sloučí text každého řádku s použitím čárky.
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
