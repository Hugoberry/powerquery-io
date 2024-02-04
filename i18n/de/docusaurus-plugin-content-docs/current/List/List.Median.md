---
title: List.Median
---

# List.Median


## Description

Gibt den Median in der Liste zurück.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Gibt das Medianelement der Liste "<code>list</code>" zurück. Diese Funktion gibt <code>NULL</code>zurück, wenn die Liste keine Nicht-<code>NULL</code>-Werte enthält.    Wenn eine gerade Anzahl von Elementen vorhanden ist, wählt die Funktion das kleinere der beiden Medianelemente aus, es sei denn, die Liste ist besteht vollständig aus Datumswerten, Werten für die Dauer, Zahlen oder Uhrzeiten. In diesem Fall gibt die Funktion den Durchschnittswert der beiden Elemente zurück.


## Examples

### Example #1 
Ermittelt den Median in der Liste &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
