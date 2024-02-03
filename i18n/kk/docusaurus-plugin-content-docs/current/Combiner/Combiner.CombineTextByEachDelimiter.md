---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Бөлгіштер тізбегін пайдаланып мәтін тізімін біріктіретін функцияны қайтарады.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Бөлгіш тізбегін пайдаланып мәтіндік мәндер тізімін бір мәтіндік мәнге біріктіретін функцияны қайтарады.


## Examples

### Example #1 
Бөлгіш тізбегін пайдаланып мәтіндік мәндер тізімін біріктіріңіз.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
