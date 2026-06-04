---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Vrne funkcijo, ki združi seznam besedila z nizom ločil.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Vrne funkcijo, ki združi seznam besedilnih vrednosti v eno besedilno vrednost z uporabo niza ločil.


## Examples

### Example #1
Združite seznam besedilnih vrednosti z nizom ločil.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
