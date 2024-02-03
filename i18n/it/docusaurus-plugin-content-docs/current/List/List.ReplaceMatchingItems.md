---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Applica ogni sostituzione di \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Esegue le sostituzioni specificate nell'elenco <code>list</code>. L'operazione di sostituzione <code>replacements</code> è costituta da un elenco di due valori, il vecchio valore e il nuovo valore, forniti in un elenco.    È possibile specificare un valore dei criteri di equazione facoltativo, <code>equationCriteria</code>, per verificare il test di uguaglianza.


## Examples

### Example #1 
Creare un elenco da \{1, 2, 3, 4, 5} sostituendo il valore 5 con -5 e il valore 1 con -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
