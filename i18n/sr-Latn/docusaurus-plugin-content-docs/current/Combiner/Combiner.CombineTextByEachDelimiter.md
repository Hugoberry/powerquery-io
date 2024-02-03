---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Vraća funkciju koja kombinuje listu teksta pomoću sekvence znakova za razgraničavanje.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vraća funkciju koja kombinuje listu tekstualnih vrednosti u jednu tekstualnu vrednost pomoću sekvence znakova za razgraničavanje.


## Examples

### Example #1 
Kombinujte listu tekstualnih vrednosti pomoću sekvence znakova za razgraničavanje.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
