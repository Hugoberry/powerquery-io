---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Atgriež funkciju, kas kombinē teksta sarakstu, izmantojot norādītās pozīcijas un garumus.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Atgriež funkciju, kas teksta vērtību sarakstu kombinē vienā teksta vērtībā, izmantojot norādītās izvades pozīcijas un garumus. Garums Null norāda, ka ir jāiekļauj visa teksta vērtība.


## Examples

### Example #1 
Kombinēt teksta vērtību sarakstu, izmantojot norādītās izvades pozīcijas un garumus.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
