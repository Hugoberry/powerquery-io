---
title: List.Sum
---

# List.Sum


Gibt die Summe der Elemente in der Liste zurück.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Gibt die Summe der Werte ungleich null in der Liste "`list`" zurück. Enthält die Liste keine Werte ungleich null, wird NULL zurückgegeben.


## Examples

### Example #1
Ermittelt die Summe der Zahlen in der Liste `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
