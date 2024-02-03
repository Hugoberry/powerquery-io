---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Restituisce il primo offset di un valore in un elenco.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Restituisce l'offset nell'elenco <code>list</code> della prima occorrenza di un valore in un elenco <code>values</code>. Restituisce -1 se non viene trovata alcuna occorrenza.    È possibile specificare il parametro di occorrenza facoltativo <code>occurrence</code>.<ul>   <li><code>occurrence</code>: numero massimo di occorrenze che possono essere restituite.</li></ul>


## Examples

### Example #1 
Trovare la prima posizione nell&#39;elenco \{1, 2, 3} in cui sono presenti i valori 2 o 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
