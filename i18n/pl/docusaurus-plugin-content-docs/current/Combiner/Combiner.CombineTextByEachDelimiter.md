---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Zwraca funkcję łączącą listę tekstów przy użyciu sekwencji ograniczników.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Zwraca funkcję łączącą listę wartości tekstowych w jedną wartość tekstową przy użyciu sekwencji ograniczników.


## Examples

### Example #1 
Połącz listę wartości tekstowych przy użyciu sekwencji ograniczników.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
