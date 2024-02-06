---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


Returnerar en funktion som kombinerar en lista med text med de angivna positionerna och längderna.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

Returnerar en funktion som kombinerar en lista med textvärden till ett enda textvärde med de angivna utdatapositionerna och längderna. En null-längd anger att hela textvärdet ska inkluderas.


## Examples

### Example #1 
Kombinera en lista med textvärden med de angivna utdatapositionerna och längderna.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
