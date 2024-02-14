---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


Returnerer en funktion, der kombinerer en liste over tekst ved hjælp af de angivne positioner og længder.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

Returnerer en funktion, der kombinerer en liste over tekstværdier til en enkelt tekstværdi ved hjælp af den angivne afgrænser. En nullængde angiver, at hele tekstværdien skal inkluderes.


## Examples

### Example #1 
Kombiner en liste over tekstværdier ved hjælp af de angivne output-positioner og -længder.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
