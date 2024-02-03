---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Atgriež funkciju, kas kombinē teksta sarakstu, izmantojot norādītās izvades pozīcijas.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Atgriež funkciju, kas teksta vērtību sarakstu kombinē vienā teksta vērtībā, izmantojot norādītās izvades pozīcijas.


## Examples

### Example #1 
Kombinēt teksta vērtību sarakstu, izvadē tās ievietojot norādītajās pozīcijās.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
