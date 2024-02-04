---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Gibt eine Liste zurück, in der die angegebene Anzahl von Elementen am Listenanfang übersprungen wird.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Gibt eine Liste zurück, in der das erste Element der Liste "<code>list</code>" entfernt wird. Ist die Liste "<code>list</code>" leer, wird eine leere Liste zurückgegeben.Diese Funktion akzeptiert einen optionalen Parameter (<code>countOrCondition</code>) zum Entfernen mehrerer Werte, wie in der folgenden Liste erläutert: <ul> <li>Bei Angabe einer Zahl werden maximal so viele Elemente entfernt, wie angegeben. </li> <li>Bei Angabe einer Bedingung beginnt die zurückgegebene Liste mit dem ersten Element aus "<code>list</code>", das die Kriterien erfüllt. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt. </li> <li>Ist dieser Parameter NULL, wird das Standardverhalten verwendet. </li> </ul>


## Examples

### Example #1 
Erstellt eine Liste auf der Grundlage von &#39;\{1, 2, 3, 4, 5}&#39; ohne die ersten drei Zahlen.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Erstellt eine Liste auf der Grundlage von &#34;\{5, 4, 2, 6, 1}&#34;, die mit einer Zahl kleiner 3 beginnt.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
