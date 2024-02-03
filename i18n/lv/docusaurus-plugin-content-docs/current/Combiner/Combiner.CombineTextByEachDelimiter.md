---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Atgriež funkciju, kas kombinē teksta sarakstu, izmantojot norobežotāju secību.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Atgriež funkciju, kas teksta vērtību sarakstu kombinē vienā teksta vērtībā, izmantojot atdalītāju secību.


## Examples

### Example #1 
Kombinēt teksta vērtību sarakstu, izmantojot norobežotāju secību.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
