---
title: Table.ToList
---

# Table.ToList


Konverterar en tabell till en listan genom att tillämpa angiven kombinationsfunktion på varje rad med värden i tabellen.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Remarks

Konverterar en tabell till en listan genom att tillämpa angiven kombinationsfunktion på varje rad med värden i tabellen.


## Examples

### Example #1 
Kombinera texten på varje rad med ett komma.
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
