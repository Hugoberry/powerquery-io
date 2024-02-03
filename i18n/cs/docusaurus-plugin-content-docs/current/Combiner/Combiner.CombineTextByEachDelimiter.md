---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Vrátí funkci, která kombinuje seznam textu pomocí posloupnosti oddělovačů.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vrátí funkci, která sloučí seznam textových hodnot do jedné textové hodnoty pomocí posloupnosti oddělovačů.


## Examples

### Example #1 
Zkombinujte seznam textových hodnot pomocí posloupnosti oddělovačů.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
