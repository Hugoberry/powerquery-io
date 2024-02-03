---
title: List.PositionOf
---

# List.PositionOf


## Description

Restituisce gli offset di un valore in un elenco.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Restituisce l'offset in cui è presente il valore <code>value</code> nell'elenco <code>list</code>. Restituisce -1 se il valore non è presente.    È possibile specificare il parametro di occorrenza facoltativo <code>occurrence</code>.<ul>   <li><code>occurrence</code>: numero massimo di occorrenze da restituire.</li></ul>


## Examples

### Example #1 
Trovare la posizione nell&#39;elenco \{1, 2, 3} in cui è presente il valore 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
