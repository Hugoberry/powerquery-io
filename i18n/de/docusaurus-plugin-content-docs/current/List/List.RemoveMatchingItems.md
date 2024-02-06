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

Entfernt alle Vorkommen der in "<code>list2</code>" angegebenen Werte aus der Liste "<code>list1</code>". Sind die Werte aus "<code>list2</code>" in "<code>list1</code>" nicht vorhanden, wird die ursprüngliche Liste zurückgegeben.    Zum Steuern der Gleichheitsüberprüfung kann ein optionales Gleichungskriterium (<code>equationCriteria</code>) angegeben werden. 


## Examples

### Example #1 
Erstellt eine Liste auf der Grundlage von &#34;\{1, 2, 3, 4, 5, 5}&#34; ohne &#34;\{1, 5}&#34;.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
