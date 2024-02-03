---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Vrne funkcijo, ki združuje seznam besedila z določenimi dolžinami.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Vrne funkcijo, ki združi seznam besedilnih vrednosti v eno besedilno vrednost z uporabo določenih dolžin.


## Examples

### Example #1 
Združite seznam besedilnih vrednosti tako, da ekstrahirate določeno število znakov iz posamezne vhodne vrednosti.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Združite seznam besedilnih vrednosti tako, da ekstrahirate določeno število znakov po prvem vnaprejšnjem polnjenju rezultata z besedilom predloge.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
