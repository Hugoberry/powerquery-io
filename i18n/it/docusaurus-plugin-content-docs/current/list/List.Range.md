---
title: List.Range
---

# List.Range


Restituisce un subset dell&#39;elenco a partire da un offset.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Restituisce un subset dell'elenco a partire dall'offset <code>list</code>. Il parametro facoltativo <code>offset</code> imposta il numero massimo di elementi nel subset.


## Examples

### Example #1 
Trovare il subset che inizia all&#39;offset 6 dell&#39;elenco di numeri da 1 a 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Trovare il subset di lunghezza 2 dell&#39;offset 6, dall&#39;elenco di numeri da 1 a 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
