---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Pateikiama funkcija, kuri sujungia teksto sąrašą naudodama skyriklių seką.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Pateikiama funkcija, kuri sujungia teksto reikšmių sąrašą į vieną teksto reikšmę naudodama skyriklių seką.


## Examples

### Example #1 
Sujunkite tekstinių reikšmių sąrašą naudodami skyriklių seką.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
