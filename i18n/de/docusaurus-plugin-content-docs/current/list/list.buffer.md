---
title: List.Buffer
---

# List.Buffer


Puffert eine Liste.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Puffert die Liste "`list`" im Arbeitsspeicher. Das Ergebnis dieses Aufrufs ist eine stabile Liste.


## Examples

### Example #1
Erstellt eine stabile Kopie der Liste "\{1..10\}".
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
