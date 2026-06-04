---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Returnează o funcție ce combină o listă de texte utilizând o secvență de delimitatori.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Returnează o funcție ce combină o listă de valori text într-o singură valoare text utilizând o secvență de delimitatori.


## Examples

### Example #1
Combinați o listă de valori text utilizând o secvență de delimitatori.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
