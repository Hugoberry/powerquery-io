---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Vráti funkciu, ktorá kombinuje zoznam textu pomocou postupnosti oddeľovačov.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vráti funkciu, ktorá kombinuje zoznam textových hodnôt do jednej textovej hodnoty pomocou postupnosti oddeľovačov.


## Examples

### Example #1 
Skombinuje zoznam textových hodnôt pomocou postupnosti oddeľovačov.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
