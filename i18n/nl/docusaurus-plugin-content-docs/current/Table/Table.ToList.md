---
title: Table.ToList
---

# Table.ToList


## Description

Converteert een tabel naar een lijst door de opgegeven combinatiefunctie op elke rij met waarden in de tabel toe te passen.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Converteert een tabel naar een lijst door de opgegeven combinatiefunctie op elke rij met waarden in de tabel toe te passen.


## Examples

### Example #1 
Combineer de tekst van elke rij met een komma.
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
