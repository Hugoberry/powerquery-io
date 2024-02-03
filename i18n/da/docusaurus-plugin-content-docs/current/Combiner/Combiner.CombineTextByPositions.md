---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Returnerer en funktion, der kombinerer en liste over tekst til en enkelt tekst ved hjælp af de angivne positioner.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Returnerer en funktion, der kombinerer en liste over tekstværdier til en enkelt tekstværdi ved hjælp af de angivne output-postioner.


## Examples

### Example #1 
Kombiner en liste over tekstværdier ved at placere dem i outputtet på de angivne positioner.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
