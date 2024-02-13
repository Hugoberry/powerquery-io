---
title: Table.ToList
---

# Table.ToList


Konverterer en tabel til en liste ved at anvende den angivne samlefunktion på hver række med værdier i tabellen.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Remarks

Konverterer en tabel til en liste ved at anvende den angivne samlefunktion på hver række med værdier i tabellen.


## Examples

### Example #1 
Kombiner teksten i de enkelte rækker med et komma.
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
