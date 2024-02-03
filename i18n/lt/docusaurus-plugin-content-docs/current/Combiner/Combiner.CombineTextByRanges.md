---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Pateikiama funkcija, kuri sujungia teksto sąrašą naudodama nurodytas padėtis ir ilgius.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Pateikiama funkcija, kuri sujungia teksto reikšmių sąrašą į vieną teksto reikšmę naudodama nurodytas išvesties padėtis ir ilgius. Neapibrėžtas ilgis rodo, kad reikia įtraukti visą teksto reikšmę.


## Examples

### Example #1 
Sujunkite tekstinių reikšmių sąrašą naudodami nurodytas išvesties padėtis ir ilgius.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
