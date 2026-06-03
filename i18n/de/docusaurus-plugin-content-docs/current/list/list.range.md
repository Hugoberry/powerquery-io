---
title: List.Range
---

# List.Range


Gibt eine Teilmenge der Liste ab einem Offset zurück.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Gibt eine Teilmenge von `list` ab `offset` zurück. Ein optionaler Parameter „`count`“ legt die maximale Anzahl von Elementen in der Teilmenge fest.


## Examples

### Example #1
Ermittelt die Teilmenge ab dem Offset 6 in der Zahlenliste von 1 bis 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Ermittelt die Teilmenge mit der Länge 2 ab dem Offset 6 in der Zahlenliste von 1 bis 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
