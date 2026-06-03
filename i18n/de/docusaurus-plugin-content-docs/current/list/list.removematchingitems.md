---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Entfernt alle Vorkommen der Eingabewerte.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Entfernt alle Vorkommen der in "`list2`" angegebenen Werte aus der Liste "`list1`". Sind die Werte aus "`list2`" in "`list1`" nicht vorhanden, wird die ursprüngliche Liste zurückgegeben. Zum Steuern der Gleichheitsüberprüfung kann ein optionales Gleichungskriterium (`equationCriteria`) angegeben werden.


## Examples

### Example #1
Erstellt eine Liste auf der Grundlage von "\{1, 2, 3, 4, 5, 5\}" ohne "\{1, 5\}".
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
