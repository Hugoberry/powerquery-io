---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Vrátí funkci, která kombinuje seznam textu pomocí zadaných délek.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Vrátí funkci, která sloučí seznam textových hodnot do jedné textové hodnoty s použitím zadaných délek.


## Examples

### Example #1 
Zkombinujte seznam textových hodnot extrahováním zadaného počtu znaků z každé vstupní hodnoty.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Zkombinujte seznam textových hodnot extrahováním zadaného počtu znaků po prvním vyplnění výsledku textem šablony.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
