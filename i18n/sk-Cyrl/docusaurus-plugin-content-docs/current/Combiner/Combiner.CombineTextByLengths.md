---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Vráti funkciu, ktorá kombinuje zoznam textu pomocou stanovených dĺžok.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Vráti funkciu, ktorá kombinuje zoznam textových hodnôt do jednej textovej hodnoty pomocou stanovených dĺžok.


## Examples

### Example #1 
Skombinujte zoznam textových hodnôt extrahovaním stanoveného počtu znakov z každej vstupnej hodnoty.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Skombinujte zoznam textových hodnôt extrahovaním stanoveného počtu znakov po prvom vyplnení výsledku textom šablóny.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
