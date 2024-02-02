---
title: Table.ToList
---

# Table.ToList


## Description

Convertit une table en une liste en appliquant la fonction de combinaison spécifiée à chaque ligne de valeurs dans la liste.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Convertit une table en une liste en appliquant la fonction de combinaison spécifiée à chaque ligne de valeurs dans la liste.


## Examples

### Example #1 
Combinez le texte de chaque ligne avec une virgule.
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
