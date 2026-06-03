---
title: List.RemoveLastN
---

# List.RemoveLastN


Gibt eine Liste zurück, in der die angegebene Anzahl von Elementen vom Listenende entfernt wird.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Gibt eine Liste zurück, in der die letzten `countOrCondition` Elemente am Ende der Liste `list` entfernt werden. Wenn `list` weniger als `countOrCondition` Elemente enthält, wird eine leere Liste zurückgegeben.

-   Wenn eine Anzahl angegeben wird, werden Elemente bis zu der Anzahl entfernt.
-   Wenn eine Bedingung angegeben wird, werden alle aufeinander folgenden übereinstimmenden Elemente am Ende von `list` entfernt.
-   Wenn dieser Parameter NULL ist, wird nur ein Element entfernt.


## Examples

### Example #1
Erstellt eine Liste auf der Grundlage von '\{1, 2, 3, 4, 5\}' ohne die letzten drei Zahlen.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Erstellt eine Liste auf der Grundlage von '\{5, 4, 2, 6, 4\}', die mit einer Zahl kleiner als 3 endet.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
