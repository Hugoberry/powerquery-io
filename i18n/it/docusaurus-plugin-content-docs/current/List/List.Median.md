---
title: List.Median
---

# List.Median


Restituisce il valore mediano dell&#39;elenco.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Restituisce l'elemento mediano dell'elenco <code>list</code>. La funzione restituisce <code>null</code> se l'elenco non contiene valori non <code>null</code>.    Se è presente un numero pari di elementi, la funzione sceglie il più piccolo dei due elementi mediani, a meno che l'elenco    non sia composto interamente da valori datetime, durate, numeri o orari. In tal caso restituisce una media dei due elementi.


## Examples

### Example #1 
Trovare l&#39;elemento mediano dell&#39;elenco &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
