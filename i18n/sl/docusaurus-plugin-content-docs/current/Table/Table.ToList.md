---
title: Table.ToList
---

# Table.ToList


## Description

Pretvori tabelo v seznam, tako da uporabi določeno funkcijo združitve za vsako vrstico vrednosti v tabeli.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Pretvori tabelo v seznam, tako da uporabi določeno funkcijo združitve za vsako vrstico vrednosti v tabeli.


## Examples

### Example #1 
Besedilo v posamezni vrstici združite z vejico
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
