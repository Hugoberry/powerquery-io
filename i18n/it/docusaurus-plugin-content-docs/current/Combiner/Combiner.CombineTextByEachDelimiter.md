---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Restituisce una funzione che combina un elenco di testo utilizzando una sequenza di delimitatori.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Restituisce una funzione che combina un elenco di valori di testo in un singolo valore di testo utilizzando una sequenza di delimitatori.


## Examples

### Example #1 
Combina un elenco di valori di testo utilizzando una sequenza di delimitatori.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
