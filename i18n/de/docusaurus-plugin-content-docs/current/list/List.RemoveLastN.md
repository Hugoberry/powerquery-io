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

Gibt eine Liste zurück, in der die letzten <code>countOrCondition</code> Elemente am Ende der Liste '<code>list</code>' entfernt werden. Wenn '<code>list</code>' weniger als <code>countOrCondition</code> Elemente aufweist, wird eine leere Liste zurückgegeben. <ul> <li>Bei Angabe einer Zahl werden maximal so viele Elemente entfernt, wie angegeben. </li> <li>Bei Angabe einer Bedingung endet die zurückgegebene Liste mit dem untersten Element aus '<code>list</code>', das die Kriterien erfüllt. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt. </li> <li>Ist dieser Parameter NULL, wird nur ein Element entfernt. </li> </ul>


## Examples

### Example #1 
Erstellt eine Liste auf der Grundlage von &#39;\{1, 2, 3, 4, 5}&#39; ohne die letzten drei Zahlen.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Erstellt eine Liste auf der Grundlage von &#39;\{5, 4, 2, 6, 4}&#39;, die mit einer Zahl kleiner als 3 endet.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
