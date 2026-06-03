---
title: List.Repeat
---

# List.Repeat


Restituisce un elenco che è costituito dal conteggio delle ripetizioni dell'elenco originale.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Restituisce un elenco che è costituito dalle `count` ripetizioni dell'elenco originale `list`.


## Examples

### Example #1
Creare un elenco con \{1, 2\} ripetuto 3 volte.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
