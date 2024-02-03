---
title: Table.ToList
---

# Table.ToList


## Description

Converteşte un tabel într-o listă aplicând funcţia de combinare specificată în fiecare rând de valori din tabel.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Converteşte un tabel într-o listă aplicând funcţia de combinare specificată în fiecare rând de valori din tabel.


## Examples

### Example #1 
Combinați textul fiecărui rând cu o virgulă.
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
