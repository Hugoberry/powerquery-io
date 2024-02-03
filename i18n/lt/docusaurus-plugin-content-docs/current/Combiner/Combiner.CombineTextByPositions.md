---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Pateikiama funkcija, kuri sujungia teksto sąrašą naudodama nurodytas išvesties padėtis.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Pateikiama funkcija, kuri sujungia teksto reikšmių sąrašą į vieną teksto reikšmę naudodama nurodytas išvesties padėtis.


## Examples

### Example #1 
Sujunkite tekstinių reikšmių sąrašą įdėdami jas į išvestį nurodytose padėtyse.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
