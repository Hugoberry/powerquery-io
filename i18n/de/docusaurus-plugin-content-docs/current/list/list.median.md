---
title: List.Median
---

# List.Median


Gibt den Median in der Liste zurück.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Gibt das Medianelement der Liste "`list`" zurück. Diese Funktion gibt `NULL`zurück, wenn die Liste keine Nicht-`NULL`\-Werte enthält. Wenn eine gerade Anzahl von Elementen vorhanden ist, wählt die Funktion das kleinere der beiden Medianelemente aus, es sei denn, die Liste ist besteht vollständig aus Datumswerten, Werten für die Dauer, Zahlen oder Uhrzeiten. In diesem Fall gibt die Funktion den Durchschnittswert der beiden Elemente zurück.


## Examples

### Example #1
Ermittelt den Median in der Liste `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
