---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Restituisce una funzione che combina un elenco di testo usando le posizioni e le lunghezze specificate.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Restituisce una funzione che combina un elenco di valori di testo in un singolo valore di testo utilizzando le posizioni di output e le lunghezze specificate. La lunghezza Null indica che deve essere incluso l'intero valore di testo.


## Examples

### Example #1 
Combina un elenco di valori di testo utilizzando le posizioni di output e le lunghezze specificate.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
