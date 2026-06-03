---
title: List.ReplaceRange
---

# List.ReplaceRange


Sostituisce il numero di conteggio dei valori a partire dalla posizione con i valori di sostituzione.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

Sostituisce `count` valori in `list` con l'elenco `replaceWith` a partire dalla posizione specificata `index`.


## Examples

### Example #1
Sostituire \{7, 8, 9\} nell'elenco \{1, 2, 7, 8, 9, 5\} con \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
