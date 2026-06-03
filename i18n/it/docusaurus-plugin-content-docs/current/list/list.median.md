---
title: List.Median
---

# List.Median


Restituisce il valore mediano dell'elenco.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Restituisce l'elemento mediano dell'elenco `list`. La funzione restituisce `null` se l'elenco non contiene valori non `null`. Se è presente un numero pari di elementi, la funzione sceglie il più piccolo dei due elementi mediani, a meno che l'elenco non sia composto interamente da valori datetime, durate, numeri o orari. In tal caso restituisce una media dei due elementi.


## Examples

### Example #1
Trovare l'elemento mediano dell'elenco `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
