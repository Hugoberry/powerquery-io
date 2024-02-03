---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Restituisce una funzione che combina un elenco di testo utilizzando le posizioni di output specificate.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Restituisce una funzione che combina un elenco di valori di testo in un singolo valore di testo utilizzando le posizioni di output specificate.


## Examples

### Example #1 
Combina un elenco di valori di testo posizionandoli nell&#39;output alle posizioni specificate.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
