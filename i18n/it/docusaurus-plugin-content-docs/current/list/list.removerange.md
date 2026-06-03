---
title: List.RemoveRange
---

# List.RemoveRange


Rimuove il numero di conteggio dei valori a partire dalla posizione specificata.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Rimuove `count` valori in `list` a partire dalla posizione specificata `index`.


## Examples

### Example #1
Rimuovere 3 valori nell'elenco \{1, 2, 3, 4, -6, -2, -1, 5\} a partire dall'indice 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
