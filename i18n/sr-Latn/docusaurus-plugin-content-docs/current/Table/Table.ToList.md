---
title: Table.ToList
---

# Table.ToList


## Description

Konvertuje tabelu u listu primenom navedene funkcije kombinovanja na svaki red sa vrednostima u tabeli.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Konvertuje tabelu u listu primenom navedene funkcije kombinovanja na svaki red sa vrednostima u tabeli.


## Examples

### Example #1 
Kombinujte tekst u svakom redu pomoću zareza.
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
