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

Rimuove <code>count</code> valori in <code>list</code> a partire dalla posizione specificata <code>index</code>.


## Examples

### Example #1 
Rimuovere 3 valori nell&#39;elenco \{1, 2, 3, 4, -6, -2, -1, 5} a partire dall&#39;indice 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
