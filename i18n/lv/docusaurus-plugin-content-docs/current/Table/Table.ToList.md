---
title: Table.ToList
---

# Table.ToList


## Description

Tabula tiek pārvērsta sarakstā, lietojot norādīto apvienošanas funkciju katrai tabulas vērtību rindai.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Tabula tiek pārvērsta sarakstā, lietojot norādīto apvienošanas funkciju katrai tabulas vērtību rindai.


## Examples

### Example #1 
Apvienot katras rindas teksta vērtību ar komatu.
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
