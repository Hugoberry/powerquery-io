---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Retorna una funció que combina una llista de text mitjançant una seqüència de delimitadors.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Retorna una funció que combina una llista de valors de text en un únic valor de text mitjançant una seqüència de delimitadors.


## Examples

### Example #1 
Combina una llista de valors de text mitjançant una seqüència de delimitadors.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
