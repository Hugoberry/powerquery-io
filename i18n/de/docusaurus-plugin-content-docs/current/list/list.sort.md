---
title: List.Sort
---

# List.Sort


Sortiert eine Liste mit Daten gemäß den angegebenen Kriterien.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Sortiert eine Liste mit Daten (`list`) gemäß den angegebenen optionalen Kriterien. Als Vergleichskriterium kann ein optionaler Parameter (`comparisonCriteria`) angegeben werden. Dieser akzeptiert folgende Werte:

-   Zum Steuern der Reihenfolge kann als Vergleichskriterium ein Order-Enumerationswert angegeben werden. (`Order.Descending`, `Order.Ascending`)
-   Zum Berechnen eines Schlüssels für die Sortierung kann eine Funktion mit einem einzelnen Argument verwendet werden.
-   Um sowohl einen Schlüssel auszuwählen als auch die Reihenfolge zu steuern, kann das Vergleichskriterium als Liste mit Schlüssel und Reihenfolge (`{each 1 / _, Order.Descending}`) angegeben werden.
-   Zur vollständigen Steuerung des Vergleichs kann eine Funktion mit zwei Argumenten verwendet werden (z. B. Value.Compare). Dieser Funktion werden zwei Elemente aus der Liste übergeben (zwei beliebige Elemente in beliebiger Reihenfolge). Die Funktion sollte einen der folgenden Werte zurückgeben:
    -   `-1`: Das erste Element ist kleiner als das zweite Element.
    -   `0`: Die Elemente sind gleichwertig.
    -   `1`: Das erste Element ist größer als das zweite Element.


## Examples

### Example #1
Sortiert die Liste "\{2, 3, 1\}".
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Sortiert die Liste "\{2, 3, 1\}" in absteigender Reihenfolge.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Sortiert die Liste "\{2, 3, 1\}" in absteigender Reihenfolge unter Verwendung der Value.Compare-Methode.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
