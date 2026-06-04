---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Vrne funkcijo, ki združi seznam besedila z določenimi izhodnimi položaji.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Vrne funkcijo, ki združi seznam besedilnih vrednosti v eno besedilno vrednost z uporabo določenih izhodnih položajev.


## Examples

### Example #1
Združite seznam besedilnih vrednosti tako, da jih postavite na določena izhodna mesta.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
