---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Vrne funkcijo, ki združi seznam besedila z določenimi položaji in dolžinami.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Vrne funkcijo, ki združi seznam besedilnih vrednosti v eno besedilno vrednost z uporabo določenih izhodnih položajev in dolžin. Dolžina "null" označuje, da je treba vključiti celotno besedilno vrednost.


## Examples

### Example #1 
Združite seznam besedilnih vrednosti z določenimi izhodnimi položaji in dolžinami.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
