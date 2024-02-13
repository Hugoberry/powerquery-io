---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Returnerar en funktion som kombinerar en lista med text med de angivna utdatapositionerna.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Returnerar en funktion som kombinerar en lista med textvärden till ett enda textvärde med de angivna utdatapositionerna.


## Examples

### Example #1 
Kombinera en lista med textvärden genom att placera dem i utdata vid de angivna positionerna.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
